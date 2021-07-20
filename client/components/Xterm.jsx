import React, { Component } from "react";
import ReactDOM from "react-dom";
import { XTerm } from "xterm-for-react";

// Our Xterm component allows the users of our demo
// to access the metrics via our terminal, which is
// being rendered via Xterm on our page

function XtermComponent() {
  const xtermRef = React.useRef(null);

  let curr_line = "";

  React.useEffect(() => {
    // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
    xtermRef.current.terminal.writeln(
      "\nEnter your desired metrics:\r\n\n --> Global Metrics\r\n --> Name of Resolver\r\n\n===================================================\n"
    );

    xtermRef.current.terminal.onKey((key, ev) => {
      if (key.key == "\r") {
        console.log(curr_line);

        fetch("/terminal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: curr_line,
          }),
        })
          .then((res) => res.json())
          .then((D) => {
            if (D.resolver === "Global") {
              xtermRef.current.terminal.write(
                `\n
              \rHere are the global metrics:\n
              \rTotal Number of Query Requests: ${D.data.totalNumberOfRequests} requests\r
              \rAverage Number of Requests: ${D.data.averageNumberOfCalls} requests\r
              \rTotal Number of Uncached Requests: ${D.data.numberOfUncachedRequests} requsts\r
              \rTotal Number of Cached Requests: ${D.data.numberOfCachedRequests} requests\r
              \rAverage Uncached Latency: ${D.data.averageUncachedLatency} ms\r
              \rAverage Cached Latency: ${D.data.averageCachedLatency} ms\r
              \rTotal Time Saved: ${D.data.totalTimeSaved} ms\r
              \rNumber of Unique Resolvers: ${D.data.uniqueResolvers}\r
              \rTotal Amount of Data Saved Locally: ${D.data.sizeOfDataLocal} bytes\r
              \rTotal Amount of Data Saved to Redis: ${D.data.sizeOfDataRedis} bytes\r

              \r\nEnter your desired metrics:\r\n\n --> Global Metrics\r\n --> Name of Resolver\r\n\n===================================================\n\r\n\r`

                // JSON.stringify(data, null, '\r') +
                //   '\r\n\n\nEnter your desired metrics:\r\n --> Global Metrics\r\n --> Name of Resolver\r\n\n===================================================\n\r'
              );
            } else {
              xtermRef.current.terminal.write(
                `\n
                \rHere are the metrics for ${D.resolver}:\n\r
                \rAverage Time Between Calls: ${D.data.averageCallSpan} ms\r
                \rSize of Data: ${D.data.dataSize} bytes\r
                \rTime of Intial Request: ${new Date(D.data.firstCall)}\r
                \rTime of Last 10 Requests: ${D.data.allCalls}\r
                \rNumber of Times Requested: ${D.data.numberOfCalls}\r
                \rCache Location: ${D.data.storedLocation}\r
                \rUncached Request Latency: ${D.data.uncachedCallTime} ms\r
                \rCached Request Latency: ${D.data.cachedCallTime} ms\r
                
                \r\nEnter your desired metrics:\r\n\n --> Global Metrics\r\n --> Name of Resolver\r\n\n===================================================\n\r\n\r`
              );
            }
          });

        curr_line = "";
        xtermRef.current.terminal.write("\r\n");
      } else if (key.domEvent.key === "Backspace") {
        curr_line = curr_line.slice(0, -1);
        xtermRef.current.terminal.write("\b \b");
      } else {
        xtermRef.current.terminal.write(key.key);
        curr_line += key.key;
      }
    });
  }, []);

  return (
    // Create a new terminal and set it's ref.
    <XTerm options={{ rows: 15, cols: 55 }} ref={xtermRef} />
  );
}

export default XtermComponent;
