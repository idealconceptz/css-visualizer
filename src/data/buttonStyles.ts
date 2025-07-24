export interface ElementStyle {
  name: string;
  css: string;
}

export const buttonStyles: ElementStyle[] = [
  {
    name: "Gradient Purple",
    css: `.element {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 32px;
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
  },
  {
    name: "Neon Glow",
    css: `.element {
  background: #000;
  color: #00ff41;
  padding: 16px 32px;
  border: 2px solid #00ff41;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  transition: all 0.3s ease;
}

.element:hover {
  box-shadow: 0 0 30px rgba(0, 255, 65, 0.8);
  text-shadow: 0 0 10px #00ff41;
}

.element:active {
  background: #00ff41;
  color: #000;
}`,
  },
  {
    name: "Glass Morphism",
    css: `.element {
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

.element:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.element:active {
  transform: translateY(0);
}`,
  },
  {
    name: "Retro Gaming",
    css: `.element {
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

.element:hover {
  background: #ff5252;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #333;
}

.element:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #333;
}`,
  },
  {
    name: "Minimalist",
    css: `.element {
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

.element:hover {
  border-color: #333;
  background: #f9f9f9;
}

.element:active {
  background: #f0f0f0;
}`,
  },
  {
    name: "Neumorphism",
    css: `.element {
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

.element:hover {
  box-shadow: inset 9px 9px 16px #a3b1c6, inset -9px -9px 16px #ffffff;
}

.element:active {
  box-shadow: inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff;
}`,
  },
  {
    name: "Fire Gradient",
    css: `.element {
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

.element:hover {
  background: linear-gradient(45deg, #ff6b6b 0%, #feca57 50%, #ff9ff3 100%);
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
}

.element:active {
  transform: scale(0.98);
}`,
  },
  {
    name: "Cyberpunk",
    css: `.element {
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

.element:hover {
  box-shadow: 0 0 30px #ff0080;
  border-color: #7928ca;
}

.element:active {
  background: linear-gradient(45deg, #7928ca, #ff0080);
}`,
  },
  {
    name: "Ocean Wave",
    css: `.element {
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

.element:hover {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(79, 172, 254, 0.4);
}

.element:active {
  transform: translateY(-1px);
}`,
  },
  {
    name: "Dark Mode",
    css: `.element {
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

.element:hover {
  background: #333;
  border-color: #555;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.element:active {
  background: #000;
  transform: translateY(1px);
}`,
  },
];
