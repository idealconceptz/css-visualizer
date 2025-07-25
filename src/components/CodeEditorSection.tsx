"use client";

import { Card } from "@mantine/core";
import { CodeEditor, CodePreview } from "@/components";
import { CodeValues } from "@/data/defaultValues";

interface CodeEditorSectionProps {
  codeValues: CodeValues;
  activeTab: string;
  onCodeChange: (tabId: string, value: string) => void;
  onTabChange: (tabId: string) => void;
  scssError?: string | null;
}

export default function CodeEditorSection({ codeValues, activeTab, onCodeChange, onTabChange, scssError }: Readonly<CodeEditorSectionProps>) {
  return (
    <Card shadow="md" padding="xl" radius="md" className="mt-4">
      <h2 className="mb-6 text-center text-xl bold">Interactive Code Editor</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">Edit HTML, CSS, SCSS, or Tailwind code and see the results in real-time!</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div>
          <CodeEditor codeValues={codeValues} activeTab={activeTab} onChange={onCodeChange} onTabChange={onTabChange} height={500} theme="vs-dark" />
        </div>

        {/* Live Preview */}
        <div>
          <CodePreview
            htmlCode={codeValues.html}
            cssCode={codeValues.css}
            scssCode={codeValues.scss}
            tailwindCode={codeValues.tailwind}
            activeTab={activeTab}
            scssError={scssError}
          />
        </div>
      </div>
    </Card>
  );
}
