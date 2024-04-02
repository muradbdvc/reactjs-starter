import React from 'react'
import './App.css'
// import Card from './components/Card'
// import Data from './data.json'
// import Maping from './components/Maping'
import Products from './components/products/Products'


// let items = [];
{/* <Card todoTitle={Data[x].todoTitle} todoDesc={Data[x].todoDesc} /> */}
//  items = Data.map((item) => <Card todoTitle={item.todoTitle} todoDesc={item.todoDesc} /> )

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Products />
      {/* <Card todoTitle="hello" todoDesc="hi" /> */}
      {/* <Maping /> */}
      {/* { Data.map((item, index) => <Card key="index" todoTitle={item.todoTitle} todoDesc={item.todoDesc} /> ) } */}
    </>
  )
}

export default App
