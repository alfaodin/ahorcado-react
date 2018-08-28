import React, { Component } from 'react';
import '../styles/letter-container.css';
import Letter from './letter';

class LetterContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="letter-container">
          {this.props.letters.map(c => (
            <Letter key={c.id} value={c.value} isOn={c.isOn} />
          ))}
        </div>
      </div>
    );
  }
}

export default LetterContainer;
