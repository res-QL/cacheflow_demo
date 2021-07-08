import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Bar, Line } from 'react-chartjs-2';

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
          data: this.props.lineChartData,
        },
      ],
    };
    return (
      <div>
        <div>
          <Bar
            className="graphs"
            data={{
              labels: [
                `Local Uncached (${
                  this.props.localData.getFishToLocal
                    ? this.props.localData.getFishToLocal.uncachedCallTime
                    : 0
                })`,
                `Local Cached (${
                  this.props.localData.getFishToLocal
                    ? this.props.localData.getFishToLocal.cachedCallTime
                    : 0
                })`,
                `Redis Uncached (${
                  this.props.localData.getFishToRedis
                    ? this.props.localData.getFishToRedis.uncachedCallTime
                    : 0
                })`,
                `Redis Cached (${
                  this.props.localData.getFishToRedis
                    ? this.props.localData.getFishToRedis.cachedCallTime
                    : 0
                })`,
              ],

              datasets: [
                {
                  label: 'Latency',
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
                  backgroundColor: [
                    'rgba(53,17,163, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                  ],
                },
              ],
            }}
          />
        </div>
        <div className="graphs">
          <Line
            data={lineChartState}
            options={{
              title: {
                display: true,
                text: 'Number of Requests',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default BarChart;
