import React, { Component } from "react";
import "../styles/image-container.css";

class ImageContainer extends Component {
  state = {
    title: "test Hello World"
  };
  render() {
    return (
      <div className="image-container">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default ImageContainer;
