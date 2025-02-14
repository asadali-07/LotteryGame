import React from 'react'
import { useState } from 'react'
import Ticket from './Ticket'
import { generateTicket,sum } from './helper'
import Button from './Button'


const Lottery = ({n=3,winCondition}) => {
const [ticket, setTicket] = useState(generateTicket(n))
 //add all element and = to winningsum
 const win = winCondition(ticket)
  const buyTicket = () => {
    setTicket(generateTicket(n));
  }
  return (
    <>
    <h1>Lottery</h1>
    <div className="numbers">
    <Ticket ticket={ticket}/>
    </div>
    <Button buyTicket={buyTicket}/>
    {win && <h3>Congratulations! You won!</h3>}
    </>
  )
}

export default Lottery