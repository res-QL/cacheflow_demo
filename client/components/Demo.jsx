import React, { Component } from "react";
import ReactDOM from "react-dom";
import QueryInput from "./QueryInput.jsx";
import BarChart from "./BarChart.jsx";
import QueryResult from "./QueryResult.jsx";
// import D3BarChart from "./D3BarChart.jsx";

import {
  dryAPItext,
  fishToLocalCacheText,
  fishToRedisText,
} from "../queryText";
// import Intro from './Intro.jsx';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      lineChartData: [],
      lineChartLabels: [],
      id: null,
      apiQueryText: null,
      globalData: {
        totalNumberOfRequests: 0,
        totalTimeSaved: 0,
        sizeOfDataRedis: 0,
        sizeOfDataLocal: 0,
      },
      localData: {
        getFishToLocal: {
          firstCall: null,
          allCalls: [],
          numberOfCalls: 0,
          averageCallSpan: null,
          uncachedCallTime: 0,
          cachedCallTime: 0,
          dataSize: 0,
          storedLocation: "local",
        },
        getFishToRedis: {
          firstCall: null,
          allCalls: [],
          numberOfCalls: 0,
          averageCallSpan: null,
          uncachedCallTime: 0,
          cachedCallTime: 0,
          dataSize: 0,
          storedLocation: "redis",
        },
      },
    };

    this.DryAPIRequest = this.DryAPIRequest.bind(this);
    this.APIToLocal = this.APIToLocal.bind(this);
    this.APIToRedis = this.APIToRedis.bind(this);
  }

  // This function allows us to move data from API to local cache

  DryAPIRequest() {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: "{ getFishFromDatabase { Name Region Rate}}",
      }),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({
          items: jsonRes.data.getFishFromDatabase,
          apiQueryText: dryAPItext,
        });
        this.JSONTest();
      });
  }

  // This function allows us to move data from API to local cache

  APIToLocal() {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: "{ getFishToLocal { Name Region Rate}}",
      }),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({
          items: jsonRes.data.getFishToLocal,
          apiQueryText: fishToLocalCacheText,
        });
        this.JSONTest();
      });
  }

  //This function allows us to move data from API to Redis

  APIToRedis() {
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: "{ getFishToRedis { Name Region Rate}}",
      }),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({
          items: jsonRes.data.getFishToRedis,
          apiQueryText: redisQueryText,
        });
        this.JSONTest();
      });
  }

  // This function updates our metrics in state so that
  // we can display them in our demo

  JSONTest() {
    fetch("/getMetrics", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const LCData = this.state.lineChartData.slice();
        const LCLabels = this.state.lineChartLabels.slice();
        LCLabels.push(this.state.globalData.totalNumberOfRequests);
        LCData.push(this.state.globalData.totalTimeSaved)(
          this.setState({
            globalData: data.globalData,
            localData: data.localData,
            lineChartLabels: LCLabels,
            lineChartData: LCData,
          })
        );
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      // This renders the three different parts of our demo.
      // The input section, the results section, and the
      // visual display section.

      <div className="demoContainer">
        <QueryInput
          className="queryInput"
          DryAPIRequest={this.DryAPIRequest}
          APIToLocal={this.APIToLocal}
          APIToRedis={this.APIToRedis}
          sentQuery={this.state.apiQueryText}
        />
        <QueryResult items={this.state.items} />
        <BarChart
          className="barChart"
          globalData={this.state.globalData}
          localData={this.state.localData}
          lineChartLabels={this.state.lineChartLabels}
          lineChartData={this.state.lineChartData}
        />
        {/* <D3BarChart
          globalData={this.state.globalData}
          localData={this.state.localData}
          lineChartLabels={this.state.lineChartLabels}
          lineChartData={this.state.lineChartData}
        /> */}
      </div>
    );
  }
}

export default Demo;
