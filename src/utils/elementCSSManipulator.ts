import { SimpleCSSParser } from "./simpleCSSParser";

export interface ElementProperties {
  width: number;
  height: number;
  padding: number;
  fontSize: number;
}

/**
 * Utility for manipulating CSS properties for any HTML element
 */
export class ElementCSSManipulator {
  /**
   * Update element properties in CSS string, preserving original font-size and padding unless explicitly changed
   */
  static updateElementProperties(
    cssString: string,
    properties: ElementProperties,
    selector = ".element",
    preserveOriginalFontSize = false,
    preserveOriginalPadding = false
  ): string {
    // First, remove existing width/height related properties
    let updatedCSS = SimpleCSSParser.removeProperties(cssString, selector, ["width", "min-width", "max-width", "height", "min-height", "max-height"]);

    const updates: Record<string, string> = {
      "min-width": `${properties.width}px`,
      "min-height": `${properties.height}px`,
    };

    // Only update padding if we're not preserving the original
    if (!preserveOriginalPadding) {
      updates["padding"] = `${properties.padding}px`;
    }

    // Only update font-size if we're not preserving the original
    if (!preserveOriginalFontSize) {
      updates["font-size"] = `${properties.fontSize}px`;
    }

    // Then update with new properties
    updatedCSS = SimpleCSSParser.updateProperties(updatedCSS, selector, updates);

    return updatedCSS;
  }

  /**
   * Extract current element properties from CSS
   */
  static extractElementProperties(cssString: string, selector = ".element"): Partial<ElementProperties> {
    const rules = SimpleCSSParser.parse(cssString);

    const targetRule = rules.find((rule) => rule.selector.includes(selector) || selector.includes(rule.selector.trim()));

    if (!targetRule) {
      return {};
    }

    const properties: Partial<ElementProperties> = {};

    targetRule.properties.forEach((prop) => {
      const numericValue = parseFloat(prop.value);

      switch (prop.property) {
        case "width":
        case "min-width":
          properties.width = numericValue;
          break;
        case "height":
        case "min-height":
          properties.height = numericValue;
          break;
        case "padding": {
          // Handle shorthand padding with different units
          const paddingValues = prop.value.trim().split(/\s+/);
          const firstPaddingValue = paddingValues[0];

          if (firstPaddingValue.includes("rem")) {
            // Convert rem to px (assuming 1rem = 16px)
            const remValue = parseFloat(firstPaddingValue);
            properties.padding = remValue * 16;
          } else if (firstPaddingValue.includes("em")) {
            // Convert em to px (assuming 1em = 16px)
            const emValue = parseFloat(firstPaddingValue);
            properties.padding = emValue * 16;
          } else if (firstPaddingValue.includes("px")) {
            properties.padding = parseFloat(firstPaddingValue);
          } else {
            // Fallback for unitless values
            const numericValue = parseFloat(firstPaddingValue);
            if (!isNaN(numericValue)) {
              // If it's a reasonable padding number, assume px, otherwise assume rem
              properties.padding = numericValue > 10 ? numericValue : numericValue * 16;
            }
          }
          break;
        }
        case "font-size": {
          // Handle different font-size units
          if (prop.value.includes("rem")) {
            // Convert rem to px (assuming 1rem = 16px)
            const remValue = parseFloat(prop.value);
            properties.fontSize = remValue * 16;
          } else if (prop.value.includes("em")) {
            // Convert em to px (assuming 1em = 16px)
            const emValue = parseFloat(prop.value);
            properties.fontSize = emValue * 16;
          } else if (prop.value.includes("px")) {
            properties.fontSize = parseFloat(prop.value);
          } else {
            // Fallback for unitless values or other units
            const numericValue = parseFloat(prop.value);
            if (!isNaN(numericValue)) {
              // If it's a reasonable font size number, assume px
              properties.fontSize = numericValue > 50 ? numericValue : numericValue * 16;
            }
          }
          break;
        }
      }
    });

    return properties;
  }

  /**
   * Update a single property in the CSS
   */
  static updateSingleProperty(cssString: string, property: keyof ElementProperties, value: number, selector = ".element"): string {
    const propertyMap: Record<keyof ElementProperties, string> = {
      width: "min-width",
      height: "min-height",
      padding: "padding",
      fontSize: "font-size",
    };

    const cssProperty = propertyMap[property];
    const cssValue = `${value}px`;

    return SimpleCSSParser.updateProperties(cssString, selector, {
      [cssProperty]: cssValue,
    });
  }
}
