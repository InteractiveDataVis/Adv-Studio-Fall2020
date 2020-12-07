import React, { useState, useEffect } from "react";
import { randomUniform } from "d3-random";
import { format } from "d3";
import "./App.css";
import ReactRenderedBar from "./premade/ReactRenderedBar.js";
import D3RenderedBar from "./premade/D3RenderedBar.js";

const maxDataLength = 50;

function App() {
  // State HOOK
  const [data, setData] = useState([]);

  const createNewRandomData = () => {
    // select random length of numbers
    const length = randomUniform(maxDataLength)();

    // create an array of randomly selected numbers and sort them
    const values = Array.from({ length }, randomUniform(1)).sort();
    setData(values);
  };

  // when the page first loads, create random data
  useEffect(() => {
    createNewRandomData();
  }, []); // empty array here means run the first time this component mounts

  return (
    <div className="App">
      <header className="App-header">
        Hello Anything
        <button onClick={createNewRandomData}>Shuffle Data</button>
      </header>
      <div className="main">
        <div className="numbers">
          <div>Data (length = {data.length}): </div>{" "}
          {data.map(format(".02f")).join(" ")}
        </div>
        <div className="chart-wrapper">
          <ReactRenderedBar data={data} />
          <D3RenderedBar data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
