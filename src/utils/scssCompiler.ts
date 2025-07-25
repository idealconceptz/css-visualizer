import * as sass from "sass";

/**
 * Utility for compiling SCSS to CSS
 */
export class SCSSCompiler {
  /**
   * Compile SCSS string to CSS
   */
  static compile(scssString: string): { css: string; error?: string } {
    try {
      const result = sass.compileString(scssString, {
        style: "expanded", // Use expanded output style for readability
        sourceMap: false,
      });

      return { css: result.css };
    } catch (error) {
      // Extract cleaner error message
      let cleanError = "Unknown compilation error";
      if (error instanceof Error) {
        cleanError = error.message;

        // Clean up common error patterns for better UX
        if (cleanError.includes("Expected hex digit")) {
          const lineRegex = /line (\d+)|(\d+):\d+/;
          const match = lineRegex.exec(cleanError);
          const lineInfo = match ? ` (line ${match[1] || match[2]})` : "";
          cleanError = `Invalid hex color${lineInfo}. Hex colors must be 3 or 6 digits (e.g., #fff or #ffffff).`;
        } else if (cleanError.includes("Undefined variable")) {
          cleanError = cleanError.replace(/^Error:\s*/, "").replace(/\n[\s\S]*$/, "");
        } else if (cleanError.includes("Invalid CSS")) {
          cleanError = "Invalid CSS syntax. Please check your SCSS code.";
        }

        // Remove technical stack trace info for user-friendly display
        cleanError = cleanError.split("\n")[0].replace(/^Error:\s*/, "");
      }

      return {
        css: "",
        error: cleanError,
      };
    }
  }

  /**
   * Validate SCSS syntax without compiling
   */
  static validate(scssString: string): { isValid: boolean; error?: string } {
    try {
      sass.compileString(scssString, {
        style: "compressed",
        sourceMap: false,
      });
      return { isValid: true };
    } catch (error) {
      return {
        isValid: false,
        error: error instanceof Error ? error.message : "Unknown validation error",
      };
    }
  }
}
