import React, { Component } from "react";

export class Shelter extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            margin: "2rem 0",
            textTransform: "uppercase"
          }}
        >
          Click a Dog!
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Shelter;
