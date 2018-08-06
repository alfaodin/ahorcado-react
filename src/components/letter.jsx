import React, { Component } from "react";
import "../styles/letter.css";

class Letter extends Component {
  render() {
    return <div className="letter">{this.props.value}</div>;
  }
}

export default Letter;
