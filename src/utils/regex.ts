// Regular expressions for CSS parsing
// Complex regex for parsing CSS - broken into simpler parts
const commentPattern = /\/\*[\s\S]*?\*\//;
const selectorPattern = /([^{}/*]*)\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/;
const endPattern = /([^/*{}]*)\}/;

export const altX = new RegExp(`${commentPattern.source}|${selectorPattern.source}|${endPattern.source}`, "g");
export const commentX = /\/\*[\s\S]*?\*\//g;
export const lineAttrX = /^([^:]+):(.*)$/;
