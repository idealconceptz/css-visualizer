export const strAttr = (name: string, value: string | string[], depth: number): string => {
  const indent = "  ".repeat(depth);
  if (Array.isArray(value)) {
    return value.map((v) => `${indent}${name}: ${v};\n`).join("");
  }
  return `${indent}${name}: ${value};\n`;
};
