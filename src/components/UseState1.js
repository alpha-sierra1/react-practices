import React, { useState } from "react";

/*
const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;

*/

// const Counter = () => {
//   const [count, setCount] = useState();
// };
function ToggleComponent() {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <button
      className={`toggle-button ${isOn ? "on" : "off"}`}
      onClick={toggleState}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
export default ToggleComponent;
