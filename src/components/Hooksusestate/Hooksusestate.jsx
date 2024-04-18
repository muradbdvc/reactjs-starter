import React, { setCount } from 'react';

const Hooksusestate=()=> {
    const handleIncrement=()=>{
            setCount((count) => count + 1);
    }
   
    // const{count}=this.state;
    return (
            <div>
                {/* <h1>{count}</h1> */}
                <div>Count : {count}</div>
                <button type="button" onClick={handleIncrement} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increment</button>
            </div>
        );

}

export default Hooksusestate;