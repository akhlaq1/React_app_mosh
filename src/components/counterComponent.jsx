import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.tags.map(tag => (
            <li key={this.state.tags.indexOf(tag)}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
