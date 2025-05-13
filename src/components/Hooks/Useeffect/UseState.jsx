<<<<<<<<< Temporary merge branch 1
import React, { useState, useEffect } from "react";
=========
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
  },[count]);

  const buttonClick = () =>{
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h2>Count :</h2>
      <p>{count}</p>
      <button onClick={buttonClick}>+</button>
    </div>
  )
}

export default UseState;