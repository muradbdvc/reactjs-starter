import React, { useState, useEffect } from "react";

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

export default UseState;
