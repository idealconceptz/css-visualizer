"use client";

import { useMemo } from "react";
import { Card, Title } from "@mantine/core";

interface CodePreviewProps {
  htmlCode: string;
  cssCode: string;
  scssCode?: string;
  tailwindCode?: string;
  activeTab: string;
}

export default function CodePreview({ htmlCode, cssCode, scssCode, tailwindCode, activeTab }: Readonly<CodePreviewProps>) {
  const { previewHtml, previewCss } = useMemo(() => {
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
      // Note: In a real application, you'd want to compile SCSS to CSS
      // For this demo, we'll show the SCSS as-is with a note
      finalCss = baseContainerCSS + scssCode;
    } else {
      // For HTML and CSS tabs, combine base styles with user CSS
      finalCss = baseContainerCSS + cssCode;
    }

    return {
      previewHtml: finalHtml,
      previewCss: finalCss,
    };
  }, [htmlCode, cssCode, scssCode, tailwindCode, activeTab]);

  return (
    <Card withBorder className="w-full h-full">
      <Title order={4} className="mb-4">
        Live Preview
      </Title>
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        {/* Dynamic CSS injection */}
        <style dangerouslySetInnerHTML={{ __html: previewCss }} />

        {/* Preview content container */}
        <div className="preview-container w-full h-96" dangerouslySetInnerHTML={{ __html: previewHtml }} />
      </div>
      {activeTab === "scss" && (
        <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
          <strong>Note:</strong> SCSS preview shows raw SCSS code. In a production environment, this would be compiled to CSS.
        </div>
      )}
      {activeTab === "tailwind" && (
        <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
          <strong>Note:</strong> Tailwind classes are simulated. In a production environment, Tailwind CSS would be compiled.
        </div>
      )}
    </Card>
  );
}
