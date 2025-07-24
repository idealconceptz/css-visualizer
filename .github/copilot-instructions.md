# Copilot Instructions for CSS Visualiser

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js 15 application built with:
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Mantine UI** for React components and hooks
- **Turbopack** for fast development builds
- **App Router** for modern Next.js routing

## Project Purpose
The CSS Visualiser project aims to provide an interactive platform for visualizing and experimenting with CSS properties and layouts. It showcases various CSS techniques and allows users to see the effects of different styles in real-time. The application is designed to be educational and user-friendly, making it easy for developers and designers to explore CSS capabilities.
It should allow users to:
- Visualize CSS properties and their effects
- Experiment with different layouts and styles
- Learn about CSS best practices and techniques
- Switch between CSS, SCSS and Tailwind CSS for styling
Users should be able to easily navigate through different examples and see the results of their changes immediately.
Each component should be modular and reusable, allowing for easy updates and additions of new CSS examples.
Each page should be designed to showcase specific CSS features or techniques, with clear explanations and examples.
Users should be able to edit the CSS/Tailwind code directly in the browser and see the results in real-time.

## Technology Stack Guidelines

### Next.js App Router
- Use the `app` directory structure
- Prefer Server Components when possible
- Use Client Components (`'use client'`) only when necessary for interactivity
- Leverage Next.js 15 features like Turbopack and improved performance

### TypeScript
- Use strict TypeScript typing
- Define proper interfaces and types for props and data structures
- Leverage TypeScript's advanced features like generics when appropriate

### Styling
- **Primary**: Use Tailwind CSS for styling with utility classes
- **Secondary**: Use Mantine's built-in component styling system
- Combine both approaches thoughtfully - Tailwind for layout/spacing, Mantine for component theming
- Use Mantine's CSS variables and theme system for consistent design

### Mantine Integration
- Use Mantine components as building blocks
- Leverage Mantine hooks for common functionality (useDisclosure, useForm, etc.)
- Follow Mantine's theming conventions
- Use Mantine's ColorSchemeProvider for dark/light mode support

### Code Organization
- Keep components small and focused
- Use custom hooks for reusable logic
- Organize components in logical directories
- Prefer composition over inheritance

## Development Preferences
- Use modern React patterns (hooks, functional components)
- Implement proper error boundaries
- Use React.Suspense for loading states
- Follow accessibility best practices
- Write clean, readable code with proper comments for complex logic
