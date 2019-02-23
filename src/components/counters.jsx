import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters_array: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }]
  };
  render() {
    return (
      <div>
        {this.state.counters_array.map(tag => (
          <div>
            {" "}
            <Counter key={this.state.counters_array.indexOf(tag)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
