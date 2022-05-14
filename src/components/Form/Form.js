import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import fetchAPI from '../../util/apiCalls' 

const Form = ({ setResponses, setIsLoading }) => {
  const [prompt, setPrompt] = useState([])
  const [error, setError] = useState('')

  const addPrompt = (prompt) => {
    setIsLoading(true)
    fetchAPI.postPrompt(prompt)
    .then(data => {
      setResponses(previousResponseCards => [{
        prompt: prompt, 
        response: data.choices[0].text, 
        key: Date.now()
      }, ...previousResponseCards])
    })
    .catch(error => setError(error))
    .finally(() => setIsLoading(false))
  }

  const validateTextArea = () => {
    if (!prompt.length) {
      setError('Please type a prompt in the text area above to get started.')
    } else {
      addPrompt(prompt)
      setError('')
    }
  }

  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    validateTextArea()
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
      {error && <p className='error'>{error}</p>}
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