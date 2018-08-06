import React, { Component } from "react";
import "../styles/letter-container.css";
import Letter from "./letter";

class LetterContainer extends Component {
  contacts = [
    { id: 1, value: "L" },
    { id: 2, value: "E" },
    { id: 3, value: "C" },
    { id: 4, value: "P" },
    { id: 5, value: "E" },
    { id: 6, value: "Y" }
  ];

  componentDidMount() {
    console.log("TEST");
    document.addEventListener("keydown", this.handleEscKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscKey, false);
  }

  render() {
    return (
      <div className="letter-container">
        {this.contacts.map(c => <Letter key={c.id} value={c.value} />)}
      </div>
    );
  }

  handleEscKey(event) {
    console.log(event);
  }
}

export default LetterContainer;
