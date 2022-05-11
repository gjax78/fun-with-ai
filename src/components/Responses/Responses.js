import React from 'react'
import ResponseCard from '../ResponseCard/ResponseCard'
import PropTypes from 'prop-types'
import './Responses.css'

const Responses = ({ responses, prompts }) => {
  const allResponses = responses.map((response, index) => {
    const prompt = prompts[index]
    return (
      <div className='response-container' key={response.id}>
        <ResponseCard
          response={response.choices[0].text}
          prompt={prompt.prompt}
        />
      </div>
    )
  })

  return (
    <div className='response-container'>
      <h2 className='responses-header'>Responses</h2>
      {allResponses}
    </div>
  )
}

export default Responses 

Responses.propTypes = {
  responses: PropTypes.array.isRequired,
  prompts: PropTypes.array.isRequired
}