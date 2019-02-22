import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3"]
    tags: []
  };
  forList() {
    if (this.state.tags.length === 0) {
      return <h1>The array contains nothing</h1>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={this.state.tags.indexOf(tag)}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return <React.Fragment>{this.forList()}</React.Fragment>;
  }
}

export default Counter;
