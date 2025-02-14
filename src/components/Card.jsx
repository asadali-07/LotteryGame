import './Card.css'
import React from 'react'

const Card = ({title,description,newprice,oldprice}) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
       {description.map((item)=>{
         return <p key={item}>{item}</p>
       })}
        <p className='price'><s>{oldprice}</s> &nbsp; &nbsp;<b>{newprice}</b></p>
      </div>
    </>
  )
}

export default Card;