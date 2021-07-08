import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo from './Demo.jsx';

import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Demo />
      </div>
    );
  }
}

export default App;
