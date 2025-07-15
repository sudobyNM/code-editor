# Codefine – Advanced Online Code Editor
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-19.x-blue)
![Vite](https://img.shields.io/badge/Vite-7.x-purple)
A modern, responsive, and extensible online code editor inspired by CodePen. Built with React and Monaco Editor, featuring real-time preview, custom themes, Emmet support, and local persistence. Designed for productivity, learning, and rapid prototyping.

# Features
- Monaco Editor with Emmet support for HTML, CSS, and JS
- Live Preview: Instantly see your code output
- Custom Themes: Switch between dark, light, Solarized, and Catppuccin themes
- Responsive Layouts: Toggle between horizontal and vertical layouts; mobile-friendly tabbed interface
- Expand/Collapse Editors for focused coding
- LocalStorage Persistence
- One-click Save & Clear: Save your work or clear all data with a button
- Modern UI: Clean, accessible, and easy to use

# Project Structure
```
code editor/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── editor.jsx
  │   │   └── nav.jsx
  │   ├── hooks/
  │   │   └── uselocalStorage.js
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  ├── index.html
  ├── package.json
  └── README.md
```

# 📦 Built With
- React
- Monaco Editor Library
- Emmet
- Vite
- FontAwesome