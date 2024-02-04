import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const addValue = () => {
    `setCount(counter + 1) this is the other way to define
    but we generally prefer the setCount(prevCounter => prevCounter +1) ** functional update pattern.
    that state updates are based on the previous state, which can be important in 
    scenarios where multiple state updates may be batched or happen asynchronously.`
    setCount(prevCounter => prevCounter + 1)
 
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <div className="container w-1/2 mx-auto mt-18">
   
      <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2x1 font bold">Counter App</h1>
      <h2 className = "text-lg mb-4 mt-5">Count value: <span className='bg-yellow-200 p-2 rounded'>{count}</span></h2>
      <button
       className="bg-blue-500 m-2.5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      onClick={addValue}
      >Add value (+1)</button> 
      <br />
      <button
       className="bg-red-500 m-2.5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={removeValue}
      >remove value (-1)</button>
      <p>footer: {count}</p>
    </div>
    </div>
  )
}

export default App
