import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5
  };

  badgeColor() {
    let badge_color = "badge m-2 badge-";
    if (this.state.count === 0) {
      badge_color += "warning";
    } else {
      badge_color += "primary";
    }
    return badge_color;
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.btn_increment({ id: 1 })} // call a arrow func to pass arguemnts
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <span className={this.badgeColor()}>
          {" "}
          {this.state.count === 0 ? "Zero" : this.state.count}{" "}
        </span>
        <button
          onClick={this.btn_decrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
      </React.Fragment>
    );
  }

  // Method 1 to pass data (Reliable)
  // constructor() {
  //   super();
  //   this.btn_increment = this.btn_increment.bind(this);
  // }

  // Method 2 Convert the eventhandler to Arrow Function
  btn_increment = product_id => {
    console.log(product_id);
    this.setState({ count: this.state.count + 1 });
  };
  btn_decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default Counter;
