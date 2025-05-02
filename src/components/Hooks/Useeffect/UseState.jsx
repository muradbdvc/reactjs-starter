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

const UseState = () => {




  return (
    <div>
      <h2>Count : </h2>
      <p></p>
      <button> +</button>
    </div>
  )
}

>>>>>>> 8601138f4c5b4f7b9a2aed271d45be428611d30b
export default UseState