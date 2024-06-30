import React, { useState, useEffect } from 'react';

const UseState = () => {
  const [count, setCount] = UseState(0);

  useEffect(()=>{
  },[count]);

  const buttonClick = () =>{
    setCount((count)=>count+1);
  };

  return (
    <div>
      <H2>Count :{count}</H2>
      <P>{count}</P>
      <button onClick={buttonClick}>+</button>
    </div>
  )
}

export default UseState