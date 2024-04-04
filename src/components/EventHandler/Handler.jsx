import React, { Component } from 'react';




class Handler extends Component {
    
    handleClick=()=>{
        console.log('clicked');
    }

    handleOnChange=(e)=>{
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text"  />
                <input type="text" onChange={this.handleOnChange} name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"></input>
                <button type="button" onClick={this.handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Click Here</button>
            </div>
        );
    }
}

export default Handler;