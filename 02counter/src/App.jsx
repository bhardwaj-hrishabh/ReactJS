import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    console.log("Clicked", counter);
    counter = counter + 1
    setCounter(counter)
  }

  const subValue = () => {
    console.log("Clicked", counter);
    counter = counter - 1
    if(counter < 0){
      counter = 0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>React || Hrishabh</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={subValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
