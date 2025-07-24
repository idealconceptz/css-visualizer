export interface CodeValues extends Record<string, string> {
  html: string;
  css: string;
  scss: string;
  tailwind: string;
}

export interface ElementProperties {
  width: number;
  height: number;
  padding: number;
  fontSize: number;
}

export const defaultElementProperties: ElementProperties = {
  width: 160,
  height: 56,
  padding: 16,
  fontSize: 18,
};

export const defaultCodeValues: CodeValues = {
  html: `<button class="element">
Click Me!
</button>`,
  css: `.element {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-width: 160px;
  min-height: 56px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.element:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.element:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}`,
  scss: `$gradient-start: #667eea;
$gradient-end: #764ba2;
$border-radius: 12px;

.element {
  background: linear-gradient(135deg, $gradient-start 0%, $gradient-end 100%);
  color: white;
  min-width: 160px;
  min-height: 56px;
  padding: 16px;
  border: none;
  border-radius: $border-radius;
  font-size: 18px;
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
};
