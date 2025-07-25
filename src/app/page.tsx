"use client";

import { Container, Stack } from "@mantine/core";
import { useState, useMemo } from "react";
import { HeroSection, StyleSelectorModal, ElementPropertiesPanel, CodeEditorSection } from "@/components";
import { ElementCSSManipulator } from "@/utils/elementCSSManipulator";
import { SCSSCompiler } from "@/utils/scssCompiler";
import { buttonStyles } from "@/data/buttonStyles";
import { defaultElementProperties, defaultCodeValues, ElementProperties, CodeValues } from "@/data/defaultValues";

export default function Home() {
  const [activeTab, setActiveTab] = useState("html");
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [elementProps, setElementProps] = useState<ElementProperties>(defaultElementProperties);
  const [codeValues, setCodeValues] = useState<CodeValues>(defaultCodeValues);
  const [scssError, setScssError] = useState<string | null>(null);

  // Compute effective CSS (prioritize compiled SCSS when SCSS tab is active)
  const effectiveCodeValues = useMemo(() => {
    if (activeTab === "scss" && codeValues.scss) {
      const compiled = SCSSCompiler.compile(codeValues.scss);
      if (!compiled.error) {
        setScssError(null); // Clear error on successful compilation
        return {
          ...codeValues,
          css: compiled.css, // Use compiled SCSS as CSS
        };
      } else {
        setScssError(compiled.error); // Store error for display
      }
    } else {
      setScssError(null); // Clear error when not on SCSS tab
    }
    return codeValues;
  }, [codeValues, activeTab]);

  const handleCodeChange = (tabId: string, value: string) => {
    console.log(`Code changed in tab: ${tabId}`);

    // If SCSS is changed, automatically compile to CSS
    if (tabId === "scss") {
      const compiled = SCSSCompiler.compile(value);
      if (!compiled.error) {
        setScssError(null); // Clear error on successful compilation
        setCodeValues((prev) => ({
          ...prev,
          [tabId]: value,
          css: compiled.css, // Auto-update CSS tab with compiled SCSS
        }));
      } else {
        setScssError(compiled.error); // Store error for display
        setCodeValues((prev) => ({
          ...prev,
          [tabId]: value,
          // Keep previous CSS if compilation fails
        }));
      }
    } else {
      setScssError(null); // Clear error when not editing SCSS
      setCodeValues((prev) => ({
        ...prev,
        [tabId]: value,
      }));
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const applyElementStyle = (index: number) => {
    const selectedStyle = buttonStyles[index];
    setCurrentStyleIndex(index);

    // Extract element properties from the selected style
    const extractedProps = ElementCSSManipulator.extractElementProperties(selectedStyle.css);
    // Only merge the properties we actually want to control (width, height, padding, fontSize)
    // Keep the extracted values if they're reasonable, otherwise use defaults
    const mergedProps = {
      ...defaultElementProperties,
      ...extractedProps,
      // If fontSize was extracted but seems wrong (like 1px), use default
      fontSize: extractedProps.fontSize && extractedProps.fontSize > 8 ? extractedProps.fontSize : defaultElementProperties.fontSize,
      // If padding was extracted but seems wrong (like 1px), use default
      padding: extractedProps.padding && extractedProps.padding > 4 ? extractedProps.padding : defaultElementProperties.padding,
    };
    setElementProps(mergedProps);

    // Update CSS preserving the original font-size and padding from the style
    const updatedCSS = ElementCSSManipulator.updateElementProperties(selectedStyle.css, mergedProps, ".element", true, true);
    setCodeValues((prev) => ({ ...prev, css: updatedCSS }));
  };

  const updateElementProperty = (property: keyof ElementProperties, value: number) => {
    const newProps = { ...elementProps, [property]: value };
    setElementProps(newProps);

    // Update the CSS with the new property values using utility
    const updatedCSS = ElementCSSManipulator.updateElementProperties(buttonStyles[currentStyleIndex].css, newProps);

    setCodeValues((prev) => ({
      ...prev,
      css: updatedCSS,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Container size="xl" className="py-12">
        <Stack gap="xl">
          {/* Hero Section */}
          <HeroSection />

          {/* Style Selector Modal */}
          <StyleSelectorModal styles={buttonStyles} selectedIndex={currentStyleIndex} onStyleSelect={applyElementStyle} />

          {/* Element Properties Control Panel */}
          <ElementPropertiesPanel elementProps={elementProps} onPropertyChange={updateElementProperty} />

          {/* Code Editor and Preview Section */}
          <CodeEditorSection
            codeValues={effectiveCodeValues}
            activeTab={activeTab}
            onCodeChange={handleCodeChange}
            onTabChange={handleTabChange}
            scssError={scssError}
          />
        </Stack>
      </Container>
    </div>
  );
}
