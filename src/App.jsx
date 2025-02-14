// import CardList from './components/CardList'
// import Lottery from './components/Lottery1'
import './App.css'

// import CommentsForm from './CommentsForm'
// import LikeButton from './components/LikeButton'
// import LoduBoard from './components/LoduBoard'
// import Lottery from './Lottery'
// import { sum } from './helper'
import Joker from './Joker'


function App() {

const winCondition=(ticket)=>{
  return sum(ticket)===15
}

  return (
    <>
     {/*<h1>Blockbuster Deals on Computer Accessories|Shop Now</h1>
      <div className='container'><CardList/></div> */}
      {/* <Lottery/> */}
      {/* <LikeButton/> */}
      {/* <LoduBoard/> */}
       {/* <Lottery n={3} winCondition={winCondition}/> */}
       {/* <CommentsForm/> */}
       <Joker/>
       
    </>
  )
}

export default App
