"use client";

import { Card, SimpleGrid } from "@mantine/core";
import { ElementProperties } from "@/data/defaultValues";
import PropertySlider from "./PropertySlider";

interface ElementPropertiesPanelProps {
  elementProps: ElementProperties;
  onPropertyChange: (property: keyof ElementProperties, value: number) => void;
}

export default function ElementPropertiesPanel({ elementProps, onPropertyChange }: ElementPropertiesPanelProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <h2 className="mb-4 text-center text-xl">Element Properties</h2>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
        <PropertySlider
          label="Width (px)"
          value={elementProps.width}
          min={50}
          max={400}
          step={10}
          color="blue"
          onChange={(value) => onPropertyChange("width", value)}
        />
        <PropertySlider
          label="Height (px)"
          value={elementProps.height}
          min={30}
          max={200}
          step={5}
          color="green"
          onChange={(value) => onPropertyChange("height", value)}
        />
        <PropertySlider
          label="Padding (px)"
          value={elementProps.padding}
          min={0}
          max={50}
          step={2}
          color="orange"
          onChange={(value) => onPropertyChange("padding", value)}
        />
        <PropertySlider
          label="Font Size (px)"
          value={elementProps.fontSize}
          min={10}
          max={24}
          step={1}
          color="purple"
          onChange={(value) => onPropertyChange("fontSize", value)}
        />
      </SimpleGrid>
    </Card>
  );
}
