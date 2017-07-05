import React, { Component } from 'react';
import transition from './transition.svg';
import red from './red.svg';
import orange from './orange.svg';
import yellow from './yellow.svg';
import transitionGroup from './transition-group.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <div className="header-left">
                      <h2>Welcome to React</h2>
                              <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          </div>
          <img src={transitionGroup} className="header-background" alt="header-background" />
          <div className="header-right"/>

        </div>

      </div>
    );
  }
}

export default App;
