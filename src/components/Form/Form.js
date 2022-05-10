import React, { useState } from 'react'
import './Form.css'

const Form = ({ addPrompt }) => {
  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      prompt: text,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }
    addPrompt(data)
  }

  return (
    <form>
      <p className='enter-prompt'>Enter prompt</p>
      <input
        type='text'
        className='prompt-input'
        value={text}
        onChange={event => handleTextChange(event)}
      />

      <button
        className='submit-button'
        onClick={event => handleSubmit(event)}>
          SUBMIT
      </button>
    </form>
  )
}

export default Form