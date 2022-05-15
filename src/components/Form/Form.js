import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import fetchAPI from '../../util/apiCalls' 
import data from '../../util/questions' 
import robot from './assets/robot.png'

const Form = ({ setResponses, setIsLoading }) => {
  const [prompt, setPrompt] = useState('')
  const [engine, setEngine] = useState('')
  const [error, setError] = useState('')
  const [placeholder, setPlaceholder] = useState('')

  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }
  
  const randomizePlaceholder = () => {
    setPlaceholder(data.questions[Math.floor(Math.random() * data.questions.length)])
  }
  
  const handleDropdownChange = (event) => {
    setEngine(event.target.value)
    randomizePlaceholder()
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    validateForm()
  }

  const validateForm = () => {
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
    clearForm()
  }

  const clearForm = () => {
    setPrompt('')
    setEngine('')
    setPlaceholder('')
  }

  return (
    <form>
      <img src={robot} className='robot' alt='robot'/>
      <select className='choose-engine'
        aria-label='choose AI engine'
        value={engine}
        onChange={event => handleDropdownChange(event)}>
        <option value='' disabled>Choose an AI Engine</option>
        <option value='text-davinci-002'>Davinci - Most capable</option>
        <option value='text-curie-001'>Curie - Less capable, but fast</option>
        <option value='text-babbage-001'>Babbage - Straightforward and fast</option>
        <option value='text-ada-001'>Ada - Simple and fast</option>
      </select>

      <label className='enter-prompt'>Enter prompt</label>
      <textarea
        aria-label='enter a prompt'
        type='text'
        className='prompt-input'
        value={prompt}
        placeholder={placeholder}
        onChange={event => handlePromptChange(event)}
      />
      {error && <p className='error'>{error}</p>}
      <button
        className='submit-button'
        aria-label='submit prompt for AI to return response'
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