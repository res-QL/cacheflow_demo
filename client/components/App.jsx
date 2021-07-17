import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo from './Demo.jsx';
import Intro from './Intro.jsx';
import Character from './Character.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Intro />
        <Demo />
        <Character />
      </div>
    );
  }
}

export default App;
