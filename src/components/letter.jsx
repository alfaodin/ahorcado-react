import React, { Component } from 'react';
import '../styles/letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldVal: '',
      showResults: false
    };
  }

  render() {
    return (
      <div className={this.getStyleForLetter()}>
        {this.props.isOn ? (
          <span>{this.props.value}</span>
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
    );
  }

  getStyleForLetter() {
    let boxClass = ['letter'];
    if (this.props.isOn) {
      boxClass.push('is-on');
    }
    return boxClass.join(' ');
  }
}

export default Letter;
