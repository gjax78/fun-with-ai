import React from 'react'
import ResponseCard from '../ResponseCard/ResponseCard'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'
import './Responses.css'

const Responses = ({ responses, isLoading }) => {
const allResponses = responses.map(response => {
    return (
      <div className='response-container' key={response.id}>
        <ResponseCard
          response={response.response}
          prompt={response.prompt}
        />
      </div>
    )
  })

  return isLoading ? (
    <ReactLoading type='bubbles' color='#ffffff' className='spinner'/> 
    ) :
    <div className='response-container'>
      <h2 className='responses-header'>Responses</h2>
      {!allResponses.length ? "Type in a prompt to see some responses from the AI." : allResponses}
    </div>
}

export default Responses 

Responses.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.object).isRequired, 
  isLoading: PropTypes.bool.isRequired
}