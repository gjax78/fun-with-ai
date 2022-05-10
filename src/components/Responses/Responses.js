import React from 'react'
import ResponseCard from '../ResponseCard/ResponseCard'

const Responses = ({ prompts }) => {
  const allPrompts = prompts.map(prompt => {
    return (
      <div className='response-container' key={prompt.id}>
        <ResponseCard
          prompt={prompt.prompt}
          response={prompt.choices[0].text}
        />
      </div>
    )
  })

  return (
    <div className='response-container'>
      {allPrompts}
    </div>
  )
}

export default Responses 