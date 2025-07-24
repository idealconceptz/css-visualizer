// Regular expressions for CSS parsing
export const commentX = /\/\*[\s\S]*?\*\//g;
export const lineAttrX = /([^:]+):\s*([^;]+)/;

// Main regex to capture different CSS parts
export const altX = /(\/\*[\s\S]*?\*\/)|([^{}]+)\{|(\})|([^{}]+)/g;
