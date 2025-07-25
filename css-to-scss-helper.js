// Helper script to convert CSS to basic SCSS
// This will help us quickly generate SCSS versions for the remaining button styles

const cssToScss = (cssString, styleName) => {
  // Extract common colors and values
  const colorRegex = /#[0-9a-fA-F]{3,6}/g;
  const colors = [...new Set(cssString.match(colorRegex) || [])];

  // Extract common values
  const paddingRegex = /padding:\s*([^;]+)/;
  const borderRadiusRegex = /border-radius:\s*([^;]+)/;
  const fontSizeRegex = /font-size:\s*([^;]+)/;

  const padding = cssString.match(paddingRegex)?.[1];
  const borderRadius = cssString.match(borderRadiusRegex)?.[1];
  const fontSize = cssString.match(fontSizeRegex)?.[1];

  // Generate variables
  let variables = "";

  if (colors.length > 0) {
    colors.forEach((color, index) => {
      const varName = index === 0 ? "primary-color" : index === 1 ? "secondary-color" : index === 2 ? "accent-color" : "color-" + (index + 1);
      variables += `$${varName}: ${color};\n`;
    });
  }

  if (padding) variables += `$padding: ${padding};\n`;
  if (borderRadius && borderRadius !== "0") variables += `$border-radius: ${borderRadius};\n`;
  if (fontSize) variables += `$font-size: ${fontSize};\n`;

  // Replace colors with variables in CSS
  let scssBody = cssString;
  colors.forEach((color, index) => {
    const varName = index === 0 ? "primary-color" : index === 1 ? "secondary-color" : index === 2 ? "accent-color" : "color-" + (index + 1);
    scssBody = scssBody.replaceAll(color, `$${varName}`);
  });

  if (padding) scssBody = scssBody.replace(new RegExp(padding.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "$padding");
  if (borderRadius && borderRadius !== "0") scssBody = scssBody.replace(new RegExp(borderRadius.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "$border-radius");
  if (fontSize) scssBody = scssBody.replace(new RegExp(fontSize.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "$font-size");

  // Convert pseudo-classes to nested format
  scssBody = scssBody.replace(/\.element:hover\s*{([^}]+)}/g, (match, content) => {
    return `\n  &:hover {${content.trim()}\n  }`;
  });

  scssBody = scssBody.replace(/\.element:active\s*{([^}]+)}/g, (match, content) => {
    return `\n  &:active {${content.trim()}\n  }`;
  });

  scssBody = scssBody.replace(/\.element:before\s*{([^}]+)}/g, (match, content) => {
    return `\n  &:before {${content.trim()}\n  }`;
  });

  scssBody = scssBody.replace(/\.element:hover:before\s*{([^}]+)}/g, (match, content) => {
    return `\n  &:hover:before {${content.trim()}\n  }`;
  });

  // Handle @keyframes
  const keyframesRegex = /@keyframes\s+([^{]+)\s*{([^}]+(?:\}[^@}]*\{[^}]*)*)\}/g;
  let keyframes = "";
  scssBody = scssBody.replace(keyframesRegex, (match, name, content) => {
    keyframes += match + "\n\n";
    return "";
  });

  // Clean up main element CSS
  scssBody = scssBody.replace(/\.element\s*{([^}]+(?:\}[^.]*\{[^}]*)*)\}/g, (match, content) => {
    return `.element {\n${content.trim()}\n}`;
  });

  return keyframes + variables + "\n" + scssBody;
};

// Example usage:
console.log("CSS to SCSS converter ready!");
