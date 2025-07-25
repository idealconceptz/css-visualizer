"use client";

import { Slider } from "@mantine/core";

interface PropertySliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  color: string;
  unit?: string;
  onChange: (value: number) => void;
}

export default function PropertySlider({ label, value, min, max, step, color, unit = "px", onChange }: Readonly<PropertySliderProps>) {
  return (
    <div>
      <p className="text-sm font-medium mb-3">
        {label}: {value}
        {unit}
      </p>
      <Slider value={value} onChange={onChange} min={min} max={max} step={step} color={color} size="md" />
    </div>
  );
}
