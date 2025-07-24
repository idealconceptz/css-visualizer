interface CSSProperty {
  property: string;
  value: string;
}

interface CSSRule {
  selector: string;
  properties: CSSProperty[];
}

/**
 * Simple CSS parser for basic CSS manipulation
 * Focused on property updates rather than full CSS AST parsing
 */
export class SimpleCSSParser {
  /**
   * Parse CSS string into structured format
   */
  static parse(cssString: string): CSSRule[] {
    const rules: CSSRule[] = [];

    // Remove comments
    const cleanCSS = cssString.replace(/\/\*[\s\S]*?\*\//g, "");

    // Match CSS rules
    const ruleRegex = /([^{]+)\s*\{\s*([^}]*)\s*\}/g;
    let match;

    while ((match = ruleRegex.exec(cleanCSS)) !== null) {
      const selector = match[1].trim();
      const propertyBlock = match[2];

      const properties: CSSProperty[] = [];

      // Parse properties
      const propertyRegex = /([^:]+):\s*([^;]+);?/g;
      let propMatch;

      while ((propMatch = propertyRegex.exec(propertyBlock)) !== null) {
        properties.push({
          property: propMatch[1].trim(),
          value: propMatch[2].trim(),
        });
      }

      rules.push({
        selector,
        properties,
      });
    }

    return rules;
  }

  /**
   * Convert structured CSS back to string
   */
  static stringify(rules: CSSRule[]): string {
    return rules
      .map((rule) => {
        const properties = rule.properties.map((prop) => `  ${prop.property}: ${prop.value};`).join("\n");

        return `${rule.selector} {\n${properties}\n}`;
      })
      .join("\n\n");
  }

  /**
   * Update specific properties in CSS
   */
  static updateProperties(cssString: string, selector: string, updates: Record<string, string>): string {
    const rules = this.parse(cssString);

    const targetRule = rules.find((rule) => rule.selector.includes(selector) || selector.includes(rule.selector.trim()));

    if (!targetRule) {
      return cssString;
    }

    // Update existing properties or add new ones
    Object.entries(updates).forEach(([property, value]) => {
      const existingProp = targetRule.properties.find((p) => p.property === property);

      if (existingProp) {
        existingProp.value = value;
      } else {
        targetRule.properties.push({ property, value });
      }
    });

    return this.stringify(rules);
  }

  /**
   * Remove specific properties from CSS
   */
  static removeProperties(cssString: string, selector: string, propertiesToRemove: string[]): string {
    const rules = this.parse(cssString);

    const targetRule = rules.find((rule) => rule.selector.includes(selector) || selector.includes(rule.selector.trim()));

    if (!targetRule) {
      return cssString;
    }

    targetRule.properties = targetRule.properties.filter((prop) => !propertiesToRemove.includes(prop.property));

    return this.stringify(rules);
  }
}
