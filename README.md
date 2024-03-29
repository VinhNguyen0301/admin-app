# Admin-App

## Overview

Admin-App is a minimal setup that provides React working in Vite with HMR (Hot Module Replacement) and ESLint rules for maintaining code quality.

## Features

- React + TypeScript + Vite setup
- Integrated Tailwind CSS for styling
- Fast Refresh using [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) or [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
- ESLint configuration with type-aware lint rules

## Usage

Link production : https://admin-app-vinhnguyen-k22r-git-master-vinhnguyen0301s-projects.vercel.app/#

### Development

Docker Image : vinhnguyen0301docker/admin-app

```bash
docker pull vinhnguyen0301docker/admin-app
docker run -p 80:80 vinhnguyen0301docker/admin-app
```

To start the development server:

```bash
yarn install
yarn dev

```
