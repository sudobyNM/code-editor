# CodeFine - Real-time Web Code Editor

A modern, feature-rich web-based code editor built with React and Monaco Editor that provides real-time HTML, CSS, and JavaScript editing with live preview capabilities.

![CodeFine Editor](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![Vite](https://img.shields.io/badge/Vite-7.0.0-purple?style=for-the-badge&logo=vite)

## Features

### Core Functionality

- **Real-time Code Editing**: Write HTML, CSS, and JavaScript with instant live preview
- **Monaco Editor Integration**: Professional-grade code editor with syntax highlighting
- **Live Preview**: See your code changes reflected immediately in the output panel
- **Multi-language Support**: HTML, CSS, and JavaScript with proper syntax highlighting

### Customization & UX

- **Multiple Themes**: 5 custom themes including Dark, Light, Catppuccin, Solarized, and Solarized Dark
- **Responsive Layout**: Adaptive design that works seamlessly on desktop and mobile devices
- **Flexible Layout Options**: Toggle between horizontal and vertical editor layouts
- **Mobile-First Design**: Tabbed interface for mobile devices with touch-friendly controls

### Data Persistence

- **Local Storage**: Automatic saving of code and preferences using custom React hooks
- **Session Persistence**: Your code and settings are preserved across browser sessions
- **Manual Save**: One-click save functionality with visual feedback

### Developer Experience

- **Emmet Support**: Built-in Emmet abbreviations for faster HTML/CSS development
- **Code Formatting**: Automatic formatting on paste and type
- **Custom Scrollbars**: Styled scrollbars for better visual consistency
- **Editor Resizing**: Expandable editor panels for focused coding

## Technology Stack

### Frontend

- **React 19.1.0** - Modern React with latest features
- **Monaco Editor** - Professional code editor (same as VS Code)
- **Vite** - Fast build tool and development server
- **Emmet** - Code abbreviation support

### Development Tools

- **ESLint** - Code linting and quality assurance
- **Custom Hooks** - Reusable state management with localStorage
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox

## Responsive Design

The editor adapts to different screen sizes:

- **Desktop**: Multi-panel layout with side-by-side editors
- **Mobile**: Tabbed interface for optimal touch interaction
- **Flexible Layouts**: Toggle between horizontal and vertical arrangements

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/codefine.git
   cd codefine
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to localhost:3000 (or the port specified)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Theme Customization

The editor includes 5 custom themes:

- **My Dark Theme** - Modern dark interface
- **My Light Theme** - Clean light interface
- **Catppuccin** - Popular color scheme
- **Solarized Light** - Easy on the eyes
- **Solarized Dark** - Dark variant of Solarized

## Project Structure

```
src/
├── components/
│   ├── editor.jsx      # Monaco Editor wrapper
│   └── nav.jsx         # Navigation and controls
├── hooks/
│   └── uselocalStorage.js  # Custom localStorage hook
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## Customization

### Adding New Themes

Themes are defined in the `handleBeforeMount` function in `App.jsx`. Each theme includes:

- Color schemes for syntax highlighting
- Editor background and foreground colors
- Scrollbar styling
- Line number colors

### Extending Language Support

The editor uses Monaco Editor's built-in language support. Additional languages can be added by:

1. Importing language support from Monaco
2. Adding language options to the editor components
3. Updating the UI to include new language tabs

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

