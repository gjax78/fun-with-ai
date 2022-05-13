import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import fetchAPI from '../../util/apiCalls' 

const Form = ({ setResponses }) => {
  const [prompt, setPrompt] = useState([])

  const addPrompt = (prompt) => {
    fetchAPI.postPrompt(prompt)
    .then(data => {
      setResponses(previousResponseCards => [{
        prompt: prompt, 
        response: data.choices[0].text, 
        key: Date.now()
      }, ...previousResponseCards])
    })
  }

  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addPrompt(prompt)
    clearTextArea()
  }

  const clearTextArea = () => {
    setPrompt('')
  }

  return (
    <form>
      <p className='enter-prompt'>Enter prompt</p>
      <textarea
        type='text'
        className='prompt-input'
        value={prompt}
        onChange={event => handlePromptChange(event)}
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