import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,

    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.btn_increment}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  // Method 1 to pass data
  constructor() {
    super();
    this.btn_increment = this.btn_increment.bind(this);
  }
  btn_increment() {
    console.log("Button Pressed", this.state.count);
  }
}

export default Counter;
