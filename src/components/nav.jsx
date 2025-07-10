import React from "react";

export default function Nav({
  onThemeChange,
  saveLocal,
  layOut,
  currentTheme,
  saveLabel
}) {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="src/assets/dev-icon.svg" alt="logo" />
      </div>
      <div className="btn-container">
        <button className="btn" title="save changes" onClick={saveLocal}>
          <img src="src/assets/cloud-solid.svg" alt="save btn" />
          {saveLabel}
        </button>
        <button
          className="btn"
          title="clear storage"
          onClick={clearLocalStorage}
        >
          <img src="src/assets/trash.svg" alt="delete btn" />
        </button>
        <button className="btn" title="change layout" onClick={layOut}>
          <img src="src/assets/layout-icon.svg" alt="layout btn" />
        </button>
        <button className="btn" title="change theme" onClick={onThemeChange}>
          Theme
        </button>
      </div>
    </div>
  );
}

// export default Nav
