import React from "react";
import { useState, useEffect } from "react";
import RandomNumber from "./RandomNumbers";
import Axios from "axios"
import axios from "axios";
// import axios from "axios";

function App() {

  const [count, setCount] = useState([]);
  const [data, setData] = useState('')
  // function addDiv() {
  //   setCount((current) => [...current, RandomNumber(0, 100)]);
  // }
  function sortDiv() {
    setCount([...count].sort((a, b) => a - b));
  }

  const removeDiv = (index) => {
    setCount(count.filter((_, i) => i !== index));
  };

  function addDiv() {
    const random = RandomNumber(0, 100)
    console.log(random);
    setCount((current) => [...current, random]);
    Axios.post("http://localhost:3001/add", null, {
      params: {
        random
      }
    })
      .then((res) => res.status)

  }

  // function add() {

  // useEffect(() => {
  //   Axios.post("http://localhost:3001/add")
  //     .then(res => {
  //       console.log(res.data)
  //       setData(res.data)
  //     }).catch((err) => console.log(err))
  // })
  // }
  // function adnd() {

  //   const response = Axios.get("http://localhost:3001/add")
  //   setData(response.data)
  //   addDiv()
  // }

  function add() {

  }

  // async function add() {

  // await addDiv()
  // }

  // useEffect(() => {
  //   add()
  // }, []);

  return (
    <div className="App">
      {/* {data} */}
      <div className="instructions">
        <p className="instr">
          Press the "add card" button to add the new Card. Use the "sort cards"
          button to sort the Cards by the increase. Press an X icon on the top
          right to delete them
        </p>
      </div>
      <div className="header">
        {/* <button onClick={add} className="btn">Add axios</button> */}
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
