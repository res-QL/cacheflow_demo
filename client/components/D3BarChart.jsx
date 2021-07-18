import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

function drawChart(height, width) {
  d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid black")
    .append("text")
    .attr("fill", "green")
    .attr("x", 50)
    .attr("y", 50)
    .text("Hello D3");
}

class D3BarChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    drawChart();
  }
}
