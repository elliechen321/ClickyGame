import React, { Component } from 'react';
import logo from './logo.svg';
import growth from './growth.svg';
import './App.css';

class App extends Component {

  state = {
    topScore: 0,
    currentScore: 0,
    clickedIcons: [],
  }

  isStale = (result) => {
    if(result) {

    } else {
      this.setScore()
    }
  }

  setScore = () => {
    this.setState(prevState => ({
      currentScore: prevState.currentScore++,
    }))

    if(this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore
      })
    }
  }

  flush = () => {

  }

  render() {
    const {topScore, currentScore} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Current Score: {currentScore} | Top Score {topScore} </h1>
        </header>
        <div className="Image-container">
          code start here
        </div>
      </div>
    );
  }
}

export default App;
