import React from 'react'
import './ResponseCard.css'

const ResponseCard = ({ response }) => {
  return (
    <div className='card'>
      <p className='response-title'>Response:</p>
      <p className='response'>{response}</p>
    </div>
  )
}

export default ResponseCard