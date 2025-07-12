import React from "react";
import { useState } from "react";

import { Editor } from "@monaco-editor/react";

function CodeEditor({ language, value, onChange, theme, beforeMount, layOut }) {
  const [screenSize, setScreenSize] = useState("close");

  const handleresize = () => {
    setScreenSize((prevSize) => (prevSize === "close" ? "open" : "close"));
  };

  const editorStyle =
    layOut === "horizontal"
      ? {
          minWidth: screenSize === "open" ? "80vw" : "0px",
          transition: "all 0.3s",
          background: "#23272f",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          flex: 1,
          overflow: "hidden",
        }
      : {
          height: screenSize === "open" ? "80vh" : "20vh",
          transition: "height 0.3s",
          background: "#23272f",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          flex: "auto",
          overflow: "hidden",
        };

  return (
    <div className="edit-container" style={editorStyle}>
      <div className="edit-header">
        <span className="edit-title">{language}</span>
        <button onClick={handleresize} title="expand editor">
          <img src="/assets/resize.png" alt="resize btn" />
        </button>
      </div>

      <Editor
        className="code-editor"
        min-height="0"
        height="100%"
        beforeMount={beforeMount}
        language={language}
        value={value}
        onChange={onChange}
        theme={theme}
        loading={<div className="loading">Building...</div>}
        options={{
          fontFamily: "Fira Mono, Menlo, Monaco, 'Courier New', monospace",
          minimap: { enabled: false },
          lineNumbers: "on",
          wordWrap: "on",
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          tabSize: 2,
          padding: {
            top: 10,
            bottom: 10,
            left: 0,
          },

          scrollbar: {
            verticalScrollbarSize: 9,
          },
          fixedOverflowWidgets: true,
          glyphMargin: false,
          matchBrackets: "never",
          lineNumbersMinChars: 3,
          renderLineHighlight: "none",
          lineDecorationsWidth: 0,
          cursorSmoothCaretAnimation: true,
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </div>
  );
}

export default CodeEditor;
