"use client";

import { Title, Text } from "@mantine/core";

export default function HeroSection() {
  return (
    <div className="text-center space-y-6">
      <Title order={1} className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        CSS Visualiser
      </Title>
      <Text size="xl" className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        A modern CSS visualization tool built with Next.js 15, TypeScript, Tailwind CSS, and Mantine UI
      </Text>
    </div>
  );
}
