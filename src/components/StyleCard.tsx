"use client";

import { Text } from "@mantine/core";
import { ElementStyle } from "@/data/buttonStyles";

interface StyleCardProps {
  style: ElementStyle;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}

export default function StyleCard({ style, index, isSelected, onSelect }: Readonly<StyleCardProps>) {
  return (
    <button
      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => onSelect(index)}
    >
      <div className="text-center mb-3">
        <Text size="sm" fw={500} className="text-gray-700 dark:text-gray-300">
          {style.name}
        </Text>
      </div>
      <div className="flex justify-center">
        <style
          dangerouslySetInnerHTML={{
            __html: style.css.replace(/\.element/g, `.element-preview-${index}`),
          }}
        />
        <div className={`element-preview-${index} text-sm px-3 py-2`}>Preview</div>
      </div>
    </button>
  );
}
