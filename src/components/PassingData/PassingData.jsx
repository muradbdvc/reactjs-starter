import React from 'react'
import {useState} from 'react'
// const Todo = (props) => {
//   return
//   <div>
//     <h1>hello</h1>
//   </div>
// }
export default function PassingData(props) {
  const [message,setMessage] =useState("Hello World !!")
  const data ="i'm from child component";
  // const cData= (childData)=>{
  //   console.log(childData);
  // }
  function choosemessage(msg){
    setMessage(msg)
  }
  props.cData(data);

  return (
    <div>
      {props.data}
    </div>
  )
}
