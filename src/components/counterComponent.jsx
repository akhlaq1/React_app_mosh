import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClass()}>{this.countFunc()}</span> <br />
        <button className="btn btn-secondary btn-sm">Count</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={this.state.tags.indexOf(tag)}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let badgeClass = "m-2 badge badge-";
    badgeClass += this.state.count === 0 ? "warning" : "primary";
    return badgeClass;
  }

  countFunc() {
    const { count } = this.state;
    return count === 0 ? "Zero" : { count };
  }
}

export default Counter;
