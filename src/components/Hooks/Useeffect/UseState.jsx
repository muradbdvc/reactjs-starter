<<<<<<< HEAD
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

=======
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from "react";
>>>>>>> 9dca63cd5a93b04132b77963c0e0b1596bcdd01b

const UseState = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count : {count}</h2>
      <p></p>
      <button onClick={handleClick}> +</button>
    </div>
  );
};

<<<<<<< HEAD
>>>>>>> 8601138f4c5b4f7b9a2aed271d45be428611d30b
export default UseState
=======
export default UseState;
>>>>>>> 9dca63cd5a93b04132b77963c0e0b1596bcdd01b
