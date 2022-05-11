import React from 'react'
import ResponseCard from '../ResponseCard/ResponseCard'
import './Responses.css'

const Responses = ({ responses }) => {
  const allResponses = responses.map(response => {
    return (
      <div className='response-container' key={response.id}>
        <ResponseCard
          response={response.choices[0].text}
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