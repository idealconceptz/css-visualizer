import { toCSS } from "./toCSS";
import { JSONNode } from "./toJSON";

export const strNode = (selector: string, node: JSONNode, depth: number): string => {
  const indent = "  ".repeat(depth);
  const childCSS = toCSS(node, depth + 1);
  return `${indent}${selector} {\n${childCSS}${indent}}\n`;
};
