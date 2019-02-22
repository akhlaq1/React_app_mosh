import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <span>{this.countFunc()}</span> <br />
        <img className="m-2" src={this.state.imageUrl} alt="Random pic" />
        <button className="btn btn-secondary btn-sm">Count</button>
      </React.Fragment>
    );
  }
  countFunc() {
    const { count } = this.state;
    return count === 0 ? (
      <span className="badge badge-primary m-2">Zero</span>
    ) : (
      <span className="badge badge-primary m-2">{count}</span>
    );
  }
}

export default Counter;
