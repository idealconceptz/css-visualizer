# CSS Visualiser

A modern CSS/SCSS/Tailwind visualization tool built with the latest web technologies.

Demo at <a href="https://css-visualizer-flame.vercel.app/" target="_blank">https://css-visualizer-flame.vercel.app/</a>

Select from a variety of styled buttons and view and edit their CSS, SCSS or Tailwind. This enables you to convert styling code between them, adjust various aspects of the buttons with sliders, and then copy and paste the relevant styling code.

## 🚀 Tech Stack

- **[Next.js 15](https://nextjs.org)** - React framework with App Router and Turbopack
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript development
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Mantine UI](https://mantine.dev)** - Modern React components library
- **[Turbopack](https://turbo.build)** - Ultra-fast development builds
- **ESLint** - Code quality and consistency

## ✨ Features

- ⚡ **Turbopack** for lightning-fast development builds
- 🎨 **Hybrid Styling** - Tailwind CSS + Mantine UI components
- 🔧 **TypeScript** for better development experience
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode Ready** - Built-in theme support
- 🧩 **Component-Based** - Modular and reusable architecture

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository (if applicable) or use this existing setup
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server with Turbopack:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The page auto-updates as you edit files - hot reloading is enabled by default.

### Building for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
  app/
    layout.tsx          # Root layout with Mantine provider
    page.tsx            # Home page showcasing the tech stack
    globals.css         # Global styles and Tailwind imports
  .github/
    copilot-instructions.md  # Copilot customization
```

## 🎨 Styling Approach

This project uses a hybrid approach combining:

- **Tailwind CSS** for utility-first styling, layout, and spacing
- **Mantine UI** for pre-built components and consistent theming
- **CSS Variables** for dynamic theming and customization

## 🛠 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🌟 Key Highlights

- **Turbopack Integration**: Faster development builds and hot reloading
- **Modern Next.js**: Using App Router for improved performance and developer experience
- **Type Safety**: Full TypeScript support throughout the application
- **Component Library**: Leveraging Mantine's comprehensive component ecosystem
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Mantine Documentation](https://mantine.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Turbopack Documentation](https://turbo.build/pack/docs)

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Alternatively, you can deploy to any platform that supports Node.js applications.

---

Built with ❤️ using modern web technologies
