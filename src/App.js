// import React, { useState, useEffect } from "react";
import "./App.css";
import React, { useState } from "react";
import LoginForm from "./components/UseState";
// import Card from "./components/Card";

// import Button from "./components/Button";

//import Title from "./components/Title";
//import ColorComponent from "./components/ColorComponent";
// import Card from "./components/Image";

// Problem 1 by Rishi Bhaiyaaaaa

/* function App() {
  return (
    <div>
      <Title></Title>
    </div>
  );
}
*/

// 2nd problem

/* const App = () => {
  return (
    <div>
      <h1>This is the parent component</h1>
      <ColorComponent color="blue">
        <p>This is the child component with a blue background.</p>
      </ColorComponent>
    </div>
  );
}; */

// 3rd problem

/* const App = () => {
  return (
    <div className="grid">
      <Card
        image="./random-img.png"
        title="Card 1"
        description="Description for Card 1"
      />
      <Card
        image="./random-img.png"
        title="Card 2"
        description="Description for Card 2"
      />
      <Card
        image="./random-img.png"
        title="Card 3"
        description="Description for Card 3"
      />
    </div>
  );
}; */

// 4th problem

/* const App = () => {
  return (
    <div>
      <Button size="small" color="primary" />
      <Button size="medium" color="secondary" />
      <Button size="large" color="primary" />
    </div>
  );
}; */

const App = () => {
  return (
    <div>
      <h1>Login Form Example</h1>
      <LoginForm />
    </div>
  );
};

// 2nd Problem

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

// FORM SUBMIT
/* const App = () => {
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
}; */

// API call using useState and useEffect

/* const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}; */
/* const App = () => {
  const [modal, setModal] = useState(false);
  const handlerFunction = () => {};

  return (
    <div className="container">
      <div>modal implementation</div>
      <button>open modal</button>
      <div className="modal">this is a modal</div>
    </div>
  );
}; */

export default App;
