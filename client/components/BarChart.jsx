import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Bar
          data={{
            labels: ["Database", "Local Cache", "Redis"],
            datasets: [
              {
                label: "test",
                data: [10, this.props.height],
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
