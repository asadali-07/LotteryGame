import React from 'react'
import { useState,useEffect } from 'react'

const Joker = () => {
    const [jokes, setJokes] = useState({})
    let Url="https://official-joke-api.appspot.com/random_joke"

    // useEffect(() => {
    //     fetch(Url)
    //    .then(response => response.json())
    //    .then(data => setJokes(data))
    //    .catch(error => console.error('Error:', error))
    //    }, [])
    
    useEffect(() => {
        newJokes()
    }, []) // Empty dependency array means this effect will only run once when the component mounts
    
    //    const newJokes = () => {
    //     fetch(Url)
    //    .then(response => response.json())
    //    .then(data => setJokes(data))
    //    .catch(error => console.error('Error:', error))
    //    }

    const newJokes=async()=>{
        const response=await fetch(Url)
        const data=await response.json()
        setJokes(data)
    }
  return (
    <>
    <h1>Random Joke</h1>
    <div className='numbers'>
        <p>{jokes.setup}</p>
        <p>{jokes.punchline}</p>
        <button onClick={newJokes}>New Jokes</button>
    </div>
    </>
  )
}

export default Joker