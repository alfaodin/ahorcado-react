import React, { Component } from "react";
import "../styles/letter-container.css";
import Letter from "./letter";

class LetterContainer extends Component {
  contacts = [
    { id: 1, value: "L", isOn: false },
    { id: 2, value: "E", isOn: false },
    { id: 3, value: "C", isOn: true },
    { id: 4, value: "P", isOn: false },
    { id: 5, value: "E", isOn: false },
    { id: 6, value: "Y", isOn: true }
  ];

  componentDidMount() {
    document.addEventListener("keydown", this.handleEscKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscKey, false);
  }

  render() {
    return (
      <div className="letter-container">
        {this.contacts.map(c => <Letter key={c.id} value={c.value} isOn={c.isOn}/>)}
      </div>
    );
  }

  handleEscKey(event) {
    console.log(event);
  }
}

export default LetterContainer;
