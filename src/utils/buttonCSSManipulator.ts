import { SimpleCSSParser } from "./simpleCSSParser";

export interface ButtonProperties {
  width: number;
  height: number;
  padding: number;
  fontSize: number;
}

/**
 * Utility for manipulating button CSS properties
 */
export class ButtonCSSManipulator {
  /**
   * Update button properties in CSS string
   */
  static updateButtonProperties(cssString: string, properties: ButtonProperties, selector = ".button"): string {
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
   * Extract current button properties from CSS
   */
  static extractButtonProperties(cssString: string, selector = ".button"): Partial<ButtonProperties> {
    const rules = SimpleCSSParser.parse(cssString);

    const targetRule = rules.find((rule) => rule.selector.includes(selector) || selector.includes(rule.selector.trim()));

    if (!targetRule) {
      return {};
    }

    const properties: Partial<ButtonProperties> = {};

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
  static updateSingleProperty(cssString: string, property: keyof ButtonProperties, value: number, selector = ".button"): string {
    const propertyMap: Record<keyof ButtonProperties, string> = {
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
