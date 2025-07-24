'use client';

import { useState, useRef, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import type { editor } from 'monaco-editor';
import { Tabs, Card, Group, ActionIcon, Tooltip } from '@mantine/core';
import { IconCode, IconBrandCss3, IconBrandSass, IconWind, IconCopy, IconDownload } from '@tabler/icons-react';

export interface CodeTab {
  id: string;
  label: string;
  language: string;
  icon: React.ReactNode;
  defaultValue: string;
}

interface CodeEditorProps {
  tabs?: CodeTab[];
  codeValues?: Record<string, string>;
  activeTab?: string;
  onChange?: (tabId: string, value: string) => void;
  onTabChange?: (tabId: string) => void;
  height?: string | number;
  theme?: 'vs-dark' | 'light';
  readOnly?: boolean;
}

const defaultTabs: CodeTab[] = [
  {
    id: 'html',
    label: 'HTML',
    language: 'html',
    icon: <IconCode size={16} />,
    defaultValue: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Visualiser</title>
</head>
<body>
  <div class="container">
    <h1 class="title">Welcome to CSS Visualiser</h1>
    <p class="description">Edit the code and see the results in real-time!</p>
    <div class="demo-box">
      <span>Interactive Demo</span>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: 'css',
    label: 'CSS',
    language: 'css',
    icon: <IconBrandCss3 size={16} />,
    defaultValue: `.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

.title {
  color: #2563eb;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.description {
  color: #6b7280;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  text-align: center;
}

.demo-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.demo-box:hover {
  transform: translateY(-5px);
}`
  },
  {
    id: 'scss',
    label: 'SCSS',
    language: 'scss',
    icon: <IconBrandSass size={16} />,
    defaultValue: `$primary-color: #2563eb;
$secondary-color: #6b7280;
$gradient-start: #667eea;
$gradient-end: #764ba2;
$border-radius: 12px;
$container-width: 800px;

.container {
  max-width: $container-width;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;

  .title {
    color: $primary-color;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .description {
    color: $secondary-color;
    font-size: 1.125rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .demo-box {
    background: linear-gradient(135deg, $gradient-start 0%, $gradient-end 100%);
    color: white;
    padding: 2rem;
    border-radius: $border-radius;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
}`
  },
  {
    id: 'tailwind',
    label: 'Tailwind',
    language: 'html',
    icon: <IconWind size={16} />,
    defaultValue: `<div class="max-w-4xl mx-auto p-8 font-sans">
  <h1 class="text-blue-600 text-4xl font-bold mb-4 text-center">
    Welcome to CSS Visualiser
  </h1>
  
  <p class="text-gray-500 text-lg mb-8 text-center">
    Edit the code and see the results in real-time!
  </p>
  
  <div class="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-xl text-center font-bold shadow-xl transform transition-transform hover:-translate-y-2">
    <span>Interactive Demo</span>
  </div>

  
  <!-- Additional Tailwind Examples -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 1</h3>
      <p class="text-gray-600">Tailwind makes styling fast and efficient.</p>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 2</h3>
      <p class="text-gray-600">Responsive design with utility classes.</p>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Card 3</h3>
      <p class="text-gray-600">Modern and maintainable CSS.</p>
    </div>
  </div>
</div>`
  }
];

export default function CodeEditor({ 
  tabs = defaultTabs, 
  codeValues = {},
  activeTab: parentActiveTab,
  onChange, 
  onTabChange,
  height = 400,
  theme = 'vs-dark',
  readOnly = false 
}: Readonly<CodeEditorProps>) {
  const [activeTab, setActiveTab] = useState(parentActiveTab || tabs[0]?.id || 'html');
  
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  // Sync active tab with parent
  useEffect(() => {
    if (parentActiveTab && parentActiveTab !== activeTab) {
      setActiveTab(parentActiveTab);
    }
  }, [parentActiveTab, activeTab]);

  const handleEditorDidMount = (editorInstance: editor.IStandaloneCodeEditor) => {
    editorRef.current = editorInstance;
  };

  const handleEditorChange = (value: string | undefined) => {
    const newValue = value || '';
    console.log(`Editor change - Tab: ${activeTab}, Value length: ${newValue.length}`);
    console.log('New value preview:', newValue.substring(0, 100) + '...');
    onChange?.(activeTab, newValue);
  };

  const handleTabChange = (value: string | null) => {
    if (value) {
      console.log(`Tab changing from ${activeTab} to ${value}`);
      console.log('Current codeValues:', codeValues);
      setActiveTab(value);
      onTabChange?.(value);
    }
  };

  const copyToClipboard = async () => {
    const currentValue = codeValues[activeTab] || '';
    if (currentValue) {
      try {
        await navigator.clipboard.writeText(currentValue);
        // You could add a notification here
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }
  };

  const downloadCode = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    const currentValue = codeValues[activeTab] || '';
    if (currentValue && currentTab) {
      const blob = new Blob([currentValue], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `code.${currentTab.language === 'html' ? 'html' : currentTab.language}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <Card withBorder className="w-full">
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Group justify="space-between" className="mb-4">
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab 
                key={tab.id} 
                value={tab.id}
                leftSection={tab.icon}
                className="font-medium"
              >
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <Group gap="xs">
            <Tooltip label="Copy to clipboard">
              <ActionIcon 
                variant="subtle" 
                onClick={copyToClipboard}
                size="sm"
              >
                <IconCopy size={16} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Download code">
              <ActionIcon 
                variant="subtle" 
                onClick={downloadCode}
                size="sm"
              >
                <IconDownload size={16} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>

        {/* Single editor that changes content based on active tab */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <Editor
            height={height}
            language={tabs.find(tab => tab.id === activeTab)?.language || 'html'}
            value={codeValues[activeTab] || ''}
            theme={theme}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            options={{
              readOnly,
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              wordWrap: 'on',
              automaticLayout: true,
              scrollBeyondLastLine: false,
              padding: { top: 16, bottom: 16 },
              bracketPairColorization: { enabled: true },
              suggest: {
                showKeywords: true,
                showSnippets: true,
              },
            }}
          />
        </div>
      </Tabs>
    </Card>
  );
}
