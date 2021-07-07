import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Bar
          data={{
            labels: [
              `Local Uncached Latency (${this.props.localData.getFishToLocal
                ? this.props.localData.getFishToLocal.uncachedCallTime
                : 0})`,
              `Local Cached Latency (${this.props.localData.getFishToLocal
                ? this.props.localData.getFishToLocal.cachedCallTime
                : 0})`,
              `Redis Uncached Latency (${this.props.localData.getFishToRedis
                ? this.props.localData.getFishToRedis.uncachedCallTime
                : 0})`,
              `Redis Cached Latency (${this.props.localData.getFishToRedis
                ? this.props.localData.getFishToRedis.cachedCallTime
                : 0})`,
            ],
            datasets: [
              {
                label: "Latency",
                data: [
                  this.props.localData.getFishToLocal
                    ? this.props.localData.getFishToLocal.uncachedCallTime
                    : 0,
                  this.props.localData.getFishToLocal
                    ? this.props.localData.getFishToLocal.cachedCallTime
                    : 0,
                  this.props.localData.getFishToRedis
                    ? this.props.localData.getFishToRedis.uncachedCallTime
                    : 0,
                  this.props.localData.getFishToRedis
                    ? this.props.localData.getFishToRedis.cachedCallTime
                    : 0,
                ],
              },
            ],
          }}
          height={400}
          width={600}
        />
      </div>
    );
  }
}

export default BarChart;
