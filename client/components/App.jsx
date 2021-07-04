import React, { Component } from "react";
import { render } from "react-dom";
import Demo from "./Demo.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Demo />;
  }
}

export default App;
