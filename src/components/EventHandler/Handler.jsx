import React, { useState } from 'react';

export default function Handler(){
    const [count, setCount] = useState(0);

    const Increment=()=>{
        setCount((count) => count + 1);
    }

    return(
        <>
        <h3>{count}</h3>
        <button type="button" onClick={Increment} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increment</button>
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