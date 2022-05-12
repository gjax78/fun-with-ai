import './App.css';
import React, { useState } from 'react'
import Form from '../Form/Form'
import Responses from '../Responses/Responses'
import fetchAPI from '../../util/apiCalls' 

const App = () => {
  const [responses, setResponses] = useState([])
  const [prompts, setPrompts] = useState([])

  const addPrompt = async (data, prompt) => {
    const result = await fetchAPI.postPrompt(data)
    setResponses([...responses, result])
    
    
    prompt.time = Date.now()
    setPrompts([...prompts, prompt])
  }

  return (
    <main className="App">
      <h1 className='header'>Fun with AI</h1>
      <Form addPrompt={addPrompt}/>
      <Responses responses={responses} prompts={prompts}/>
    </main>
  )
}

export default App
