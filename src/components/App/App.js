import './App.css';
import React from 'react'
import Form from '../Form/Form'
import Responses from '../Responses/Responses'
import fetchAPI from '../../util/apiCalls' 

const App = () => {
  return (
    <main className="App">
      <h1>Fun with AI</h1>
      <Form />
      <Responses />
    </main>
  )
}

export default App
