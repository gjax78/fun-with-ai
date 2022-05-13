import './App.css';
import React, { useState } from 'react'
import Form from '../Form/Form'
import Responses from '../Responses/Responses'

const App = () => {
  const [responses, setResponses] = useState([])

  return (
    <main className="App">
      <h1 className='header'>Fun with AI</h1>
      <Form setResponses={setResponses}/>
      <Responses responses={responses}/>
    </main>
  )
}

export default App
