import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      <h2>Current Value of count is : {count}</h2>
      <button className="resetbtn" onClick={() => setCount(0)}>
        Reset Counter
      </button>
      <button className="incbtn" onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
      <button
        className="decbtn"
        onClick={() =>
          count <= 0
            ? alert("No Negative Number in counter")
            : setCount(count - 1)
        }
      >
        Decrease Counter
      </button>
    </div>
  );
}

export default App;
