import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <span>{this.countFunc()}</span> <br />
        <button className="btn btn-submit">Count</button>
      </React.Fragment>
    );
  }
  countFunc() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
  }
}

export default Counter;
