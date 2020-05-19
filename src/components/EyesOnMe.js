import React, { Component } from "react";

class EyesOnMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFocus = () => {
    console.log("Good!");
  };

  handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };
  render() {
    return (
      <div className="focusing">
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>
          Button
        </button>
      </div>
    );
  }
}

export default EyesOnMe;
