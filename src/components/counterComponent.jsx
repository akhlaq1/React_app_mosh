import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    id: this.props.id
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
  disable_func() {
    if (this.state.count === 0) {
      return "disabled";
    }
    return "active";
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h4>Counter# {this.state.id}</h4>
          <button
            onClick={this.btn_decrement}
            className="btn btn-secondary btn-sm"
          >
            -
          </button>

          <span className={this.badgeColor()}>
            {" "}
            {this.state.count === 0 ? "Zero" : this.state.count}{" "}
          </span>

          <button
            onClick={this.btn_increment}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
        </div>
      </React.Fragment>
    );
  }

  // Method 1 to pass data (Reliable)
  // constructor() {
  //   super();
  //   this.btn_increment = this.btn_increment.bind(this);
  // }

  // Method 2 Convert the eventhandler to Arrow Function
  btn_increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  btn_decrement = () => {
    this.setState({ count: this.state.count - 1 });
    this.disable_func();
  };
}

export default Counter;
