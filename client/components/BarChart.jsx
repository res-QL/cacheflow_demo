import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";
import globalMetrics from "../../globalMetrics.json";
import localMetrics from "../../localMetricsStorage.json";

class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // console.log("globalMetrics:", globalMetrics)
    console.log("localMetrics:", localMetrics)
    // console.log(localMetrics.getFishToLocal.uncachedCallTime)

    let uncachedCallTime = 0;
    if (localMetrics.getFishToLocal.uncachedCallTime !== {}) uncachedCallTime = localMetrics.getFishToLocal.uncachedCallTime

    return (
      <div>
        <Bar
          data={{
            labels: ["Database", "Local Cache", "Redis"],
            datasets: [
              {
                label: "test",
                data: [uncachedCallTime, 2, 3],
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
