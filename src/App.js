import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={isDarkMode ? "dark" : ""}
      style={{
        backgroundColor: isDarkMode ? "var(--background-color)" : "",
        color: isDarkMode ? "var(--text-color)" : "",
      }}
    >
      <h1>Hello World</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
};

export default App;
