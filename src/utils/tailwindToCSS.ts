// Utility to convert Tailwind classes to CSS
// This helps keep all three tabs (CSS, SCSS, Tailwind) in sync

import { twi } from "tw-to-css";

export class TailwindToCSS {
  private static readonly tailwindToCssMap: Record<string, string> = {
    // Background colors
    "bg-black": "background: #000000",
    "bg-white": "background: #ffffff",
    "bg-gray-50": "background: #f9fafb",
    "bg-gray-100": "background: #f3f4f6",
    "bg-gray-200": "background: #e5e7eb",
    "bg-gray-300": "background: #d1d5db",
    "bg-gray-400": "background: #9ca3af",
    "bg-gray-500": "background: #6b7280",
    "bg-gray-600": "background: #4b5563",
    "bg-gray-700": "background: #374151",
    "bg-gray-800": "background: #1f2937",
    "bg-gray-900": "background: #111827",
    "bg-gray-950": "background: #030712",
    "bg-red-400": "background: #f87171",
    "bg-red-500": "background: #ef4444",
    "bg-red-600": "background: #dc2626",
    "bg-blue-500": "background: #3b82f6",
    "bg-blue-600": "background: #2563eb",
    "bg-blue-700": "background: #1d4ed8",
    "bg-indigo-500": "background: #6366f1",
    "bg-purple-600": "background: #9333ea",
    "bg-green-400": "background: #4ade80",
    "bg-green-500": "background: #22c55e",
    "bg-green-900": "background: #14532d",
    "bg-green-950": "background: #052e16",
    "bg-pink-300": "background: #f9a8d4",
    "bg-pink-500": "background: #ec4899",
    "bg-pink-600": "background: #db2777",
    "bg-orange-400": "background: #fb923c",
    "bg-orange-500": "background: #f97316",
    "bg-yellow-400": "background: #facc15",
    "bg-cyan-400": "background: #22d3ee",
    "bg-transparent": "background: transparent",

    // Background gradients
    "bg-gradient-to-r": "background: linear-gradient(to right, var(--tw-gradient-stops))",
    "bg-gradient-to-br": "background: linear-gradient(to bottom right, var(--tw-gradient-stops))",
    "bg-gradient-to-b": "background: linear-gradient(to bottom, var(--tw-gradient-stops))",
    "from-indigo-500":
      "--tw-gradient-from: #6366f1; --tw-gradient-to: rgb(99 102 241 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)",
    "from-pink-500": "--tw-gradient-from: #ec4899; --tw-gradient-to: rgb(236 72 153 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)",
    "from-pink-600": "--tw-gradient-from: #db2777; --tw-gradient-to: rgb(219 39 119 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)",
    "to-purple-600": "--tw-gradient-to: #9333ea",
    "via-purple-600": "--tw-gradient-to: rgb(147 51 234 / 0); --tw-gradient-stops: var(--tw-gradient-from), #9333ea, var(--tw-gradient-to)",
    "to-blue-500": "--tw-gradient-to: #3b82f6",

    // Text colors
    "text-white": "color: #ffffff",
    "text-black": "color: #000000",
    "text-gray-700": "color: #374151",
    "text-gray-800": "color: #1f2937",
    "text-red-600": "color: #dc2626",
    "text-blue-500": "color: #3b82f6",
    "text-green-400": "color: #4ade80",
    "text-green-500": "color: #22c55e",
    "text-purple-800": "color: #6b21a8",
    "text-amber-800": "color: #92400e",
    "text-amber-900": "color: #78350f",
    "text-pink-600": "color: #db2777",

    // Padding & Margin
    "px-8": "padding-left: 2rem; padding-right: 2rem",
    "py-4": "padding-top: 1rem; padding-bottom: 1rem",
    "py-5": "padding-top: 1.25rem; padding-bottom: 1.25rem",
    "px-10": "padding-left: 2.5rem; padding-right: 2.5rem",
    "p-2": "padding: 0.5rem",
    "p-4": "padding: 1rem",
    "p-8": "padding: 2rem",

    // Border
    "border-none": "border: none",
    border: "border-width: 1px",
    "border-2": "border-width: 2px",
    "border-3": "border-width: 3px",
    "border-4": "border-width: 4px",
    "border-6": "border-width: 6px",
    "border-[6px]": "border-width: 6px",
    "border-black": "border-color: #000000",
    "border-white": "border-color: #ffffff",
    "border-gray-300": "border-color: #d1d5db",
    "border-gray-700": "border-color: #374151",
    "border-gray-800": "border-color: #1f2937",
    "border-red-500": "border-color: #ef4444",
    "border-blue-500": "border-color: #3b82f6",
    "border-green-400": "border-color: #4ade80",
    "border-green-500": "border-color: #22c55e",
    "border-pink-600": "border-color: #db2777",
    "border-yellow-600": "border-color: #ca8a04",
    "border-white/30": "border-color: rgba(255, 255, 255, 0.3)",

    // Border radius
    rounded: "border-radius: 0.25rem",
    "rounded-lg": "border-radius: 0.5rem",
    "rounded-xl": "border-radius: 0.75rem",
    "rounded-2xl": "border-radius: 1rem",
    "rounded-none": "border-radius: 0",

    // Font sizes
    "text-base": "font-size: 1rem",
    "text-lg": "font-size: 1.125rem",
    "text-xl": "font-size: 1.25rem",
    "text-2xl": "font-size: 1.5rem",

    // Font weights
    "font-bold": "font-weight: 700",
    "font-semibold": "font-weight: 600",
    "font-medium": "font-weight: 500",
    "font-black": "font-weight: 900",

    // Font families
    "font-mono": 'font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
    "font-serif": 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    "font-sans": 'font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',

    // Text transform
    uppercase: "text-transform: uppercase",

    // Cursor
    "cursor-pointer": "cursor: pointer",

    // Transitions
    "transition-all": "transition-property: all",
    "duration-100": "transition-duration: 100ms",
    "duration-300": "transition-duration: 300ms",
    "duration-500": "transition-duration: 500ms",
    "duration-[400ms]": "transition-duration: 400ms",
    "ease-in-out": "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)",

    // Transform
    "scale-105": "transform: scale(1.05)",
    "scale-110": "transform: scale(1.1)",
    "scale-[0.98]": "transform: scale(0.98)",
    "scale-[1.05]": "transform: scale(1.05)",
    "-translate-y-0.5": "transform: translateY(-0.125rem)",
    "-translate-y-1": "transform: translateY(-0.25rem)",
    "translate-y-0": "transform: translateY(0)",
    "translate-y-0.5": "transform: translateY(0.125rem)",
    "-translate-x-0.5": "transform: translateX(-0.125rem)",
    "translate-x-0.5": "transform: translateX(0.125rem)",
    "translate-x-1": "transform: translateX(0.25rem)",
    "translate-y-1": "transform: translateY(0.25rem)",

    // Position
    relative: "position: relative",
    "overflow-hidden": "overflow: hidden",

    // Display utilities
    block: "display: block",
    "inline-block": "display: inline-block",
    flex: "display: flex",

    // Backdrop filter
    "backdrop-blur-sm": "backdrop-filter: blur(4px)",
    "backdrop-blur-md": "backdrop-filter: blur(12px)",
    "backdrop-saturate-180": "backdrop-filter: saturate(1.8)",

    // Letter spacing
    "tracking-wide": "letter-spacing: 0.025em",
    "tracking-[2px]": "letter-spacing: 2px",

    // Background opacity
    "bg-white/20": "background: rgba(255, 255, 255, 0.2)",
    "bg-white/30": "background: rgba(255, 255, 255, 0.3)",

    // Shadow utilities
    "shadow-md": "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "shadow-lg": "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  };

  /**,
  };

    // Transform
    "scale-105": "transform: scale(1.05)",
    "scale-110": "transform: scale(1.1)",
    "scale-[0.98]": "transform: scale(0.98)",
    "scale-[1.05]": "transform: scale(1.05)",
    "-translate-y-0.5": "transform: translateY(-0.125rem)",
    "-translate-y-1": "transform: translateY(-0.25rem)",
    "translate-y-0": "transform: translateY(0)",

    // Position
    relative: "position: relative",
    "overflow-hidden": "overflow: hidden",

    // Display utilities
    block: "display: block",
    "inline-block": "display: inline-block",
    flex: "display: flex",

    // Backdrop filter
    "backdrop-blur-sm": "backdrop-filter: blur(4px)",
    "backdrop-blur-md": "backdrop-filter: blur(12px)",
    "backdrop-saturate-180": "backdrop-filter: saturate(1.8)",

    // Letter spacing
    "tracking-wide": "letter-spacing: 0.025em",
    "tracking-[2px]": "letter-spacing: 2px",

    // Text shadow
    "text-shadow-sm": "text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)",
    "text-shadow-md": "text-shadow: 0 4px 8px rgba(0, 0, 0, 0.12)",
  };

  /**
   * Extract Tailwind classes from HTML button element
   */
  static extractTailwindClasses(html: string): string[] {
    const classRegex = /class="([^"]+)"/;
    const classMatch = classRegex.exec(html);
    if (!classMatch) return [];

    return classMatch[1].split(/\s+/).filter((cls) => cls.length > 0);
  }

  /**
   * Convert Tailwind classes to CSS using tw-to-css package
   */
  static convertClassesToCSS(classes: string[]): string {
    try {
      // Join classes into a single string
      const classString = classes.join(" ");

      // Use tw-to-css to convert to CSS with proper formatting
      const cssOutput = twi(classString, {
        minify: false,
        merge: false,
      });

      // Transform the output to match our expected format (.element selector)
      return this.formatCSSOutput(cssOutput);
    } catch (error) {
      console.error("Error converting Tailwind classes to CSS:", error);
      // Fallback to basic CSS structure
      return ".element {\n  /* Error converting Tailwind classes */\n}";
    }
  }

  /**
   * Format CSS output from tw-to-css to match our expected structure
   */
  private static formatCSSOutput(cssOutput: string): string {
    // Split by CSS rules (blocks that end with })
    const rules = cssOutput.split("}").filter((rule) => rule.trim());

    const baseRules: string[] = [];
    const hoverRules: string[] = [];
    const activeRules: string[] = [];

    for (const rule of rules) {
      const trimmedRule = rule.trim();
      if (!trimmedRule) continue;

      // Extract the CSS properties from the rule
      const regex = /\{([^}]+)/;
      const match = regex.exec(trimmedRule);
      if (!match) continue;

      const properties = match[1].trim();

      // Check if this is a hover or active rule based on the selector
      if (trimmedRule.includes(":hover")) {
        hoverRules.push(properties);
      } else if (trimmedRule.includes(":active")) {
        activeRules.push(properties);
      } else {
        baseRules.push(properties);
      }
    }

    // Build the final CSS output
    let css = `.element {\n  ${baseRules.join(";\n  ")}${baseRules.length > 0 ? ";" : ""}\n}`;

    if (hoverRules.length > 0) {
      css += `\n\n.element:hover {\n  ${hoverRules.join(";\n  ")};\n}`;
    }

    if (activeRules.length > 0) {
      css += `\n\n.element:active {\n  ${activeRules.join(";\n  ")};\n}`;
    }

    return css;
  }

  /**
   * Convert Tailwind HTML to CSS
   */
  static convertTailwindToCSS(tailwindHtml: string): string {
    const classes = this.extractTailwindClasses(tailwindHtml);
    return this.convertClassesToCSS(classes);
  }

  /**
   * Convert CSS to SCSS (basic conversion)
   */
  static convertCSSToSCSS(css: string): string {
    // For now, just return the CSS as-is since basic CSS is valid SCSS
    // In the future, this could be enhanced to use SCSS variables, nesting, etc.
    return css;
  }

  /**
   * Update Tailwind HTML with new element properties
   */
  static updateTailwindProperties(tailwindHtml: string, properties: { width?: number; height?: number; padding?: number; fontSize?: number }): string {
    if (!tailwindHtml) return tailwindHtml;

    let updatedHtml = tailwindHtml;

    // Update width classes (using min-width approach like CSS)
    if (properties.width !== undefined) {
      // Remove existing width-related classes
      updatedHtml = this.removeTailwindClasses(updatedHtml, /\b(w-\S+|min-w-\S+|max-w-\S+)\b/g);

      // Add new min-width class using arbitrary value
      const widthClass = `min-w-[${properties.width}px]`;
      updatedHtml = this.addTailwindClass(updatedHtml, widthClass);
    }

    // Update height classes (using min-height approach like CSS)
    if (properties.height !== undefined) {
      // Remove existing height-related classes
      updatedHtml = this.removeTailwindClasses(updatedHtml, /\b(h-\S+|min-h-\S+|max-h-\S+)\b/g);

      // Add new min-height class using arbitrary value
      const heightClass = `min-h-[${properties.height}px]`;
      updatedHtml = this.addTailwindClass(updatedHtml, heightClass);
    }

    // Update padding classes
    if (properties.padding !== undefined) {
      // Remove existing padding classes
      updatedHtml = this.removeTailwindClasses(updatedHtml, /\b(p-\S+|px-\S+|py-\S+|pt-\S+|pr-\S+|pb-\S+|pl-\S+)\b/g);

      // Add new padding class using arbitrary value
      const paddingClass = `p-[${properties.padding}px]`;
      updatedHtml = this.addTailwindClass(updatedHtml, paddingClass);
    }

    // Update font size classes
    if (properties.fontSize !== undefined) {
      // Remove existing text size classes
      updatedHtml = this.removeTailwindClasses(updatedHtml, /\b(text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)|\btext-\[\S+\])\b/g);

      // Add new font size class using arbitrary value
      const fontSizeClass = `text-[${properties.fontSize}px]`;
      updatedHtml = this.addTailwindClass(updatedHtml, fontSizeClass);
    }

    // Clean up extra whitespace
    updatedHtml = updatedHtml.replace(/\s+/g, " ").trim();

    return updatedHtml;
  }

  /**
   * Helper function to remove Tailwind classes that match a pattern
   */
  private static removeTailwindClasses(html: string, pattern: RegExp): string {
    const classRegex = /class="([^"]*)"/;
    const match = classRegex.exec(html);

    if (match) {
      const existingClasses = match[1];
      const updatedClasses = existingClasses.replace(pattern, "").replace(/\s+/g, " ").trim();
      return html.replace(classRegex, `class="${updatedClasses}"`);
    }

    return html;
  }

  /**
   * Helper function to add a Tailwind class to the class attribute
   */
  private static addTailwindClass(html: string, newClass: string): string {
    const classRegex = /class="([^"]*)"/;
    const match = classRegex.exec(html);

    if (match) {
      const existingClasses = match[1].trim();
      const updatedClasses = existingClasses ? `${existingClasses} ${newClass}` : newClass;
      return html.replace(classRegex, `class="${updatedClasses}"`);
    }

    return html;
  }
}
