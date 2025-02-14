import React from 'react'
import './Card.css'
import { useState } from 'react'

const LoduBoard = () => {
    const [moves, setMoves] = useState({
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0,
  
    })
    const move = (color) => {
        setMoves({...moves, [color]: moves[color] + 1 })
    }
  return (
    <>
    <p>blue moves:{moves.blue}</p>
    <button  onClick={()=>{move("blue")}} className='blue'>+1</button>
    <p>red moves:{moves.red}</p>
    <button onClick={()=>{move("red")}}  className='red'>+1</button>
    <p>yellow moves:{moves.yellow}</p>
    <button onClick={()=>{move("yellow")}}  className='yellow'>+1</button>
    <p>green moves: {moves.green}</p>
    <button onClick={()=>{move("green")}}  className='green'>+1</button>
    </>
  )
}

export default LoduBoard