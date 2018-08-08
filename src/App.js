import React, { Component } from 'react';
import './App.css';
import ImageContainer from './components/image-container';
import LetterContainer from './components/letter-container';

class App extends Component {
  letters = [];
  attempts = 0;
  selectedWord = '';
  attemptsConfig = 4;
  words = ['hola', 'prueba', 'test'];

  constructor(props) {
    super(props);
    this.startGame();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKey.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKey.bind(this), false);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <ImageContainer />
          <LetterContainer letters={this.letters} />
        </div>
      </div>
    );
  }

  handleEscKey = (event) => {
    const letter = event.key;
    if (letter && this.selectedWord.indexOf(letter) >= 0) {
      this.letters.forEach(val => {
        if(val.value === letter){
          val.isOn = true;
        }
      });
    } else {
      this.attempts++;
    }
  }

  startGame() {
    this.attempts = 0;
    const index = Math.floor(Math.random() * this.words.length);
    this.selectedWord = this.words[index];
  let i = 0;
    Array.from(this.selectedWord, val =>
      this.letters.push({
        id: i++,
        value: val,
        isOn: false
      })
    );
  }
}

export default App;
