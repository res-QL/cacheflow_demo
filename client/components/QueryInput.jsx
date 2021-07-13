import React, { Component } from 'react';
import XtermComponent from './Xterm.jsx';

class QueryInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QueryContainer">
        <div className="SearchBarButtons">
          <button className="hvr-grow" onClick={this.props.DryAPIRequest}>
            Retrieve from API
          </button>
          <button className="hvr-grow" onClick={this.props.APIToLocal}>
            Move to Local Cache
          </button>
          <button className="hvr-grow" onClick={this.props.APIToLocal}>
            Retrieve from Local Cache
          </button>
          <button className="hvr-grow" onClick={this.props.APIToRedis}>
            Move to Redis Cache
          </button>
          <button className="hvr-grow" onClick={this.props.APIToRedis}>
            Retrieve from Redis Cache
          </button>
        </div>
        <div className="Searchbar">
          <div className="Searchbar-Header">
            <p className="Searchbar-Label">Searchbar</p>
            <p className="instructions">paste code below</p>
          </div>
        </div>
        <div className="Terminal-Commands">
          <div className="Terminal-Header">
            <p className="Terminal-Commands-Label">Terminal Commands</p>
            <p className="instructions">paste code below</p>
          </div>
          <div className="Terminal-Container">
            <XtermComponent className="Xterm" />
          </div>
        </div>
      </div>
    );
  }
}

export default QueryInput;
