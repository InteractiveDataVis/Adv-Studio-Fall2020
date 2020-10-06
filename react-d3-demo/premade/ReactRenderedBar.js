import React, { useRef } from 'react'
import { extent, scaleBand, scaleLinear } from 'd3'

const width = 500;
const height = 500;

function ReactRenderedBar({ data }) {
  const containerRef = useRef()

  const xScale = scaleBand()
    .domain(data)
    .range([0, width]) // in percents

  const yScale = scaleLinear()
    .domain(extent(data, d => d))
    .range([height, 0]) // in percents

  return (
    <div className="chart react-rendered-barchart"
      ref={containerRef}
    >
      {data.map((d, i) => <div
        className="bar"
        key={i}
        style={{
          width: xScale.bandwidth(),
          height: height - yScale(d),
          transform: `translate(${xScale(d)}px, ${yScale(d)}px)`
        }}
      />)}
    </div>
  )
}


export default ReactRenderedBar
