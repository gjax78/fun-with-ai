import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import fetchAPI from '../../util/apiCalls' 

const Form = ({ setResponses }) => {
  const [prompt, setPrompt] = useState([])

  const addPrompt = (prompt) => {
    fetchAPI.postPrompt(prompt)
    .then(data => {
      setPrompt(previousResponseCards => [{
        prompt: prompt, 
        response: data.choices[0].text, 
        key: Date.now()
      }, ...previousResponseCards])
    })
  }


  const handleTextChange = (event) => {
    setPrompt(event.target.value)
  }

  const clearTextArea = () => {
    setPrompt('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addPrompt(prompt)
    clearTextArea()
  }

  return (
    <form>
      <p className='enter-prompt'>Enter prompt</p>
      <textarea
        type='text'
        className='prompt-input'
        value={prompt}
        onChange={event => handleTextChange(event)}
      />

      <button
        className='submit-button'
        onClick={event => handleSubmit(event)}>
          Submit
      </button>
    </form>
  )
}

export default Form

Form.propTypes = {
  addPrompt: PropTypes.func
}