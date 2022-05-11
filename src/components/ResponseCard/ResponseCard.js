import React from 'react'
import './ResponseCard.css'

const ResponseCard = ({ response, prompt }) => {
  return (
    <div className='card'>
      <div className='title-container'>
        <p className='prompt-title'>Prompt:</p>
        <p className='response-title'>Response:</p>
      </div>
      <div className='text-container'>
        <p className='prompt'>{prompt}</p>
        <p className='response'>{response}</p>
      </div>
    </div>
  )
}

export default ResponseCard