import React from 'react'

// const Todo = (props) => {
//   return
//   <div>
//     <h1>hello</h1>
//   </div>
// }
export default function PassingData(props) {
  const data ="i'm from child component";
  // const cData= (childData)=>{
  //   console.log(childData);
  // }
  props.cData(data);

  return (
    <div>
      {props.data}
    </div>
  )
}
