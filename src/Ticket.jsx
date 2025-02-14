import React from 'react'
import TicketNum from "./TicketNum"

const Ticket = ({ticket}) => {
  return (
    //map all items of ticket array
    ticket.map((item, index) => (
      <div key={index}>
        <TicketNum num={item}/>
      </div>
    ))
  )
}

export default Ticket