import React, { Component } from 'react';
// import transition from './transition.svg';
// import red from './red.svg';
// import orange from './orange.svg';
// import yellow from './yellow.svg';
import transitionGroup from './resources/transition-group.svg';
import background from './resources/car-mockup.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <div className="header-left">
            <div className="header-text">
              <h1>North County Rally Team</h1>
            </div>
            <div className="red-left"/>
            <div className="orange-left"/>
            <div className="yellow-left"/>
          </div>
          <img src={transitionGroup} className="header-background" alt="header-background" />
          <div className="header-right">
            <div className="red-right"/>
            <div className="orange-right"/>
            <div className="yellow-right"/>
          </div>

        </div>
        <div className="body">
          <img src={background} alt="racecar" className="background"/>
        </div>

      </div>
    );
  }
}

export default App;
