// CSS string to JSON parser

const commentX = /\/\*[\s\S]*?\*\//g;

/**
 * Input is css string and current pos, returns JSON object
 *
 * @param cssString
 *            The CSS string.
 * @param args
 *            An optional argument object. ordered: Whether order of
 *            comments and other nodes should be kept in the output. This
 *            will return an object where all the keys are numbers and the
 *            values are objects containing "name" and "value" keys for each
 *            node. comments: Whether to capture comments. split: Whether to
 *            split each comma separated list of selectors.
 */
const defaultArgs = {
  ordered: false,
  comments: false,
  stripComments: false,
  split: false,
};

export interface CssAttributes {
  [attribute: string]: string | string[];
}

export interface Children {
  [attribute: string]: {
    children: Children;
    attributes: CssAttributes;
  };
}

export interface OrderedNode {
  name?: string;
  value?: JSONNode | string;
  type?: "rule" | "attr";
}

export interface JSONNode {
  children: Children;
  attributes: CssAttributes;
  [key: number]: string | OrderedNode; // For ordered mode
}

/**
 * Parse CSS string into JSON object
 * @param cssString - The CSS string to parse
 * @param args - Optional arguments for parsing behavior
 */
export const toJSON = function (cssString: string, args = defaultArgs): JSONNode {
  const node: JSONNode = {
    children: {},
    attributes: {},
  };

  if (args.stripComments) {
    cssString = cssString.replace(commentX, "");
  }

  // Split CSS into rules
  const rules = extractCSSRules(cssString);

  let count = 0;
  for (const rule of rules) {
    if (rule.type === "comment" && args.comments && rule.content) {
      if (args.ordered) {
        node[count++] = rule.content;
      }
    } else if (rule.type === "rule" && rule.selector && rule.declarations !== undefined) {
      const selectors = args.split ? rule.selector.split(",") : [rule.selector];

      if (args.ordered) {
        const childNode = parseDeclarations(rule.declarations);
        node[count++] = {
          name: rule.selector,
          value: childNode,
          type: "rule",
        };
      } else {
        for (const selector of selectors) {
          if (selector) {
            const trimmedSelector = selector.trim();
            if (trimmedSelector) {
              const childNode = parseDeclarations(rule.declarations);

              if (trimmedSelector in node.children) {
                // Merge attributes
                Object.assign(node.children[trimmedSelector].attributes, childNode.attributes);
              } else {
                node.children[trimmedSelector] = childNode;
              }
            }
          }
        }
      }
    }
  }

  return node;
};

/**
 * Extract CSS rules from a CSS string
 */
function extractCSSRules(cssString: string): Array<{ type: "rule" | "comment"; selector?: string; declarations?: string; content?: string }> {
  const rules: Array<{ type: "rule" | "comment"; selector?: string; declarations?: string; content?: string }> = [];
  let i = 0;

  while (i < cssString.length) {
    // Skip whitespace
    while (i < cssString.length && /\s/.test(cssString[i])) {
      i++;
    }

    if (i >= cssString.length) break;

    // Check for comment
    if (cssString.substring(i, i + 2) === "/*") {
      const start = i;
      i += 2;
      while (i < cssString.length - 1) {
        if (cssString.substring(i, i + 2) === "*/") {
          i += 2;
          break;
        }
        i++;
      }
      const comment = cssString.substring(start + 2, i - 2);
      rules.push({ type: "comment", content: comment.trim() });
      continue;
    }

    // Find selector (everything before the opening brace)
    const selectorStart = i;
    while (i < cssString.length && cssString[i] !== "{") {
      i++;
    }

    if (i >= cssString.length) break;

    const selector = cssString.substring(selectorStart, i).trim();
    i++; // Skip opening brace

    // Find declarations (everything between braces)
    const declarationsStart = i;
    let braceCount = 1;

    while (i < cssString.length && braceCount > 0) {
      if (cssString[i] === "{") {
        braceCount++;
      } else if (cssString[i] === "}") {
        braceCount--;
      }
      i++;
    }

    const declarations = cssString.substring(declarationsStart, i - 1).trim();

    if (selector && declarations !== undefined) {
      rules.push({ type: "rule", selector, declarations });
    }
  }

  return rules;
}

/**
 * Parse CSS declarations into a JSONNode
 */
function parseDeclarations(declarations: string): JSONNode {
  const node: JSONNode = {
    children: {},
    attributes: {},
  };

  if (!declarations) return node;

  // Split by semicolon and parse each declaration
  const decls = declarations.split(";");

  for (const decl of decls) {
    const trimmed = decl.trim();
    if (!trimmed) continue;

    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;

    const property = trimmed.substring(0, colonIndex).trim();
    const value = trimmed.substring(colonIndex + 1).trim();

    if (property && value) {
      if (property in node.attributes) {
        const currentValue = node.attributes[property];
        if (Array.isArray(currentValue)) {
          currentValue.push(value);
        } else {
          node.attributes[property] = [currentValue, value];
        }
      } else {
        node.attributes[property] = value;
      }
    }
  }

  return node;
}
