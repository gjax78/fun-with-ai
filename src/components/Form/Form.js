import React from 'react'

const Form = ({ addPrompt }) => {
  return (
    <form>
      <input
        type='text'
        placeholder='Enter prompt here'
        className='prompt-input'
        value={}
        onChange={}
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