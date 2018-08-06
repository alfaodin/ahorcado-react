import React, { Component } from "react";
import "../styles/letter-container.css";

class LetterContainer extends Component {
  render() {
    return (
      <div className="letter-container">
        <div className="letter">1</div>
        <div className="letter">2</div>
        <div className="letter">3</div>
        <div className="letter">4</div>
        <div className="letter">5</div>
      </div>
    );
  }
}

export default LetterContainer;
