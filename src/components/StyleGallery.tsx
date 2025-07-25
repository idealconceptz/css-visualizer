"use client";

import { Card } from "@mantine/core";
import { ElementStyle } from "@/data/buttonStyles";
import StyleCard from "./StyleCard";

interface StyleGalleryProps {
  styles: ElementStyle[];
  selectedIndex: number;
  onStyleSelect: (index: number) => void;
  title?: string;
  description?: string;
}

export default function StyleGallery({
  styles,
  selectedIndex,
  onStyleSelect,
  title = "Style Gallery",
  description = "Click on any style below to apply it to your editor",
}: Readonly<StyleGalleryProps>) {
  return (
    <Card shadow="md" padding="xl" radius="md">
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">{description}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {styles.map((style, index) => (
          <StyleCard key={style.name} style={style} index={index} isSelected={selectedIndex === index} onSelect={onStyleSelect} />
        ))}
      </div>
    </Card>
  );
}
