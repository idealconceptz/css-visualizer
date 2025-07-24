"use client";

import { Container, Title, Text, Stack, Card } from "@mantine/core";
import { useState } from "react";
import { CodeEditor, CodePreview } from "@/components";

// Button style presets
const buttonStyles = [
  {
    name: "Gradient Purple",
    css: `.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}`,
  },
  {
    name: "Neon Glow",
    css: `.button {
  background: #000;
  color: #00ff41;
  padding: 1rem 2rem;
  border: 2px solid #00ff41;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  transition: all 0.3s ease;
}

.button:hover {
  box-shadow: 0 0 30px rgba(0, 255, 65, 0.8);
  text-shadow: 0 0 10px #00ff41;
}

.button:active {
  background: #00ff41;
  color: #000;
}`,
  },
  {
    name: "Glass Morphism",
    css: `.button {
  background: rgba(255, 255, 255, 0.2);
  color: #333;
  padding: 1rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;
}

.button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0);
}`,
  },
  {
    name: "Retro Gaming",
    css: `.button {
  background: #ff6b6b;
  color: white;
  padding: 1rem 2rem;
  border: 4px solid #333;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  box-shadow: 4px 4px 0 #333;
  transition: all 0.1s ease;
}

.button:hover {
  background: #ff5252;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #333;
}

.button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #333;
}`,
  },
  {
    name: "Minimalist",
    css: `.button {
  background: white;
  color: #333;
  padding: 1rem 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  border-color: #333;
  background: #f9f9f9;
}

.button:active {
  background: #f0f0f0;
}`,
  },
  {
    name: "Neumorphism",
    css: `.button {
  background: #e0e5ec;
  color: #333;
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff;
  transition: all 0.3s ease;
}

.button:hover {
  box-shadow: inset 9px 9px 16px #a3b1c6, inset -9px -9px 16px #ffffff;
}

.button:active {
  box-shadow: inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff;
}`,
  },
  {
    name: "Fire Gradient",
    css: `.button {
  background: linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
  color: #d73502;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 154, 158, 0.4);
  transition: all 0.3s ease;
}

.button:hover {
  background: linear-gradient(45deg, #ff6b6b 0%, #feca57 50%, #ff9ff3 100%);
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
}

.button:active {
  transform: scale(0.98);
}`,
  },
  {
    name: "Cyberpunk",
    css: `.button {
  background: linear-gradient(45deg, #ff0080, #7928ca);
  color: white;
  padding: 1rem 2rem;
  border: 2px solid #ff0080;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.button:hover {
  box-shadow: 0 0 30px #ff0080;
  border-color: #7928ca;
}

.button:active {
  background: linear-gradient(45deg, #7928ca, #ff0080);
}`,
  },
  {
    name: "Ocean Wave",
    css: `.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.button:hover {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(79, 172, 254, 0.4);
}

.button:active {
  transform: translateY(-1px);
}`,
  },
  {
    name: "Dark Mode",
    css: `.button {
  background: #1a1a1a;
  color: #ffffff;
  padding: 1rem 2rem;
  border: 1px solid #333;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: #333;
  border-color: #555;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.button:active {
  background: #000;
  transform: translateY(1px);
}`,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("html");
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [codeValues, setCodeValues] = useState({
    html: `<button class="button">
      Click Me!
    </button>`,
    css: `.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}`,
    scss: `$gradient-start: #667eea;
$gradient-end: #764ba2;
$border-radius: 12px;

.button {
  background: linear-gradient(135deg, $gradient-start 0%, $gradient-end 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: $border-radius;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
}`,
    tailwind: `<button class="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-lg">
    Click Me!
  </button>`,
  });

  const handleCodeChange = (tabId: string, value: string) => {
    console.log(`Code changed in tab: ${tabId}`);
    setCodeValues((prev) => ({
      ...prev,
      [tabId]: value,
    }));
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const applyButtonStyle = (styleIndex: number) => {
    const selectedStyle = buttonStyles[styleIndex];
    setCodeValues((prev) => ({
      ...prev,
      css: selectedStyle.css,
    }));
    setCurrentStyleIndex(styleIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Container size="xl" className="py-12">
        <Stack gap="xl">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Title order={1} className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CSS Visualiser
            </Title>
            <Text size="xl" className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A modern CSS visualization tool built with Next.js 15, TypeScript, Tailwind CSS, and Mantine UI
            </Text>
          </div>

          {/* Button Style Carousel */}
          <Card shadow="md" padding="xl" radius="md">
            <Title order={2} className="mb-6 text-center">
              Button Style Gallery
            </Title>
            <Text size="lg" className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Click on any button below to apply its style to your editor
            </Text>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {buttonStyles.map((style, index) => (
                <button
                  key={style.name}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
                    currentStyleIndex === index ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => applyButtonStyle(index)}
                >
                  <div className="text-center mb-3">
                    <Text size="sm" fw={500} className="text-gray-700 dark:text-gray-300">
                      {style.name}
                    </Text>
                  </div>
                  <div className="flex justify-center">
                    <style
                      dangerouslySetInnerHTML={{
                        __html: style.css.replace(/\.button/g, `.button-preview-${index}`),
                      }}
                    />
                    <div className={`button-preview-${index} text-sm px-3 py-2`}>Preview</div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Code Editor and Preview Section */}
          <Card shadow="md" padding="xl" radius="md" className="mt-12">
            <Title order={2} className="mb-6 text-center">
              Interactive Code Editor
            </Title>
            <Text size="lg" className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Edit HTML, CSS, SCSS, or Tailwind code and see the results in real-time!
            </Text>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Code Editor */}
              <div>
                <CodeEditor
                  codeValues={codeValues}
                  activeTab={activeTab}
                  onChange={handleCodeChange}
                  onTabChange={handleTabChange}
                  height={500}
                  theme="vs-dark"
                />
              </div>

              {/* Live Preview */}
              <div>
                <CodePreview
                  htmlCode={codeValues.html}
                  cssCode={codeValues.css}
                  scssCode={codeValues.scss}
                  tailwindCode={codeValues.tailwind}
                  activeTab={activeTab}
                />
              </div>
            </div>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}
