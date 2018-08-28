import React, { Component } from 'react';
import './App.css';
import ImageContainer from './components/image-container';
import LetterContainer from './components/letter-container';
import ControlsContainer from './components/controls-container';

class App extends Component {
  attempts = 0;
  selectedWord = '';
  attemptsConfig = 4;
  words = ['hola', 'prueba', 'test'];

  constructor(props) {
    super(props);

    this.state = {
      fieldVal: '',
      letters: []
    };
    this.startGame();
  }

  onUpdate = val => {
    this.setState({
      fieldVal: val
    });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKey.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.handleEscKey.bind(this),
      false
    );
  }

  render() {
    return (
      <div>
        <div>
          <h2>Parent</h2>
          <p>Value in Parent Component State: {this.state.fieldVal}</p>
        </div>
        <div className="App">
          <div className="container">
            <ImageContainer />
            <LetterContainer letters={this.state.letters} />
          </div>
          <ControlsContainer />
        </div>
      </div>
    );
  }

  handleEscKey = event => {
    const letter = event.key;
    if (letter && this.selectedWord.indexOf(letter) >= 0) {
      const letters = [].concat(
        this.state.letters.map(val => {
          if (val.value === letter) {
            val.isOn = true;
          }
          return val;
        })
      );
      this.setState({
        letters: letters
      });
    } else {
      this.attempts++;
    }
  };

  startGame() {
    this.attempts = 0;
    const index = Math.floor(Math.random() * this.words.length);
    this.selectedWord = this.words[index];
    let i = 0;
    Array.from(this.selectedWord, val =>
      this.state.letters.push({
        id: i++,
        value: val,
        isOn: false
      })
    );
  }
}

export default App;
