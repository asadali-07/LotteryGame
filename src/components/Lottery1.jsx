import React from "react";
import { useState } from "react";

const Lottery = () => {
  let [number, setNumber] = useState([0,0,0]);
  const [count,setCount]=useState(0)
  let win=number[0]+number[1]+number[2]===15
  const generateNumber = () => {
      setNumber([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
     setCount(count+1)
    };
  return (
    <>
    <h1>Lottery</h1>
      <h3>Lottery Ticket:</h3>
      <div className="numbers">
      <span>{number[0]}</span>
      <span>{number[1]}</span>
      <span>{number[2]}</span>
      </div>
      {win &&<h1>Lottery 'Congratulations,you won!'</h1>}
      <button onClick={generateNumber}>Buy New Ticket</button>
      <h3>Total Plays: {count}</h3>
    </>
  );
};

export default Lottery;
