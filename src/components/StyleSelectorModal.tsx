"use client";

import { Modal, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ElementStyle } from "@/data/buttonStyles";
import StyleCard from "./StyleCard";

interface StyleSelectorModalProps {
  styles: ElementStyle[];
  selectedIndex: number;
  onStyleSelect: (index: number) => void;
}

export default function StyleSelectorModal({ styles, selectedIndex, onStyleSelect }: Readonly<StyleSelectorModalProps>) {
  const [opened, { open, close }] = useDisclosure(false);

  const handleStyleSelect = (index: number) => {
    onStyleSelect(index);
    close(); // Close modal after selection
  };

  const selectedStyleName = styles[selectedIndex]?.name || "None";

  return (
    <>
      <Group justify="center" className="mb-2">
        <Button
          onClick={open}
          size="lg"
          variant="gradient"
          gradient={{ from: "blue", to: "indigo", deg: 45 }}
          radius="md"
          className="shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Choose Style: {selectedStyleName}
        </Button>
      </Group>

      <Modal
        opened={opened}
        onClose={close}
        title="Choose Your Element Style"
        size="xl"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        radius="md"
        padding="xl"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-6">Select from our curated collection of beautiful element styles</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
          {styles.map((style, index) => (
            <StyleCard key={style.name} style={style} index={index} isSelected={selectedIndex === index} onSelect={handleStyleSelect} />
          ))}
        </div>
      </Modal>
    </>
  );
}
