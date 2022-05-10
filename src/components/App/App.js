import './App.css';
import React, { useState } from 'react'
import Form from '../Form/Form'
import Responses from '../Responses/Responses'
import fetchAPI from '../../util/apiCalls' 

const App = () => {
  const [responses, setResponses] = useState([])

  const addPrompt = (data) => {
    fetchAPI.postPrompt(data)
    .then(data => setResponses([...responses, data]))
  }

  return (
    <main className="App">
      <h1>Fun with AI</h1>
      <Form addPrompt={addPrompt}/>
      <Responses responses={responses}/>
    </main>
  )
}

export default App
