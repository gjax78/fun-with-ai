import './App.css';
import React, { useState } from 'react'
import Form from '../Form/Form'
import Responses from '../Responses/Responses'
import fetchAPI from '../../util/apiCalls' 

const App = () => {
  const [prompts, setPrompts] = useState([])

  const addPrompt = (data) => {
    fetchAPI.postPrompt(data)
    .then(data => setPrompts(data))
  }

  return (
    <main className="App">
      <h1>Fun with AI</h1>
      <Form addPrompt={addPrompt}/>
      <Responses />
    </main>
  )
}

export default App
