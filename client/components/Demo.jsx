import React, { Component } from "react";
import ReactDOM from "react-dom";
import QueryResult from "./QueryResult";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      show: false,
      id: null,
      latency: 0,
    };

    this.DryAPIRequest = this.DryAPIRequest.bind(this);
    this.APIToLocal = this.APIToLocal.bind(this);
    this.APIToRedis = this.APIToRedis.bind(this);
    this.updateLatency = this.updateLatency.bind(this);
  }

  //this function allows us to move data from API to local cache
  DryAPIRequest() {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: "{ getFishToLocal { Name Region Rate Photo State }}",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        this.setState({ items: jsonRes.data.getFish, isLoaded: true });
      });
  }

  //this function allows us to move data from API to local cache
  APIToLocal() {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: "{ getFishToLocal { Name Region Rate Photo State }}",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        this.setState({ items: jsonRes.data.getFish, isLoaded: true });
      });
  }

  //this function allows us to move data from API to Redis
  APIToRedis() {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: "{ getFishToRedis { Name Region Rate Photo State }}",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        this.setState({ items: jsonRes.data.getFish, isLoaded: true });
      });
  }

  updateLatency() {
    console.log("click");

    this.setState({ latency: 15 });
    console.log(this.state);
    //fetch /getmetrics here
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: "{ getFish { Name Region Rate Photo State }}",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        console.log(jsonRes.data.getFish);
        this.setState({ items: jsonRes.data.getFish, isLoaded: true });
      });
  }

  render() {
    return (
      <div>
        <QueryInput
          DryAPIRequest={this.DryAPIRequest}
          APIToLocal={this.APIToLocal}
          APIToRedis={this.APIToRedis}
          updateLatency={this.updateLatency}
        />
        {this.state.items.map((fish, i) => (
          <QueryResult
            key={i}
            speciesName={fish.Name}
            fishingRegion={fish.Region}
            fishingRate={fish.Rate}
            stateOfFish={fish.State}
          />
        ))}
        <BarChart height={this.state.latency} />
      </div>
    );
  }
}

export default Demo;
