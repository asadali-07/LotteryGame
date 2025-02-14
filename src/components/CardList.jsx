import './Card.css'
import Card from './Card'
import React from 'react'

const CardList = () => {
  return (
    <>
    <div className="cards">
    <Card title="Logitec Mx Master" description={["8000 DPI","5 Programable Buttons"]} oldprice={12495 } newprice={8999}/>
    <Card title="Logitec Mx Master" description={["8000 DPI","5 Programable Buttons"]} oldprice={12495 } newprice={8999}/>
    <Card title="Logitec Mx Master" description={["8000 DPI","5 Programable Buttons"]} oldprice={12495 } newprice={8999}/>
    <Card title="Logitec Mx Master" description={["8000 DPI","5 Programable Buttons"]} oldprice={12495 } newprice={8999}/>
    </div>
    </>
  )
}

export default CardList