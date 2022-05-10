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
      <h1>Responses</h1>
      {allResponses}
    </div>
  )
}

export default Responses 