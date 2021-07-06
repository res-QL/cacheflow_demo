import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

class QueryResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QueryResult">
        <ul>
          {this.props.items.map((fish, i) => (
            <div>
              <li>
                <strong>Species Name:</strong> {fish.Name}
              </li>
              <li>
                <strong>Fishing Region:</strong> {fish.Region}
              </li>
              <li>Fishing Rate: {fish.Rate}</li>
              <li>State of Fish: {fish.Region}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default QueryResult;
