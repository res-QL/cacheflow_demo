// import React, { useState, useCallback, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { csv, scaleBand, scaleLinear, max } from "d3";

// const width = 960;
// const height = 500;

// const App = () => {
//   const [data, setData] = useState(null);

//   /* useEffect(() => {
//     const row = (d) => {
//       d.Population = +d["2020"];
//       return d;
//     };
//     csv(csvUrl, row).then((data) => {
//       setData(data.slice(0, 10));
//     });
//   }, []); */

//   /* if (!data) {
//     return <pre>Loading...</pre>;
//   } */

//   console.log(data[0]);

//   const yScale = scaleBand()
//     .domain(data.map((d) => d.Country))
//     .range([0, height]);

//   const xScale = scaleLinear()
//     .domain([0, max(data, (d) => d.Population)])
//     .range([0, width]);

//   return (
//     <svg width={width} height={height}>
//       {data.map((d) => (
//         <rect
//           key={d.Country}
//           x={0}
//           y={
//             ("Local Uncached", "Local Cached", "Redis Uncached", "Redis Cached")
//           }
//           width={50000}
//           height={yScale.bandwidth()}
//         />
//       ))}
//     </svg>
//   );
// };

// export default D3BarChart;
