import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import fetchAPI from '../../util/apiCalls' 

const Form = ({ setResponses, setIsLoading }) => {
  const [prompt, setPrompt] = useState([])
  const [engine, setEngine] = useState('')
  const [error, setError] = useState('')
  
  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }
  
  const handleDropdownChange = (event) => {
    setEngine(event.target.value)
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    validateTextArea()
  }

  const validateTextArea = () => {
    if (!engine) {
      setError('Please select an AI engine from the dropdown.')
    } else if (engine && !prompt.length){
      setError('Please type a prompt in to get started.')
    } else {
      addPrompt(prompt, engine)
      setError('')
    }
  }

  const addPrompt = (prompt) => {
    setIsLoading(true)
    fetchAPI.postPrompt(prompt, engine)
    .then(data => {
      setResponses(previousResponseCards => [{
        prompt: prompt, 
        response: data.choices[0].text, 
        key: Date.now()
      }, ...previousResponseCards])
    })
    .catch(error => setError(error))
    .finally(() => setIsLoading(false))
    clearTextArea()
  }

  const clearTextArea = () => {
    setPrompt('')
    setEngine('')
  }

  return (
    <form>
      <select className='choose-engine'
        value={engine}
        onChange={event => handleDropdownChange(event)}>
        <option value=''>Choose an AI Engine</option>
        <option value='text-davinci-002'>Davinci - MOST CAPABLE BOT</option>
        <option value='text-curie-001'>Curie - CAPABLE & FAST</option>
        <option value='text-babbage-001'>Babbage - STRAIGHT FORWARD & FAST</option>
        <option value='text-ada-001'>Ada - SIMPLE & FAST</option>
      </select>

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