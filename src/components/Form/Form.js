import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import fetchAPI from '../../util/apiCalls' 

const Form = ({ setResponses, setIsLoading }) => {
  const [prompt, setPrompt] = useState('')
  const [engine, setEngine] = useState('')
  const [error, setError] = useState('')
  const [placeholder, setPlaceholder] = useState('')
  
  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }

  const randomizePlaceholder = () => {
    const placeholder = [
      'Try typing in: Translate this into Japanese: Hello, how are you?',
      'Try typing in: What is the circumference of planet Earth?', 
      'Try typing in: What is your favorite color?', 
      'Try typing in: Where is Little Rock located?', 
      'Try typing in: Who wrote the book Green Eggs and Ham?', 
      'Try typing in: How much of the human body is made of water?', 
      'Try typing in: Tell me a random fact.',
      'Try typing in: Who won the grammy for Best New Artist in 2022?'
    ]
    setPlaceholder(placeholder[Math.floor(Math.random() * placeholder.length)])
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
      <select className='choose-engine'
        aria-label='choose AI engine'
        value={engine}
        onChange={event => handleDropdownChange(event)}>
        <option value='' disabled>Choose an AI Engine</option>
        <option value='text-davinci-002'>Davinci - MOST CAPABLE BOT</option>
        <option value='text-curie-001'>Curie - CAPABLE & FAST</option>
        <option value='text-babbage-001'>Babbage - STRAIGHT FORWARD & FAST</option>
        <option value='text-ada-001'>Ada - SIMPLE & FAST</option>
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