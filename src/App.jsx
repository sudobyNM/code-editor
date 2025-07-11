import { useState, useEffect } from "react";
import CodeEditor from "./components/editor";
import Nav from "./components/nav";
import uselocalStorage from "./hooks/uselocalStorage";

import { emmetHTML } from "emmet-monaco-es";
import { emmetCSS } from "emmet-monaco-es";
import { emmetJSX } from "emmet-monaco-es";

const themeList = [
  "my-dark-theme",
  "my-light-theme",
  "catppuccin",
  "my-solarized-theme",
  "my-solarized-dark-theme",
];

function handleBeforeMount(monaco) {
  emmetHTML(monaco);

  emmetCSS(monaco);
  emmetJSX(monaco);

  monaco.editor.defineTheme("my-dark-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "scrollbarSlider.background": "#858585",
      "scrollbarSlider.hoverBackground": "#858585",
      "scrollbarSlider.activeBackground": "#858585",
      "editorScrollbar.background": "#858585",
      "editorScrollbar.shadow": "none",
      "editorLineNumber.foreground": "#565656",
      "editor.background": "#1e2129",
    },
  });

  monaco.editor.defineTheme("my-light-theme", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "999988", fontStyle: "italic" },
      { token: "keyword", foreground: "e07828" },
      { token: "string", foreground: "22863a" },
      { token: "number", foreground: "b58900" },
      { token: "type", foreground: "268bd2" },
    ],
    colors: {
      "editor.background": "#f5f5f5",
      "scrollbarSlider.background": "#525254",
      "scrollbarSlider.hoverBackground": "#525254",
      "scrollbarSlider.activeBackground": "#525254",
      "editorScrollbar.shadow": "none",
      "editorLineNumber.foreground": "#b0b0b0",
      "editorLineNumber.activeForeground": "#e07828",
      "editorCursor.foreground": "#e07828",
      "editorIndentGuide.background": "#e0e0e0",
      "editorIndentGuide.activeBackground": "#e07828",
    },
  });

  monaco.editor.defineTheme("catppuccin", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e6a86", fontStyle: "italic" },
      { token: "keyword", foreground: "f5c2e7" },
      { token: "string", foreground: "a6e3a1" },
      { token: "number", foreground: "fab387" },
      { token: "type", foreground: "89dceb" },
      { token: "function", foreground: "b4befe" },
      { token: "variable", foreground: "f9e2af" },
      { token: "identifier", foreground: "cdd6f4" },
    ],
    colors: {
      "editor.background": "#1e1e2e",
      "editor.foreground": "#cdd6f4",
      "editorLineNumber.foreground": "#6e6a86",
      "editorLineNumber.activeForeground": "#f5c2e7",
      "editorCursor.foreground": "#f5c2e7",
      "editorIndentGuide.background": "#313244",
      "editorIndentGuide.activeBackground": "#f5c2e7",
      "editor.selectionBackground": "#585b70",
      "editor.lineHighlightBackground": "#313244",
      "scrollbarSlider.background": "#6e6a86aa",
      "scrollbarSlider.hoverBackground": "#f5c2e7cc",
      "scrollbarSlider.activeBackground": "#f5c2e7ff",
      "editorWidget.background": "#1e1e2e",
      "editorWidget.border": "#f5c2e7",
      "editorSuggestWidget.background": "#1e1e2e",
      "editorSuggestWidget.border": "#f5c2e7",
      "editorSuggestWidget.foreground": "#cdd6f4",
      "editorSuggestWidget.selectedBackground": "#313244",
    },
  });

  monaco.editor.defineTheme("my-solarized-theme", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "93a1a1", fontStyle: "italic" },
      { token: "keyword", foreground: "859900" },
      { token: "string", foreground: "2aa198" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "6c71c4" },
    ],
    colors: {
      "editor.background": "#fdf6e3",
      "editor.foreground": "#657b83",
      "editorLineNumber.foreground": "#93a1a1",
      "editorLineNumber.activeForeground": "#268bd2",
      "editorCursor.foreground": "#d33682",
      "editorIndentGuide.background": "#eee8d5",
      "editorIndentGuide.activeBackground": "#93a1a1",
      "scrollbarSlider.background": "#68a0b3",
      "scrollbarSlider.hoverBackground": "#68a0b3",
      "scrollbarSlider.activeBackground": "#68a0b3",
      "editor.selectionBackground": "#eee8d5",
      "editor.lineHighlightBackground": "#eee8d5",
    },
  });

  monaco.editor.defineTheme("my-solarized-dark-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75", fontStyle: "italic" },
      { token: "keyword", foreground: "b58900" },
      { token: "string", foreground: "2aa198" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "cb4b16" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "6c71c4" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editorLineNumber.activeForeground": "#b58900",
      "editorCursor.foreground": "#d33682",
      "editorIndentGuide.background": "#073642",
      "editorIndentGuide.activeBackground": "#586e75",
      "scrollbarSlider.background": "#5a90a1",
      "scrollbarSlider.hoverBackground": "#5a90a1",
      "scrollbarSlider.activeBackground": "#5a90a1",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
    },
  });
}

function App() {
  const [themeIndex, setCurrentTheme, saveTheme] = uselocalStorage(
    "themeIndex",
    0
  );

  const handleThemes = () => {
    setCurrentTheme((prevTheme) => (prevTheme + 1) % themeList.length);
  };
  let currentTheme = themeList[themeIndex];

  // const [html, setHTML] = useState("");
  const [html, setHTML, saveHTML] = uselocalStorage("html", "");
  // const [css, setCSS] = useState("");
  const [css, setCSS, saveCSS] = uselocalStorage("css", "");
  // const [js, setJS] = useState("");
  const [js, setJS, saveJS] = uselocalStorage("js", "");

  const [saveLabel, setSaveLabel] = useState("Save");
  function saveLocalHandler() {
    saveHTML();
    saveCSS();
    saveJS();
    saveTheme();
    setSaveLabel("Saved!");
    setTimeout(() => {
      setSaveLabel("Save");
    }, 1500);
  }

  const [layOut, setLayOut] = useState("horizontal");
  const changeLayout = () => {
    setLayOut((prevLayout) =>
      prevLayout === "horizontal" ? "vertical" : "horizontal"
    );
  };

  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
                <body>${html}</body>
                <style>${css}</style>
            
                <script>${js}<\/script>
              </html>`);
    }, 500);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <Nav
        onThemeChange={handleThemes}
        currentTheme={currentTheme}
        saveLocal={saveLocalHandler}
        layOut={changeLayout}
        saveLabel={saveLabel}
      />

      {layOut === "horizontal" ? (
        <div className="grid-panel">
          <div className="top-grid">
            <CodeEditor
              language="html"
              value={html}
              onChange={setHTML}
              theme={currentTheme}
              beforeMount={handleBeforeMount}
              layOut={layOut}
            />

            <CodeEditor
              language="css"
              value={css}
              onChange={setCSS}
              theme={currentTheme}
              beforeMount={handleBeforeMount}
              layOut={layOut}
            />

            <CodeEditor
              language="javascript"
              value={js}
              onChange={setJS}
              theme={currentTheme}
              beforeMount={handleBeforeMount}
              layOut={layOut}
            />
          </div>

          <div className="code-output-container">
            <iframe
              className="code-output"
              srcDoc={srcDoc}
              width="100%"
              height="100%"
              title="output"
              sandbox="allow-scripts allow-modals"
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="top-flex">
          <div className="editors-column">
            <CodeEditor
              className="edit-comp"
              language="html"
              value={html}
              onChange={setHTML}
              theme={currentTheme}
              beforeMount={handleBeforeMount}
              layOut={layOut}
            />

            <CodeEditor
              language="css"
              value={css}
              onChange={setCSS}
              theme={currentTheme}
              beforeMount={handleBeforeMount}
              layOut={layOut}
            />

            <CodeEditor
              language="javascript"
              value={js}
              onChange={setJS}
              theme={currentTheme}
              beforeMount={handleBeforeMount}
              layOut={layOut}
            />
          </div>

          <div className="code-output-container">
            <iframe
              className="code-output"
              srcDoc={srcDoc}
              width="100%"
              height="100%"
              outline="none"
              title="output"
              sandbox="allow-scripts allow-modals"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
