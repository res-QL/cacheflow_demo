import React, { Component } from "react"; //

class QueryInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QueryContainer">
        <div className="Searchbar">
          <input type="text" placeholder="Paste Query" />
        </div>
        <button onClick={this.props.DryAPIRequest}>Retrieve from API</button>
        <button onClick={this.props.APIToLocal}>Move to Local Cache</button>
        <button onClick={this.props.APIToLocal}>
          Retrieve from Local Cache
        </button>
        <button onClick={this.props.APIToRedis}>Move to Redis Cache</button>
        <button onClick={this.props.APIToRedis}>Retrieve from Redis Cache</button>
      </div>
    );
  }
}

export default QueryInput;
