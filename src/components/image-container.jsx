import React, { Component } from "react";
import "../styles/image-container.css";
import image from "../assets/trump mugshots.png";

class ImageContainer extends Component {
  state = {
    title: "test Hello World"
  };
  render() {
    return <div className="image-container">
    <img src={image} className="image" alt="Imagen ahoracado"/>
    </div>;
  }
}

export default ImageContainer;
