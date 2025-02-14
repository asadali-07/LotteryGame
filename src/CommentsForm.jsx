import React from 'react'
import { useState } from 'react'
import Comment from './Comment'

const CommentsForm = () => {
    const [form, setform] = useState({
        username: '',
        comment: '',
        rating: 5,
    })
    //handle the comment store in array
    const [comments, setComments] = useState([])
    const hadleChange = (e) => {
        setform({...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        if(form.username.length>3&&form.comment.length>20){
            setComments([...comments, form])
            setform({
                username: '',
                comment: '',
                rating: 5,
            })
        }else{
            alert('Username and Comment must be longer than 3 and 20 characters respectively')
        }
    }
  return (
    <>
    <form>
        <h1>Give me a Comment!</h1>
        {/* for username */}
        <div><label htmlFor="username">Username:</label>
        <input onChange={hadleChange} type="text" id="username" name="username" value={form.username} required /></div>
        {/* for comment */}
        <div><label htmlFor="comment">Comment:</label>
        <textarea onChange={hadleChange} id="comment" name="comment" rows="4" cols="50" value={form.comment} required></textarea></div>
        {/* for rating */}
        <div><label htmlFor="rating">Rating:</label>
        <input onChange={hadleChange} type="range" id="rating" name="rating" value={form.rating} min="1" max="5" step="1" required /></div>
        {/* for submit button */}
        <button onClick={handleSubmit} type="submit">Add Comment</button>
    </form>
    {/* for displaying comments */}
    <Comment comments={comments}/>
    </>
  )
}

export default CommentsForm