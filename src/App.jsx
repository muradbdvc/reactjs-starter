import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Data from './data.json'

// let items = [];
{/* <Card todoTitle={Data[x].todoTitle} todoDesc={Data[x].todoDesc} /> */}
//  items = Data.map((item) => <Card todoTitle={item.todoTitle} todoDesc={item.todoDesc} /> )

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card todoTitle="hello" todoDesc="hi" /> */}
      { Data.map((item) => <Card todoTitle={item.todoTitle} todoDesc={item.todoDesc} /> ) }
    </>
  )
}

export default App
