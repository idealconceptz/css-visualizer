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
  {
    name: "Holographic",
    css: `.element {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
  background-size: 400% 400%;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  animation: holographic 3s ease infinite;
  transition: all 0.3s ease;
}

@keyframes holographic {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.element:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.element:active {
  transform: scale(0.98);
}`,
  },
  {
    name: "Brutalist",
    css: `.element {
  background: #ff4444;
  color: black;
  padding: 1.2rem 2.5rem;
  border: 6px solid black;
  border-radius: 0;
  font-size: 1.2rem;
  font-weight: 900;
  cursor: pointer;
  font-family: 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 8px 8px 0 black;
  transition: all 0.1s ease;
}

.element:hover {
  background: #ff6666;
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0 black;
}

.element:active {
  transform: translate(4px, 4px);
  box-shadow: 4px 4px 0 black;
}`,
  },
  {
    name: "Aurora Borealis",
    css: `.element {
  background: linear-gradient(45deg, #00c9ff 0%, #92fe9d 35%, #ff9a9e 70%, #fad0c4 100%);
  background-size: 300% 300%;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  animation: aurora 4s ease infinite;
  box-shadow: 0 0 20px rgba(0, 201, 255, 0.3);
  transition: all 0.3s ease;
}

@keyframes aurora {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.element:hover {
  box-shadow: 0 0 30px rgba(0, 201, 255, 0.6);
  transform: translateY(-3px);
}

.element:active {
  transform: translateY(-1px);
}`,
  },
  {
    name: "Vintage Paper",
    css: `.element {
  background: #f4f1e8;
  color: #8b4513;
  padding: 1rem 2rem;
  border: 2px solid #d2b48c;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Times New Roman', serif;
  box-shadow: inset 0 0 20px rgba(210, 180, 140, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;
}

.element:hover {
  background: #f9f6ed;
  transform: translateY(-1px);
  box-shadow: inset 0 0 25px rgba(210, 180, 140, 0.4), 3px 3px 6px rgba(0, 0, 0, 0.3);
}

.element:active {
  transform: translateY(0);
}`,
  },
  {
    name: "Liquid Metal",
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
  transition: all 0.4s ease;
}

.element:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.element:hover:before {
  left: 100%;
}

.element:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.element:active {
  transform: scale(0.98);
}`,
  },
  {
    name: "Glitch Effect",
    css: `.element {
  background: #000;
  color: #00ff00;
  padding: 1rem 2rem;
  border: 2px solid #00ff00;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease;
}

.element:hover {
  animation: glitch 0.3s ease;
  box-shadow: 0 0 20px #00ff00;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.element:active {
  background: #00ff00;
  color: #000;
}`,
  },
  {
    name: "Soft Pastel",
    css: `.element {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  color: #8b4513;
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(252, 182, 159, 0.3);
  transition: all 0.3s ease;
}

.element:hover {
  background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(252, 182, 159, 0.4);
}

.element:active {
  transform: translateY(0);
}`,
  },
  {
    name: "Neon Outline",
    css: `.element {
  background: transparent;
  color: #ff073a;
  padding: 1rem 2rem;
  border: 3px solid #ff073a;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 
    0 0 10px #ff073a,
    inset 0 0 10px transparent;
  transition: all 0.3s ease;
}

.element:hover {
  background: #ff073a;
  color: white;
  box-shadow: 
    0 0 20px #ff073a,
    0 0 40px #ff073a,
    inset 0 0 20px rgba(255, 7, 58, 0.2);
  text-shadow: 0 0 10px white;
}

.element:active {
  box-shadow: 
    0 0 15px #ff073a,
    inset 0 0 15px rgba(255, 7, 58, 0.3);
}`,
  },
  {
    name: "Material Design",
    css: `.element {
  background: #2196f3;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.element:hover {
  background: #1976d2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}

.element:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}`,
  },
  {
    name: "Retro Synthwave",
    css: `.element {
  background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff);
  color: white;
  padding: 1rem 2rem;
  border: 2px solid #ff006e;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 0 20px rgba(255, 0, 110, 0.5);
  position: relative;
  transition: all 0.3s ease;
}

.element:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 0, 110, 0.8);
}

.element:active {
  transform: scale(0.98);
}`,
  },
  {
    name: "Wooden Button",
    css: `.element {
  background: linear-gradient(135deg, #8b4513 0%, #daa520 50%, #8b4513 100%);
  color: #f5deb3;
  padding: 1rem 2rem;
  border: 3px solid #654321;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 
    inset 0 1px 3px rgba(218, 165, 32, 0.7),
    inset 0 -1px 3px rgba(101, 67, 33, 0.7),
    0 3px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.element:hover {
  background: linear-gradient(135deg, #a0522d 0%, #f0e68c 50%, #a0522d 100%);
  transform: translateY(-1px);
  box-shadow: 
    inset 0 1px 3px rgba(240, 230, 140, 0.7),
    inset 0 -1px 3px rgba(101, 67, 33, 0.7),
    0 4px 8px rgba(0, 0, 0, 0.4);
}

.element:active {
  transform: translateY(1px);
  box-shadow: 
    inset 0 1px 3px rgba(101, 67, 33, 0.7),
    inset 0 -1px 3px rgba(218, 165, 32, 0.7),
    0 1px 3px rgba(0, 0, 0, 0.3);
}`,
  },
  {
    name: "Bubble Gum",
    css: `.element {
  background: radial-gradient(circle, #ff9a9e 0%, #fad0c4 100%);
  color: #8b008b;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(255, 154, 158, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.element:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 30px rgba(255, 154, 158, 0.6);
}

.element:active {
  transform: scale(1.05);
}`,
  },
  {
    name: "Circuit Board",
    css: `.element {
  background: #0a0a0a;
  color: #00ff00;
  padding: 1rem 2rem;
  border: 2px solid #00ff00;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  position: relative;
  transition: all 0.3s ease;
}

.element:hover {
  background: #001100;
  box-shadow: 
    0 0 10px #00ff00,
    inset 0 0 10px rgba(0, 255, 0, 0.1);
  text-shadow: 0 0 5px #00ff00;
}

.element:active {
  background: #002200;
  box-shadow: 
    0 0 15px #00ff00,
    inset 0 0 15px rgba(0, 255, 0, 0.2);
}`,
  },
  {
    name: "Frosted Glass",
    css: `.element {
  background: rgba(255, 255, 255, 0.1);
  color: #333;
  padding: 1rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  transition: all 0.3s ease;
  position: relative;
}

.element:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(31, 38, 135, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.element:active {
  transform: translateY(0);
  background: rgba(255, 255, 255, 0.15);
}`,
  },
  {
    name: "Electric Blue",
    css: `.element {
  background: linear-gradient(45deg, #1e3c72, #2a5298);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(42, 82, 152, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.element:hover {
  background: linear-gradient(45deg, #2a5298, #1e3c72);
  box-shadow: 
    0 0 30px rgba(42, 82, 152, 0.6),
    0 0 60px rgba(42, 82, 152, 0.4);
  transform: translateY(-2px);
}

.element:active {
  transform: translateY(0);
  box-shadow: 0 0 20px rgba(42, 82, 152, 0.4);
}`,
  },
  {
    name: "Vintage Gold",
    css: `.element {
  background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
  color: #8b4513;
  padding: 1rem 2rem;
  border: 3px solid #b8860b;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 
    inset 0 2px 4px rgba(255, 210, 0, 0.6),
    inset 0 -2px 4px rgba(184, 134, 11, 0.6),
    0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.element:hover {
  background: linear-gradient(135deg, #ffd200 0%, #f7971e 100%);
  transform: translateY(-1px);
  box-shadow: 
    inset 0 2px 4px rgba(255, 210, 0, 0.8),
    inset 0 -2px 4px rgba(184, 134, 11, 0.6),
    0 6px 12px rgba(0, 0, 0, 0.4);
}

.element:active {
  transform: translateY(1px);
  box-shadow: 
    inset 0 2px 4px rgba(184, 134, 11, 0.6),
    inset 0 -2px 4px rgba(255, 210, 0, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.3);
}`,
  },
  {
    name: "Cosmic Nebula",
    css: `.element {
  background: radial-gradient(ellipse at center, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 
    0 0 20px rgba(131, 58, 180, 0.5),
    0 0 40px rgba(253, 29, 29, 0.3),
    0 0 60px rgba(252, 176, 69, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.element:hover {
  transform: scale(1.05);
  box-shadow: 
    0 0 30px rgba(131, 58, 180, 0.7),
    0 0 60px rgba(253, 29, 29, 0.5),
    0 0 90px rgba(252, 176, 69, 0.3);
}

.element:active {
  transform: scale(0.98);
}`,
  },
];
