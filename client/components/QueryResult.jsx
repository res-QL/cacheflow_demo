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
          //loop through all the things we get back and place them as individual
          items on a list
          <li>
            <strong>Species Name:</strong> {this.props.speciesName}
          </li>
          <li>
            <strong>Fishing Region:</strong> {this.props.fishingRegion}
          </li>
          <li>Fishing Rate: {this.props.fishingRate}</li>
        </ul>
      </div>
    );
  }
}

export default QueryResult;
