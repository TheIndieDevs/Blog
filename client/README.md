# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Project Structure
```
    /client:
    /public: Public assets that will be served as-is.
    /src:
    /components: React components.
    /containers: Higher-level components that manage state and interact with Redux (if used).
    /pages: Top-level components for different pages.
    /services: API communication services.
    /utils: General utility functions for the client.
    /styles: Stylesheets.
    /store: Redux-related files (actions, reducers, store).
    /index.js: Entry point for the React application.
    /App.js: Main component or container that ties everything together.
```
