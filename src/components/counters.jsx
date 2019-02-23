import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters_array: [{ value: 5 }, { value: 0 }, { value: 0 }, { value: 0 }]
  };
  render() {
    return (
      <div>
        {this.state.counters_array.map(tag => (
          <div>
            {" "}
            <Counter
              value={tag.value}
              key={this.state.counters_array.indexOf(tag)}
              id={this.state.counters_array.indexOf(tag)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
