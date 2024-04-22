import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

function Count (){
    const [count, useState] = setState;
    const increase=()=>{
        count: count+1;
    }
    return(
        <>
        <h1>{count}</h1>
        <button type='button'></button>
        </>
    )
}
export default Count;

class ConditionalRendering extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLogedin: false,
        }
    }
    render() {
     const {isLogedin} = this.state

        return (
            <div>
                {/* {isLogedin ? <HomePage /> : <LoginPage />} */}
                {isLogedin && <HomePage /> }
            </div>
        )
    }
}

// export default ConditionalRendering;