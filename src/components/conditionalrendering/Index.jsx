import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class ConditionalRendering extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLogedin : fales,
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

export default ConditionalRendering;