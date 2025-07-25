// Utility to help convert CSS to Tailwind CSS
// This script provides mappings and helpers for common CSS-to-Tailwind conversions

export const cssToTailwindMappings = {
  // Common color mappings
  colors: {
    "#667eea": "indigo-500",
    "#764ba2": "purple-600",
    "#00ff41": "green-400",
    "#ff6b6b": "red-400",
    "#4ecdc4": "teal-400",
    "#45b7d1": "sky-400",
    "#96ceb4": "emerald-300",
    "#feca57": "yellow-400",
    "#ff9a9e": "pink-300",
    "#fecfef": "pink-200",
    "#fd1d1d": "red-500",
    "#fcb045": "orange-400",
    "#833ab4": "purple-600",
    "#8338ec": "violet-600",
    "#3a86ff": "blue-500",
    "#ff006e": "pink-600",
    "#1e3c72": "blue-900",
    "#2a5298": "blue-700",
    "#ff0080": "pink-500",
    "#ff4444": "red-500",
    "#ff073a": "red-500",
    "#2196f3": "blue-500",
    "#1976d2": "blue-600",
    "#8b4513": "amber-800",
    "#daa520": "yellow-600",
    "#654321": "amber-900",
    "#f5deb3": "orange-100",
    "#a0522d": "orange-700",
    "#f0e68c": "yellow-300",
    "#b8860b": "yellow-700",
    "#f7971e": "orange-500",
    "#ffd200": "yellow-400",
    "#00c9ff": "cyan-400",
    "#92fe9d": "green-300",
    "#fad0c4": "pink-200",
    "#0a0a0a": "gray-900",
    "#1a1a1a": "gray-800",
    "#333": "gray-700",
    "#555": "gray-600",
    "#000": "black",
    white: "white",
    "#e0e5ec": "gray-200",
    "#f4f1e8": "orange-50",
    "#d2b48c": "orange-300",
    "#8b008b": "purple-700",
  },

  // Padding mappings
  padding: {
    "16px 32px": "px-8 py-4",
    "1rem 2rem": "px-8 py-4",
    "1.2rem 2.5rem": "px-10 py-5",
    "12px 24px": "px-6 py-3",
    "8px 16px": "px-4 py-2",
  },

  // Border radius mappings
  borderRadius: {
    0: "rounded-none",
    "3px": "rounded-sm",
    "4px": "rounded",
    "8px": "rounded-lg",
    "10px": "rounded-lg",
    "12px": "rounded-xl",
    "15px": "rounded-2xl",
    "16px": "rounded-2xl",
    "20px": "rounded-3xl",
    "25px": "rounded-3xl",
    "50px": "rounded-full",
  },

  // Font size mappings
  fontSize: {
    "10px": "text-xs",
    "12px": "text-sm",
    "14px": "text-sm",
    "16px": "text-base",
    "18px": "text-lg",
    "20px": "text-xl",
    "24px": "text-2xl",
    "1rem": "text-base",
    "1.1rem": "text-lg",
    "1.2rem": "text-xl",
  },

  // Common gradients
  gradients: {
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)": "bg-gradient-to-br from-indigo-500 to-purple-600",
    "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)": "bg-gradient-to-r from-red-400 via-teal-400 to-yellow-400",
    "linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)": "bg-gradient-to-r from-pink-300 to-pink-200",
    "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff)": "bg-gradient-to-r from-pink-600 via-violet-600 to-blue-500",
    "linear-gradient(45deg, #1e3c72, #2a5298)": "bg-gradient-to-r from-blue-900 to-blue-700",
    "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)": "bg-gradient-to-br from-orange-500 to-yellow-400",
    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)": "bg-gradient-to-br from-orange-100 to-orange-200",
    "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)": "bg-gradient-to-br from-yellow-300 to-blue-800",
    "radial-gradient(circle, #ff9a9e 0%, #fad0c4 100%)": "bg-gradient-radial from-pink-300 to-pink-200",
    "radial-gradient(ellipse at center, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)": "bg-gradient-radial from-purple-600 via-red-500 to-orange-400",
  },

  // Box shadow mappings
  boxShadow: {
    "0 4px 15px rgba(0, 0, 0, 0.2)": "shadow-lg",
    "0 6px 20px rgba(0, 0, 0, 0.3)": "shadow-xl",
    "0 2px 10px rgba(0, 0, 0, 0.2)": "shadow-md",
    "0 8px 32px rgba(31, 38, 135, 0.37)": "shadow-[0_8px_32px_rgba(31,38,135,0.37)]",
    "0 0 20px rgba(0, 255, 65, 0.3)": "shadow-[0_0_20px_rgba(0,255,65,0.3)]",
    "0 0 30px rgba(0, 255, 65, 0.8)": "shadow-[0_0_30px_rgba(0,255,65,0.8)]",
  },
};

// Helper function to convert common CSS properties to Tailwind
export function convertCSSToTailwind(css) {
  // This is a simplified converter - in practice, you'd want more sophisticated parsing
  const lines = css
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);
  const tailwindClasses = [];

  lines.forEach((line) => {
    if (line.includes("background:") && line.includes("linear-gradient")) {
      const gradient = line.match(/linear-gradient\([^)]+\)/)?.[0];
      if (gradient && cssToTailwindMappings.gradients[gradient]) {
        tailwindClasses.push(cssToTailwindMappings.gradients[gradient]);
      }
    }

    if (line.includes("color:") && !line.includes("background")) {
      const color = line.match(/color:\s*([^;]+)/)?.[1]?.trim();
      if (color && cssToTailwindMappings.colors[color]) {
        tailwindClasses.push(`text-${cssToTailwindMappings.colors[color]}`);
      }
    }

    if (line.includes("padding:")) {
      const padding = line.match(/padding:\s*([^;]+)/)?.[1]?.trim();
      if (padding && cssToTailwindMappings.padding[padding]) {
        tailwindClasses.push(cssToTailwindMappings.padding[padding]);
      }
    }

    // Add more conversions as needed...
  });

  return tailwindClasses.join(" ");
}
