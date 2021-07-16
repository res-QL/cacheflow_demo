import React, { Component } from 'react'; //

class QueryInput extends React.Component {
  constructor(props) {
    super(props);
  }

  // <input type="text" placeholder="Paste Query" />

  render() {
    return (
      <div className="QueryContainer">
        <div className="Searchbar"></div>
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
      </div>
    );
  }
}

export default QueryInput;
