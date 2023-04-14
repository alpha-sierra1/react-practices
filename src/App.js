import React, { useState } from "react";
import "./App.css";

/* const App = () => {
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
        {isDarkMode ? "Light Theme" : "Dark Theme"}
      </button>
    </div>
  );
}; */

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
