import React from 'react'
import ResponseCard from '../ResponseCard/ResponseCard'

const Responses = ({ prompts }) => {
  const allPrompts = prompts.map(prompt => {
    return (
      <div className='response-container'>
        <ResponseCard
  
        />
      </div>
    )
  })

}

export default Responses 