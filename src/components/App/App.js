import './App.css';
import React, { useState } from 'react'
import Form from '../Form/Form'
import Responses from '../Responses/Responses'

const App = () => {
  const [responses, setResponses] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <main className="App">
      <h1 className='header'>Fun with AI</h1>
      <Form setResponses={setResponses} setIsLoading={setIsLoading}/>
      <Responses responses={responses} isLoading={isLoading}/>
    </main>
  )
}

export default App
