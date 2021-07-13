import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

class QueryResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.items);
    return (
      <div className="QueryResult">
        <div className="QueryResult-Header">
          <p>Query Response</p>
        </div>
        <div className="response">
          {JSON.stringify(this.props.items, null, 4)}
        </div>
      </div>
    );
  }
}

export default QueryResult;
