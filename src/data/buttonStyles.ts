export interface ElementStyle {
  name: string;
  css: string;
  scss?: string; // Optional for now, will add SCSS versions progressively
  tailwind?: string; // Tailwind CSS equivalent
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
    scss: `$primary-color: #667eea;
$secondary-color: #764ba2;
$text-color: white;
$padding: 16px 32px;
$border-radius: 12px;
$font-size: 18px;

.element {
  background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
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
    tailwind: `<button class="
  bg-gradient-to-br from-indigo-500 to-purple-600
  text-white
  py-4 px-8
  rounded-xl
  text-lg font-bold
  cursor-pointer
  shadow-lg
  transition-all duration-300 ease-in-out
  hover:-translate-y-0.5 hover:shadow-xl
  active:translate-y-0 active:shadow-md
">
  Hover Over Me!
</button>`,
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
    scss: `$neon-color: #00ff41;
$background-color: #000;
$padding: 16px 32px;
$border-radius: 8px;
$font-size: 18px;

.element {
  background: $background-color;
  color: $neon-color;
  padding: $padding;
  border: 2px solid $neon-color;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.8);
    text-shadow: 0 0 10px $neon-color;
  }

  &:active {
    background: $neon-color;
    color: $background-color;
  }
}`,
    tailwind: `<button class="
  bg-black
  text-[#00ff41]
  py-4 px-8
  border-2 border-[#00ff41]
  rounded-lg
  text-lg font-bold
  cursor-pointer
  shadow-[0_0_20px_rgba(0,255,65,0.3)]
  transition-all duration-300 ease-in-out
  hover:shadow-[0_0_30px_rgba(0,255,65,0.8)]
  hover:[text-shadow:0_0_10px_#00ff41]
  active:bg-[#00ff41] active:text-black
">
  Hover Over Me!
</button>`,
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
    scss: `$glass-bg: rgba(255, 255, 255, 0.2);
$glass-border: rgba(255, 255, 255, 0.3);
$text-color: #333;
$border-radius: 16px;
$padding: 1rem 2rem;
$font-size: 1.1rem;

.element {
  background: $glass-bg;
  color: $text-color;
  padding: $padding;
  border: 1px solid $glass-border;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}`,
    tailwind: `<button class="
  bg-white/20
  text-gray-700
  py-4 px-8
  border border-white/30
  rounded-2xl
  text-lg font-bold
  cursor-pointer
  backdrop-blur-sm
  shadow-[0_8px_32px_rgba(31,38,135,0.37)]
  transition-all duration-300 ease-in-out
  hover:bg-white/30 hover:-translate-y-0.5
  active:translate-y-0
">
  Hover Over Me!
</button>`,
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
    scss: `$primary-color: #ff6b6b;
$hover-color: #ff5252;
$border-color: #333;
$text-color: white;
$padding: 1rem 2rem;
$font-size: 1.1rem;

.element {
  background: $primary-color;
  color: $text-color;
  padding: $padding;
  border: 4px solid $border-color;
  border-radius: 0;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  box-shadow: 4px 4px 0 $border-color;
  transition: all 0.1s ease;

  &:hover {
    background: $hover-color;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 $border-color;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 $border-color;
  }
}`,
    tailwind: `<button class="
  bg-[#ff6b6b]
  text-white
  py-4 px-8
  border-4 border-gray-800
  rounded-none
  text-lg font-bold
  cursor-pointer
  font-mono
  uppercase
  shadow-[4px_4px_0_#333]
  transition-all duration-100 ease-in-out
  hover:bg-[#ff5252]
  hover:-translate-x-0.5 hover:-translate-y-0.5
  hover:shadow-[6px_6px_0_#333]
  active:translate-x-0.5 active:translate-y-0.5
  active:shadow-[2px_2px_0_#333]
">
  Hover Over Me!
</button>`,
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
    scss: `$bg-color: white;
$text-color: #333;
$border-color: #ddd;
$hover-border: #333;
$hover-bg: #f9f9f9;
$active-bg: #f0f0f0;
$padding: 1rem 2rem;
$border-radius: 4px;
$font-size: 1rem;

.element {
  background: $bg-color;
  color: $text-color;
  padding: $padding;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: $hover-border;
    background: $hover-bg;
  }

  &:active {
    background: $active-bg;
  }
}`,
    tailwind: `<button class="
  bg-white
  text-gray-700
  py-4 px-8
  border border-gray-300
  rounded
  text-base font-medium
  cursor-pointer
  transition-all duration-200 ease-in-out
  hover:border-gray-700 hover:bg-gray-50
  active:bg-gray-100
">
  Hover Over Me!
</button>`,
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
    scss: `$bg-color: #e0e5ec;
$text-color: #333;
$shadow-dark: #a3b1c6;
$shadow-light: #ffffff;
$border-radius: 20px;
$padding: 1rem 2rem;
$font-size: 1.1rem;

.element {
  background: $bg-color;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 9px 9px 16px $shadow-dark, -9px -9px 16px $shadow-light;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 9px 9px 16px $shadow-dark, inset -9px -9px 16px $shadow-light;
  }

  &:active {
    box-shadow: inset 5px 5px 10px $shadow-dark, inset -5px -5px 10px $shadow-light;
  }
}`,
    tailwind: `<button class="
  bg-gray-200
  text-gray-700
  py-4 px-8
  border-none
  rounded-[20px]
  text-lg font-bold
  cursor-pointer
  shadow-[9px_9px_16px_#a3b1c6,_-9px_-9px_16px_#ffffff]
  transition-all duration-300 ease-in-out
  hover:shadow-[inset_9px_9px_16px_#a3b1c6,_inset_-9px_-9px_16px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#a3b1c6,_inset_-5px_-5px_10px_#ffffff]
">
  Hover Over Me!
</button>`,
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
    scss: `$fire-gradient: linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
$hover-gradient: linear-gradient(45deg, #ff6b6b 0%, #feca57 50%, #ff9ff3 100%);
$text-color: #d73502;
$border-radius: 25px;
$padding: 1rem 2rem;
$font-size: 1.1rem;

.element {
  background: $fire-gradient;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 154, 158, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: $hover-gradient;
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-br from-red-300 to-pink-200
  text-red-600
  py-4 px-8
  border-none
  rounded-[25px]
  text-lg font-bold
  cursor-pointer
  shadow-[0_4px_15px_rgba(255,154,158,0.4)]
  transition-all duration-300 ease-in-out
  hover:bg-gradient-to-br hover:from-red-500 hover:via-yellow-400 hover:to-pink-400
  hover:scale-105
  hover:shadow-[0_6px_20px_rgba(255,107,107,0.6)]
  active:scale-[0.98]
">
  Hover Over Me!
</button>`,
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
    scss: `$primary-color: #ff0080;
$secondary-color: #7928ca;
$text-color: white;
$padding: 1rem 2rem;
$font-size: 1.1rem;
$letter-spacing: 2px;

.element {
  background: linear-gradient(45deg, $primary-color, $secondary-color);
  color: $text-color;
  padding: $padding;
  border: 2px solid $primary-color;
  border-radius: 0;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: $letter-spacing;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px $primary-color;
    border-color: $secondary-color;
  }

  &:active {
    background: linear-gradient(45deg, $secondary-color, $primary-color);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-br from-pink-500 to-purple-600
  text-white
  py-4 px-8
  border-2 border-pink-500
  rounded-none
  text-lg font-bold
  cursor-pointer
  uppercase
  tracking-[2px]
  relative
  overflow-hidden
  transition-all duration-300 ease-in-out
  hover:shadow-[0_0_30px_#ff0080]
  hover:border-purple-600
  active:bg-gradient-to-br active:from-purple-600 active:to-pink-500
">
  Hover Over Me!
</button>`,
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
    scss: `$ocean-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$wave-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
$text-color: white;
$border-radius: 50px;
$padding: 1rem 2rem;
$font-size: 1.1rem;

.element {
  background: $ocean-gradient;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: $wave-gradient;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(79, 172, 254, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-br from-indigo-500 to-purple-600
  text-white
  py-4 px-8
  border-none
  rounded-[50px]
  text-lg font-bold
  cursor-pointer
  relative
  overflow-hidden
  transition-all duration-300 ease-in-out
  hover:bg-gradient-to-br hover:from-blue-400 hover:to-cyan-300
  hover:-translate-y-1
  hover:shadow-[0_10px_25px_rgba(79,172,254,0.4)]
  active:-translate-y-0.5
">
  Hover Over Me!
</button>`,
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
    scss: `$dark-bg: #1a1a1a;
$dark-hover: #333;
$dark-active: #000;
$dark-border: #333;
$dark-border-hover: #555;
$text-color: #ffffff;
$padding: 1rem 2rem;
$border-radius: 8px;
$font-size: 1.1rem;

.element {
  background: $dark-bg;
  color: $text-color;
  padding: $padding;
  border: 1px solid $dark-border;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: $dark-hover;
    border-color: $dark-border-hover;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: $dark-active;
    transform: translateY(1px);
  }
}`,
    tailwind: `<button class="
  bg-gray-900
  text-white
  py-4 px-8
  border border-gray-700
  rounded-lg
  text-lg font-bold
  cursor-pointer
  transition-all duration-300 ease-in-out
  hover:bg-gray-700
  hover:border-gray-500
  hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
  active:bg-black
  active:translate-y-0.5
">
  Hover Over Me!
</button>`,
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
    scss: `$holo-gradient: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
$text-color: white;
$padding: 1rem 2rem;
$border-radius: 15px;
$font-size: 1.1rem;

@keyframes holographic {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.element {
  background: $holo-gradient;
  background-size: 400% 400%;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  animation: holographic 3s ease infinite;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }

  &:active {
    transform: scale(0.98);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-r from-red-400 via-blue-400 to-yellow-400
  bg-[length:400%_400%]
  text-white
  py-4 px-8
  border-none
  rounded-[15px]
  text-lg font-bold
  cursor-pointer
  animate-[holographic_3s_ease_infinite]
  transition-all duration-300 ease-in-out
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]
  active:scale-[0.98]
">
  Hover Over Me!
</button>

<style>
@keyframes holographic {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>`,
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
    scss: `$brutal-bg: #ff4444;
$brutal-hover: #ff6666;
$text-color: black;
$border-color: black;
$padding: 1.2rem 2.5rem;
$border-width: 6px;
$font-size: 1.2rem;
$letter-spacing: 2px;

.element {
  background: $brutal-bg;
  color: $text-color;
  padding: $padding;
  border: $border-width solid $border-color;
  border-radius: 0;
  font-size: $font-size;
  font-weight: 900;
  cursor: pointer;
  font-family: 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: $letter-spacing;
  box-shadow: 8px 8px 0 $border-color;
  transition: all 0.1s ease;

  &:hover {
    background: $brutal-hover;
    transform: translate(-2px, -2px);
    box-shadow: 10px 10px 0 $border-color;
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: 4px 4px 0 $border-color;
  }
}`,
    tailwind: `<button class="
  bg-[#ff4444]
  text-black
  py-[1.2rem] px-[2.5rem]
  border-[6px] border-black
  rounded-none
  text-xl font-black
  cursor-pointer
  font-sans
  uppercase
  tracking-[2px]
  shadow-[8px_8px_0_black]
  transition-all duration-100 ease-in-out
  hover:bg-[#ff6666]
  hover:-translate-x-0.5 hover:-translate-y-0.5
  hover:shadow-[10px_10px_0_black]
  active:translate-x-1 active:translate-y-1
  active:shadow-[4px_4px_0_black]
">
  Hover Over Me!
</button>`,
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
    scss: `$aurora-gradient: linear-gradient(45deg, #00c9ff 0%, #92fe9d 35%, #ff9a9e 70%, #fad0c4 100%);
$text-color: white;
$padding: 1rem 2rem;
$border-radius: 25px;
$font-size: 1.1rem;
$glow-color: rgba(0, 201, 255, 0.3);
$glow-hover: rgba(0, 201, 255, 0.6);

@keyframes aurora {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.element {
  background: $aurora-gradient;
  background-size: 300% 300%;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  animation: aurora 4s ease infinite;
  box-shadow: 0 0 20px $glow-color;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px $glow-hover;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-r from-cyan-400 via-green-300 to-orange-200
  bg-[length:300%_300%]
  text-white
  py-4 px-8
  border-none
  rounded-[25px]
  text-lg font-bold
  cursor-pointer
  animate-[aurora_4s_ease_infinite]
  shadow-[0_0_20px_rgba(0,201,255,0.3)]
  transition-all duration-300 ease-in-out
  hover:shadow-[0_0_30px_rgba(0,201,255,0.6)]
  hover:-translate-y-1
  active:-translate-y-0.5
">
  Hover Over Me!
</button>

<style>
@keyframes aurora {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>`,
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
    scss: `$paper-bg: #f4f1e8;
$paper-hover: #f9f6ed;
$text-color: #8b4513;
$border-color: #d2b48c;
$padding: 1rem 2rem;
$border-radius: 3px;
$font-size: 1rem;

.element {
  background: $paper-bg;
  color: $text-color;
  padding: $padding;
  border: 2px solid $border-color;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Times New Roman', serif;
  box-shadow: inset 0 0 20px rgba(210, 180, 140, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: $paper-hover;
    transform: translateY(-1px);
    box-shadow: inset 0 0 25px rgba(210, 180, 140, 0.4), 3px 3px 6px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}`,
    tailwind: `<button class="
  bg-stone-100
  text-amber-800
  py-4 px-8
  border-2 border-tan-300
  rounded-[3px]
  text-base font-semibold
  cursor-pointer
  font-serif
  shadow-[inset_0_0_20px_rgba(210,180,140,0.3),_2px_2px_4px_rgba(0,0,0,0.2)]
  relative
  transition-all duration-300 ease-in-out
  hover:bg-stone-50
  hover:-translate-y-0.5
  hover:shadow-[inset_0_0_25px_rgba(210,180,140,0.4),_3px_3px_6px_rgba(0,0,0,0.3)]
  active:translate-y-0
">
  Hover Over Me!
</button>`,
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
    scss: `$metal-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$shine-effect: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
$text-color: white;
$padding: 1rem 2rem;
$border-radius: 50px;
$font-size: 1.1rem;

.element {
  background: $metal-gradient;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: $shine-effect;
    transition: left 0.5s ease;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: scale(0.98);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-br from-indigo-500 to-purple-600
  text-white
  py-4 px-8
  border-none
  rounded-[50px]
  text-lg font-bold
  cursor-pointer
  relative
  overflow-hidden
  transition-all duration-[400ms] ease-in-out
  before:content-[''] before:absolute before:top-0 before:-left-full
  before:w-full before:h-full
  before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
  before:transition-[left] before:duration-500 before:ease-in-out
  hover:scale-105
  hover:shadow-[0_8px_25px_rgba(102,126,234,0.4)]
  hover:before:left-full
  active:scale-[0.98]
">
  Hover Over Me!
</button>`,
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
    scss: `$bg-color: #000;
$text-color: #00ff00;
$border-color: #00ff00;
$padding: 1rem 2rem;
$font-size: 1.1rem;

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.element {
  background: $bg-color;
  color: $text-color;
  padding: $padding;
  border: 2px solid $border-color;
  border-radius: 0;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    animation: glitch 0.3s ease;
    box-shadow: 0 0 20px $border-color;
  }

  &:active {
    background: $text-color;
    color: $bg-color;
  }
}`,
    tailwind: `<button class="
  bg-black
  text-[#00ff00]
  py-4 px-8
  border-2 border-[#00ff00]
  rounded-none
  text-lg font-bold
  cursor-pointer
  font-mono
  uppercase
  relative
  transition-all duration-300 ease-in-out
  hover:shadow-[0_0_20px_#00ff00]
  hover:animate-[glitch_0.3s_ease]
  active:bg-[#00ff00] active:text-black
">
  Hover Over Me!
</button>

<style>
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
</style>`,
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
    scss: `$pastel-gradient: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
$pastel-hover: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
$text-color: #8b4513;
$text-hover: white;
$padding: 1rem 2rem;
$border-radius: 20px;
$font-size: 1rem;

.element {
  background: $pastel-gradient;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(252, 182, 159, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: $pastel-hover;
    color: $text-hover;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(252, 182, 159, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-br from-orange-100 to-pink-200
  text-amber-800
  py-4 px-8
  border-none
  rounded-[20px]
  text-base font-semibold
  cursor-pointer
  shadow-[0_4px_15px_rgba(252,182,159,0.3)]
  transition-all duration-300 ease-in-out
  hover:bg-gradient-to-br hover:from-yellow-200 hover:to-blue-800
  hover:text-white
  hover:-translate-y-0.5
  hover:shadow-[0_6px_20px_rgba(252,182,159,0.4)]
  active:translate-y-0
">
  Hover Over Me!
</button>`,
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
    scss: `$neon-color: #ff073a;
$text-color: #ff073a;
$text-hover: white;
$padding: 1rem 2rem;
$border-radius: 8px;
$font-size: 1.1rem;
$border-width: 3px;

.element {
  background: transparent;
  color: $text-color;
  padding: $padding;
  border: $border-width solid $neon-color;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 
    0 0 10px $neon-color,
    inset 0 0 10px transparent;
  transition: all 0.3s ease;

  &:hover {
    background: $neon-color;
    color: $text-hover;
    box-shadow: 
      0 0 20px $neon-color,
      0 0 40px $neon-color,
      inset 0 0 20px rgba(255, 7, 58, 0.2);
    text-shadow: 0 0 10px $text-hover;
  }

  &:active {
    box-shadow: 
      0 0 15px $neon-color,
      inset 0 0 15px rgba(255, 7, 58, 0.3);
  }
}`,
    tailwind: `<button class="
  bg-transparent
  text-pink-600
  py-4 px-8
  border-[3px] border-pink-600
  rounded-lg
  text-lg font-bold
  cursor-pointer
  shadow-[0_0_10px_#ff073a,_inset_0_0_10px_transparent]
  transition-all duration-300 ease-in-out
  hover:bg-pink-600
  hover:text-white
  hover:shadow-[0_0_20px_#ff073a,_0_0_40px_#ff073a,_inset_0_0_20px_rgba(255,7,58,0.2)]
  hover:[text-shadow:0_0_10px_white]
  active:shadow-[0_0_15px_#ff073a,_inset_0_0_15px_rgba(255,7,58,0.3)]
">
  Hover Over Me!
</button>`,
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
    scss: `$material-blue: #2196f3;
$material-blue-dark: #1976d2;
$text-color: white;
$padding: 1rem 2rem;
$border-radius: 4px;
$font-size: 1rem;
$letter-spacing: 0.5px;
$material-ease: cubic-bezier(0.4, 0, 0.2, 1);

.element {
  background: $material-blue;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: $letter-spacing;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s $material-ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: $material-blue-dark;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}`,
    tailwind: `<button class="
  bg-[#2196f3]
  text-white
  py-4 px-8
  border-none
  rounded
  text-base font-medium
  cursor-pointer
  uppercase
  tracking-wide
  shadow-md
  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
  relative
  overflow-hidden
  hover:bg-[#1976d2]
  hover:shadow-lg
  hover:-translate-y-0.5
  active:translate-y-0
  active:shadow-md
">
  Hover Over Me!
</button>`,
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
    scss: `$synthwave-gradient: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff);
$border-color: #ff006e;
$text-color: white;
$padding: 1rem 2rem;
$font-size: 1.1rem;
$letter-spacing: 2px;
$glow-color: rgba(255, 0, 110, 0.5);
$glow-hover: rgba(255, 0, 110, 0.8);

.element {
  background: $synthwave-gradient;
  color: $text-color;
  padding: $padding;
  border: 2px solid $border-color;
  border-radius: 0;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: $letter-spacing;
  box-shadow: 0 0 20px $glow-color;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px $glow-hover;
  }

  &:active {
    transform: scale(0.98);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500
  text-white
  py-4 px-8
  border-2 border-pink-600
  rounded-none
  text-lg font-bold
  cursor-pointer
  font-mono
  uppercase
  tracking-[2px]
  shadow-[0_0_20px_rgba(255,0,110,0.5)]
  relative
  transition-all duration-300 ease-in-out
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(255,0,110,0.8)]
  active:scale-[0.98]
">
  Hover Over Me!
</button>`,
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
    scss: `$wood-gradient: linear-gradient(135deg, #8b4513 0%, #daa520 50%, #8b4513 100%);
$wood-hover: linear-gradient(135deg, #a0522d 0%, #f0e68c 50%, #a0522d 100%);
$text-color: #f5deb3;
$border-color: #654321;
$padding: 1rem 2rem;
$border-radius: 8px;
$font-size: 1.1rem;

.element {
  background: $wood-gradient;
  color: $text-color;
  padding: $padding;
  border: 3px solid $border-color;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 
    inset 0 1px 3px rgba(218, 165, 32, 0.7),
    inset 0 -1px 3px rgba(101, 67, 33, 0.7),
    0 3px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: $wood-hover;
    transform: translateY(-1px);
    box-shadow: 
      inset 0 1px 3px rgba(240, 230, 140, 0.7),
      inset 0 -1px 3px rgba(101, 67, 33, 0.7),
      0 4px 8px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 
      inset 0 1px 3px rgba(101, 67, 33, 0.7),
      inset 0 -1px 3px rgba(218, 165, 32, 0.7),
      0 1px 3px rgba(0, 0, 0, 0.3);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-br from-amber-800 via-yellow-600 to-amber-800
  text-yellow-100
  py-4 px-8
  border-[3px] border-amber-900
  rounded-lg
  text-lg font-bold
  cursor-pointer
  text-shadow-md
  shadow-[inset_0_1px_3px_rgba(218,165,32,0.7),_inset_0_-1px_3px_rgba(101,67,33,0.7),_0_3px_6px_rgba(0,0,0,0.3)]
  transition-all duration-300 ease-in-out
  hover:bg-gradient-to-br hover:from-orange-700 hover:via-yellow-300 hover:to-orange-700
  hover:-translate-y-0.5
  hover:shadow-[inset_0_1px_3px_rgba(240,230,140,0.7),_inset_0_-1px_3px_rgba(101,67,33,0.7),_0_4px_8px_rgba(0,0,0,0.4)]
  active:translate-y-0.5
  active:shadow-[inset_0_1px_3px_rgba(101,67,33,0.7),_inset_0_-1px_3px_rgba(218,165,32,0.7),_0_1px_3px_rgba(0,0,0,0.3)]
">
  Hover Over Me!
</button>`,
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
    scss: `$bubble-gradient: radial-gradient(circle, #ff9a9e 0%, #fad0c4 100%);
$text-color: #8b008b;
$padding: 1rem 2rem;
$border-radius: 50px;
$font-size: 1.1rem;
$shadow-color: rgba(255, 154, 158, 0.4);
$shadow-hover: rgba(255, 154, 158, 0.6);

.element {
  background: $bubble-gradient;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 8px 20px $shadow-color;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 30px $shadow-hover;
  }

  &:active {
    transform: scale(1.05);
  }
}`,
    tailwind: `<button class="
  bg-[radial-gradient(circle,_#ff9a9e_0%,_#fad0c4_100%)]
  text-purple-800
  py-4 px-8
  border-none
  rounded-[50px]
  text-lg font-bold
  cursor-pointer
  shadow-[0_8px_20px_rgba(255,154,158,0.4)]
  transition-all duration-300 ease-in-out
  relative
  overflow-hidden
  hover:scale-110
  hover:shadow-[0_12px_30px_rgba(255,154,158,0.6)]
  active:scale-105
">
  Hover Over Me!
</button>`,
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
    scss: `$bg-dark: #0a0a0a;
$bg-hover: #001100;
$bg-active: #002200;
$circuit-color: #00ff00;
$padding: 1rem 2rem;
$border-radius: 4px;
$font-size: 1rem;

.element {
  background: $bg-dark;
  color: $circuit-color;
  padding: $padding;
  border: 2px solid $circuit-color;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: $bg-hover;
    box-shadow: 
      0 0 10px $circuit-color,
      inset 0 0 10px rgba(0, 255, 0, 0.1);
    text-shadow: 0 0 5px $circuit-color;
  }

  &:active {
    background: $bg-active;
    box-shadow: 
      0 0 15px $circuit-color,
      inset 0 0 15px rgba(0, 255, 0, 0.2);
  }
}`,
    tailwind: `<button class="
  bg-gray-950
  text-[#00ff00]
  py-4 px-8
  border-2 border-[#00ff00]
  rounded
  text-base font-bold
  cursor-pointer
  font-mono
  relative
  transition-all duration-300 ease-in-out
  hover:bg-green-950
  hover:shadow-[0_0_10px_#00ff00,_inset_0_0_10px_rgba(0,255,0,0.1)]
  hover:[text-shadow:0_0_5px_#00ff00]
  active:bg-green-900
  active:shadow-[0_0_15px_#00ff00,_inset_0_0_15px_rgba(0,255,0,0.2)]
">
  Hover Over Me!
</button>`,
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
    scss: `$glass-bg: rgba(255, 255, 255, 0.1);
$glass-hover: rgba(255, 255, 255, 0.2);
$glass-active: rgba(255, 255, 255, 0.15);
$glass-border: rgba(255, 255, 255, 0.2);
$glass-border-hover: rgba(255, 255, 255, 0.3);
$text-color: #333;
$padding: 1rem 2rem;
$border-radius: 20px;
$font-size: 1.1rem;

.element {
  background: $glass-bg;
  color: $text-color;
  padding: $padding;
  border: 1px solid $glass-border;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: $glass-hover;
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.3);
    border-color: $glass-border-hover;
  }

  &:active {
    transform: translateY(0);
    background: $glass-active;
  }
}`,
    tailwind: `<button class="
  bg-white/10
  text-gray-700
  py-4 px-8
  border border-white/20
  rounded-[20px]
  text-lg font-semibold
  cursor-pointer
  backdrop-blur-md backdrop-saturate-180
  shadow-[0_8px_32px_rgba(31,38,135,0.2)]
  transition-all duration-300 ease-in-out
  relative
  hover:bg-white/20
  hover:-translate-y-0.5
  hover:shadow-[0_12px_40px_rgba(31,38,135,0.3)]
  hover:border-white/30
  active:translate-y-0
  active:bg-white/15
">
  Hover Over Me!
</button>`,
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
    scss: `$electric-gradient: linear-gradient(45deg, #1e3c72, #2a5298);
$electric-hover: linear-gradient(45deg, #2a5298, #1e3c72);
$text-color: white;
$padding: 1rem 2rem;
$border-radius: 8px;
$font-size: 1.1rem;
$electric-glow: rgba(42, 82, 152, 0.4);
$electric-glow-strong: rgba(42, 82, 152, 0.6);

.element {
  background: $electric-gradient;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 20px $electric-glow;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: $electric-hover;
    box-shadow: 
      0 0 30px $electric-glow-strong,
      0 0 60px $electric-glow;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 20px $electric-glow;
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-r from-blue-800 to-blue-600
  text-white
  py-4 px-8
  border-none
  rounded-lg
  text-lg font-bold
  cursor-pointer
  shadow-[0_0_20px_rgba(42,82,152,0.4)]
  transition-all duration-300 ease-in-out
  relative
  overflow-hidden
  hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800
  hover:shadow-[0_0_30px_rgba(42,82,152,0.6),_0_0_60px_rgba(42,82,152,0.4)]
  hover:-translate-y-0.5
  active:translate-y-0
  active:shadow-[0_0_20px_rgba(42,82,152,0.4)]
">
  Hover Over Me!
</button>`,
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
    scss: `$gold-gradient: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
$gold-hover: linear-gradient(135deg, #ffd200 0%, #f7971e 100%);
$text-color: #8b4513;
$border-color: #b8860b;
$padding: 1rem 2rem;
$border-radius: 10px;
$font-size: 1.1rem;

.element {
  background: $gold-gradient;
  color: $text-color;
  padding: $padding;
  border: 3px solid $border-color;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 
    inset 0 2px 4px rgba(255, 210, 0, 0.6),
    inset 0 -2px 4px rgba(184, 134, 11, 0.6),
    0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: $gold-hover;
    transform: translateY(-1px);
    box-shadow: 
      inset 0 2px 4px rgba(255, 210, 0, 0.8),
      inset 0 -2px 4px rgba(184, 134, 11, 0.6),
      0 6px 12px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 
      inset 0 2px 4px rgba(184, 134, 11, 0.6),
      inset 0 -2px 4px rgba(255, 210, 0, 0.6),
      0 2px 4px rgba(0, 0, 0, 0.3);
  }
}`,
    tailwind: `<button class="
  bg-gradient-to-br from-orange-500 to-yellow-400
  text-amber-900
  py-4 px-8
  border-[3px] border-yellow-600
  rounded-[10px]
  text-lg font-bold
  cursor-pointer
  text-shadow-sm
  shadow-[inset_0_2px_4px_rgba(255,210,0,0.6),_inset_0_-2px_4px_rgba(184,134,11,0.6),_0_4px_8px_rgba(0,0,0,0.3)]
  transition-all duration-300 ease-in-out
  relative
  hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500
  hover:-translate-y-0.5
  hover:shadow-[inset_0_2px_4px_rgba(255,210,0,0.8),_inset_0_-2px_4px_rgba(184,134,11,0.6),_0_6px_12px_rgba(0,0,0,0.4)]
  active:translate-y-0.5
  active:shadow-[inset_0_2px_4px_rgba(184,134,11,0.6),_inset_0_-2px_4px_rgba(255,210,0,0.6),_0_2px_4px_rgba(0,0,0,0.3)]
">
  Hover Over Me!
</button>`,
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
    scss: `$nebula-gradient: radial-gradient(ellipse at center, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
$text-color: white;
$padding: 1rem 2rem;
$border-radius: 25px;
$font-size: 1.1rem;
$purple-glow: rgba(131, 58, 180, 0.5);
$red-glow: rgba(253, 29, 29, 0.3);
$orange-glow: rgba(252, 176, 69, 0.2);
$purple-glow-strong: rgba(131, 58, 180, 0.7);
$red-glow-strong: rgba(253, 29, 29, 0.5);
$orange-glow-strong: rgba(252, 176, 69, 0.3);

.element {
  background: $nebula-gradient;
  color: $text-color;
  padding: $padding;
  border: none;
  border-radius: $border-radius;
  font-size: $font-size;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 
    0 0 20px $purple-glow,
    0 0 40px $red-glow,
    0 0 60px $orange-glow;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 0 30px $purple-glow-strong,
      0 0 60px $red-glow-strong,
      0 0 90px $orange-glow-strong;
  }

  &:active {
    transform: scale(0.98);
  }
}`,
    tailwind: `<button class="
  bg-[radial-gradient(ellipse_at_center,_#833ab4_0%,_#fd1d1d_50%,_#fcb045_100%)]
  text-white
  py-4 px-8
  border-none
  rounded-[25px]
  text-lg font-bold
  cursor-pointer
  shadow-[0_0_20px_rgba(131,58,180,0.5),_0_0_40px_rgba(253,29,29,0.3),_0_0_60px_rgba(252,176,69,0.2)]
  transition-all duration-[400ms] ease-in-out
  relative
  overflow-hidden
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(131,58,180,0.7),_0_0_60px_rgba(253,29,29,0.5),_0_0_90px_rgba(252,176,69,0.3)]
  active:scale-[0.98]
">
  Hover Over Me!
</button>`,
  },
];
