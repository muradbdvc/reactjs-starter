import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-500 text-center font-semibold text-lg'>Hello</h1>
      <p>this is demo test.</p>
    </>
  )
}

export default App
