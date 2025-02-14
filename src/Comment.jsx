import React from 'react'

const Comment = ({comments}) => {
  return (
    <div className='comment'><h2>Comments:</h2>
    <ul>
        {comments.map((comment, index) => (
            <li key={index}>
                <strong>{comment.username}:</strong> {comment.comment} - Rating: {comment.rating}
            </li>
        ))}
    </ul></div>
  )
}

export default Comment