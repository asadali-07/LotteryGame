import React from 'react'
import { useState } from 'react'
import './Card.css'
const LikeButton = () => {
    const [isLiked, setIsLiked] = useState(false)
    const [count, setCount] = useState(0)
    const toggleLike = () => {
        setIsLiked(!isLiked)
        setCount(!isLiked? count + 1 : count - 1)
    }
  return (
    <div className='likebutton' ><i onClick={toggleLike} className={isLiked?"fa-solid fa-heart like":"fa-regular fa-heart like"}></i> <span className='like'>{count}</span></div>
  )
}

export default LikeButton