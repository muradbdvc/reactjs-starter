import React, { useState } from 'react';

export default function Handler(){
    const InitialCount =0;
    const [count, setCount] = useState(InitialCount);

    const Increment=()=>{
        setCount((count) => count + 1);
    }
    const Decrement=()=>{
        setCount((count) => count - 1);
    }
    const Reset=()=>{
        setCount(InitialCount);
    }

    return(
        <>
        <h3>{count}</h3>
        <button type="button" onClick={Increment} disabled={count===10 ? true : false} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increment</button>
        <button type="button" onClick={Decrement} disabled={count===-10 ? true : false} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Decrement</button>
        <button type="button" onClick={Reset} disabled={count===10 ? true : false} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</button>
        </>
)    
}


// class Handler extends Component {
    
//     handleClick=()=>{
//         console.log('clicked');
//     }

//     handleOnChange=(e)=>{
//         console.log(e.target.value);
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text"  />
//                 <button type="button" onClick={Increment} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increment</button>
//                 <button type="button" onClick={this.handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Click Here</button>
//             </div>
//         );
//     }
// }

// export default Handler;