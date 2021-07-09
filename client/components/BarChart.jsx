import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Bar, Line} from "react-chartjs-2";

class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lineChartState = {
      labels: this.props.lineChartLabels,
      datasets: [
        {
          label: 'Total Time Saved',
          fill: false,
          //lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: this.props.lineChartData
        }
      ]
    }
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
          height={200}
          width={300}
        />
        <Line
          data={lineChartState}
          options={{
            title:{
              display:true,
              text:'Number of Requests',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

      </div>
    );
  }
}

export default BarChart;
