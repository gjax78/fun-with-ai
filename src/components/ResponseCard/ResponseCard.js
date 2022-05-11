import React from 'react'
import PropTypes from 'prop-types'
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

ResponseCard.propTypes = {
  response: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired
}