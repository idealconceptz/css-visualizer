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
   * Update element properties in CSS string
   */
  static updateElementProperties(cssString: string, properties: ElementProperties, selector = ".element"): string {
    // First, remove existing width/height related properties
    let updatedCSS = SimpleCSSParser.removeProperties(cssString, selector, ["width", "min-width", "max-width", "height", "min-height", "max-height"]);

    // Then update with new properties
    updatedCSS = SimpleCSSParser.updateProperties(updatedCSS, selector, {
      "min-width": `${properties.width}px`,
      "min-height": `${properties.height}px`,
      padding: `${properties.padding}px`,
      "font-size": `${properties.fontSize}px`,
    });

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
          // Handle shorthand padding
          const paddingValues = prop.value.split(" ");
          properties.padding = parseFloat(paddingValues[0]);
          break;
        }
        case "font-size":
          properties.fontSize = numericValue;
          break;
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
