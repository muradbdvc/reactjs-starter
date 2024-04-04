import React from 'react'
import './App.css'
// import Card from './components/Card'
// import Data from './data.json'
// import Maping from './components/Maping'
// import Products from './components/products/Products'
// import State from './components/State'
// import ConditionalRendering from './components/conditionalrendering/Index'
// import Handler from './components/EventHandler/Handler'
import Hooksusestatef from './components/Hooksusestate/hooksusestatef'
{/* <Card todoTitle={Data[x].todoTitle} todoDesc={Data[x].todoDesc} /> */}
//  items = Data.map((item) => <Card todoTitle={item.todoTitle} todoDesc={item.todoDesc} /> )

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='m-20 gap-y-6'>
      {/* <Handler /> */}
      <Hooksusestatef />
      {/* <Products /> */}
      {/* <Card todoTitle="hello" todoDesc="hi" /> */}
      {/* <Maping /> */}
      {/* <State /> */}
      {/* <ConditionalRendering /> */}
      
      {/* { Data.map((item, index) => <Card key="index" todoTitle={item.todoTitle} todoDesc={item.todoDesc} /> ) } */}
    </div>
  )
}

export default App
