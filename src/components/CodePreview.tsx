"use client";

import { Card } from "@mantine/core";
import { SCSSCompiler } from "@/utils/scssCompiler";

interface CodePreviewProps {
  htmlCode: string;
  cssCode: string;
  scssCode?: string;
  tailwindCode?: string;
  activeTab: string;
  scssError?: string | null;
}

export default function CodePreview({ htmlCode, cssCode, scssCode, tailwindCode, activeTab, scssError }: Readonly<CodePreviewProps>) {
  // React Compiler will automatically optimize this computation
  let finalHtml = htmlCode;
  let finalCss: string;

  // Base container styles for the preview
  const baseContainerCSS = `
    .preview-container {
      max-width: 100%;
      padding: 2rem;
      font-family: 'Arial', sans-serif;
      text-align: center;
      background: white;
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  // Use appropriate code based on active tab
  if (activeTab === "tailwind" && tailwindCode) {
    // For Tailwind, extract the HTML content and apply Tailwind classes
    finalHtml = tailwindCode;
    finalCss = baseContainerCSS;
  } else if (activeTab === "scss" && scssCode) {
    // Compile SCSS to CSS for preview
    const compiled = SCSSCompiler.compile(scssCode);
    if (compiled.error) {
      // If there's an error, use base CSS to still show the button
      console.warn("SCSS compilation error in preview:", compiled.error);
      finalCss = baseContainerCSS + cssCode; // Fallback to base CSS
    } else {
      finalCss = baseContainerCSS + compiled.css;
    }
  } else {
    // For HTML and CSS tabs, combine base styles with user CSS
    finalCss = baseContainerCSS + cssCode;
  }

  const previewHtml = finalHtml;
  const previewCss = finalCss;

  return (
    <Card withBorder className="w-full h-full">
      <h4 className="mb-4 text-lg font-semibold">Live Preview</h4>
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        {/* Dynamic CSS injection */}
        <style dangerouslySetInnerHTML={{ __html: previewCss }} />

        {/* Preview content container */}
        <div className="preview-container w-full h-96" dangerouslySetInnerHTML={{ __html: previewHtml }} />
      </div>
      {activeTab === "css" && (
        <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
          <strong>Note:</strong> You can edit the CSS code directly in the code editor. The preview will update automatically.
        </div>
      )}
      {activeTab === "scss" && (
        <>
          {scssError ? (
            <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <span className="text-red-600 font-medium mr-2">⚠️ SCSS compilation error:</span>
                <span className="text-red-700 text-sm">{scssError}</span>
              </div>
            </div>
          ) : (
            <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
              <strong>Note:</strong> You can edit the SCSS code directly in the code editor. The preview will update automatically.
            </div>
          )}
        </>
      )}
      {activeTab === "tailwind" && (
        <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
          <strong>Note:</strong> You can edit the Tailwind classes directly in the code editor. The preview will update automatically.
        </div>
      )}
    </Card>
  );
}
