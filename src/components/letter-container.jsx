import React, { Component } from "react";
import "../styles/letter-container.css";
import Letter from "./letter";

class LetterContainer extends Component {
  render() {
    return (
      <div className="letter-container">
        {this.props.letters.map(c => <Letter key={c.id} value={c.value} isOn={c.isOn}/>)}
      </div>
    );
  }
}

export default LetterContainer;
