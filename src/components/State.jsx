import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count 1: {count}</h1>
        <button
          onClick={this.handleIncrement}
          disabled={count === 10 ? true : false}
          className="rounded-[12px]"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}

export default State;
