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
  const previewContent = useMemo(() => {
    let finalHtml = htmlCode;
    let finalCss: string;
    console.log(activeTab);
    console.log(finalHtml);

    // Hidden container CSS that's always applied but not visible to users
    const hiddenContainerCSS = `
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        font-family: 'Arial', sans-serif;
        text-align: center;
      }
    `;

    // Use appropriate code based on active tab
    if (activeTab === "tailwind" && tailwindCode) {
      finalHtml = tailwindCode;
      // For Tailwind, we need container styles + tailwind CDN
      finalCss = hiddenContainerCSS;
    } else if (activeTab === "scss" && scssCode) {
      // Note: In a real application, you'd want to compile SCSS to CSS
      // For this demo, we'll show the SCSS as-is with a note
      finalCss = hiddenContainerCSS + scssCode;
    } else {
      // For HTML and CSS tabs, combine hidden container CSS with user CSS
      finalCss = hiddenContainerCSS + cssCode;
    }

    // Wrap HTML content with container div for non-Tailwind tabs
    if (activeTab !== "tailwind") {
      finalHtml = `<div class="container">${finalHtml}</div>`;
    } else {
      // For Tailwind, add container div with Tailwind classes
      finalHtml = `<div class="max-w-4xl mx-auto p-8 font-sans text-center">${finalHtml}</div>`;
    }

    // Create the complete HTML document
    const htmlDocument = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CSS Visualiser Preview</title>
        ${activeTab === "tailwind" ? '<script src="https://cdn.tailwindcss.com"></script>' : `<style>${finalCss}</style>`}
      </head>
      <body>
        ${finalHtml}
      </body>
      </html>
    `;

    return htmlDocument;
  }, [htmlCode, cssCode, scssCode, tailwindCode, activeTab]);

  return (
    <Card withBorder className="w-full h-full">
      <Title order={4} className="mb-4">
        Live Preview
      </Title>
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <iframe srcDoc={previewContent} className="w-full h-96 border-0" title="Code Preview" sandbox="allow-scripts" />
      </div>
      {activeTab === "scss" && (
        <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
          <strong>Note:</strong> SCSS preview shows raw SCSS code. In a production environment, this would be compiled to CSS.
        </div>
      )}
    </Card>
  );
}
