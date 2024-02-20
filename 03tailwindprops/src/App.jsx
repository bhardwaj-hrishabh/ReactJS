import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: "Hrishabh",
    age: 23
  }

  let newArr= [1,2,3,4,5] 

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="Hrishabh" btnText= "Click me"/>
      <Card userName = {newArr} />
    </>
  )
}

export default App
