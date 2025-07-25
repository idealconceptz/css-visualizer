"use client";

import { Card } from "@mantine/core";
import PropertySlider from "./PropertySlider";
import { ElementProperties } from "@/data/defaultValues";

interface ElementPropertiesPanelProps {
  elementProps: ElementProperties;
  onPropertyChange: (property: keyof ElementProperties, value: number) => void;
  title?: string;
  description?: string;
}

export default function ElementPropertiesPanel({
  elementProps,
  onPropertyChange,
  title = "Element Properties",
  description = "Adjust element dimensions and styling properties in real-time",
}: Readonly<ElementPropertiesPanelProps>) {
  return (
    <Card shadow="md" padding="xl" radius="md">
      <h2 className="mb-2 text-center">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PropertySlider
          label="Width"
          value={elementProps.width}
          min={80}
          max={300}
          step={5}
          color="blue"
          onChange={(value) => onPropertyChange("width", value)}
        />

        <PropertySlider
          label="Height"
          value={elementProps.height}
          min={30}
          max={100}
          step={2}
          color="green"
          onChange={(value) => onPropertyChange("height", value)}
        />

        <PropertySlider
          label="Padding"
          value={elementProps.padding}
          min={4}
          max={40}
          step={2}
          color="orange"
          onChange={(value) => onPropertyChange("padding", value)}
        />

        <PropertySlider
          label="Font Size"
          value={elementProps.fontSize}
          min={10}
          max={32}
          step={1}
          color="purple"
          onChange={(value) => onPropertyChange("fontSize", value)}
        />
      </div>
    </Card>
  );
}
