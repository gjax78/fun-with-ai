import React from 'react'
import ResponseCard from '../ResponseCard/ResponseCard'
import PropTypes from 'prop-types'
import './Responses.css'

const Responses = ({ responses }) => {
const allResponses = responses.map(response => {
    return (
      <div className='response-container' key={response.key}>
        <ResponseCard
          response={response.response}
          prompt={response.prompt}
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
  responses: PropTypes.arrayOf(PropTypes.object).isRequired
}