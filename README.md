# Todo List PWA

A simple and functional todo list Progressive Web App (PWA) built with React, TypeScript, and Vite. This app allows users to manage their tasks with features like task creation, updating, deletion, prioritization, and archiving. The app is optimized to work offline and can be installed on devices for a native-like experience.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [TypeScript Standards](#typescript-standards)
- [Maintaining the Project](#maintaining-the-project)
- [Deployment](#deployment)
- [License](#license)

## Features

- Add, update, delete, and archive tasks
- Set task priority and drag to reorder
- Task completion time tracking
- Installable PWA with offline support
- Multi-select tasks for batch operations

## Project Structure

```plaintext
.
├── public/               # Public assets
│   ├── icon-192x192.png  # PWA icons
│   ├── icon-512x512.png  # PWA icons
│   └── manifest.webmanifest # PWA manifest file
├── src/                  # Source code
│   ├── components/       # React components
│   ├── store/            # Redux store setup
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # App entry point
│   └── ...               # Other source files
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

Clone the repository:

```
git clone git@github.com:web01jay/todo-app.git
cd todo-app
```

Install dependencies:

```
npm install
```

## Running the Project

To start the development server:

```
npm run dev
```

This will open the app in your default browser at `http://localhost:3000`.

### Building for Production

To build the project for production:

```
npm run build
```

The production files will be in the `dist/` directory.


## TypeScript Standards

This project follows certain TypeScript standards to ensure code quality and consistency:

  - Strict Mode: The `strict` option is enabled in `tsconfig.json`, which enforces strict type checking.

  - Type Annotations: Always provide type annotations for function arguments, return types, and variables where necessary.

  - No Implicit Any: Avoid using the `any` type unless absolutely necessary.

  - Consistent Naming: Use `PascalCase` for component names and `camelCase` for variables and functions.

  - Avoid Using `any`: Use specific types or generics instead of `any` for better type safety.


## Maintaining the Project

To maintain this project, follow these practices:

  - Code Formatting: Use a code formatter like Prettier to maintain consistent code style across the project.

  - Linting: Use ESLint to catch common coding issues and enforce coding standards.

  - Component Reusability: Break down complex components into smaller, reusable components.

  - Testing: Write unit tests for components and functions to ensure they work as expected.

  - Documentation: Keep the documentation updated with any new features or changes.


## Common Commands

  - Start Development Server: `npm run dev`

  - Build for Production: `npm run build`

  - Deploy to GitHub Pages: `npm run deploy`

  - Run Linter: `npm run lint`

  - Run Tests: `npm run test`


## Deployment

To deploy this project on GitHub Pages:

  - Update `vite.config.ts` for GitHub Pages:

    Update the base option in `vite.config.ts`:

    ```
    export default defineConfig({
      base: '/todo-app/',
      plugins: [react(), VitePWA(/* PWA configuration */)],
    });
    ```

  - Build the Project:
    ```
    npm run build
    ```

  - Deploy to GitHub Pages:
    
    Install gh-pages if you haven't:
    
    ```
    npm install gh-pages --save-dev
    ```

    Add the following scripts to `package.json`:
    ```
    "scripts": {
      "build": "vite build",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

    Deploy the project:
    ```
    npm run deploy
    ```

  - Enable GitHub Pages:

    Go to your repository's settings on GitHub, find the "Pages" section, and set the source to the `gh-pages` branch.

    Your app will be live at `https://web01jay.github.io/todo-app/`.

