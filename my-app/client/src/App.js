import React from "react";
import { useState } from "react";
import RandomNumber from "./RandomNumbers";

function App() {

  const [count, setCount] = useState([]);

  function addDiv() {
    setCount((current) => [...current, RandomNumber(0, 100)]);
  }
  function sortDiv() {
    setCount([...count].sort((a, b) => a - b));
  }

  const removeDiv = (index) => {
    setCount(count.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="instructions">
        <p className="instr">
          Press the "add card" button to add the new Card. Use the "sort cards"
          button to sort the Cards by the increase. Press an X icon on the top
          right to delete them
        </p>
      </div>
      <div className="header">
        <button onClick={addDiv} className="btn">Add Div</button>
        <button onClick={sortDiv} className="btn">Sort Div</button>
      </div>
      <div className="main">
        {count.map((element, index) => {
          return (
            <div key={index}>
              <div className="createDiv">
                <button onClick={() => removeDiv(index)} className="remove">
                  X
                </button>

                <h2>{element}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
