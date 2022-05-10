import React, { useState } from 'react'

const Form = ({ addPrompt }) => {
  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Enter prompt here'
        className='prompt-input'
        value={text}
        onChange={event => handleTextChange(event)}
      />

      <button
        className='submit-button'
        onClick={}>
          SUBMIT
      </button>
    </form>
  )
}

export default Form