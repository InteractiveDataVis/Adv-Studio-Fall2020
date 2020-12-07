import React, { useRef, useEffect } from "react";
import { extent, scaleBand, scaleLinear, select } from "d3";

const width = 500;
const height = 500;

function D3RenderedBar({ data }) {
  const containerRef = useRef();
  console.log(containerRef);

  const xScale = scaleBand().domain(data).range([0, width]); // in percents

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d))
    .range([height, 0]); // in percents

  useEffect(() => {
    if (containerRef.current) {
      select(containerRef.current)
        .selectAll("div.bar")
        .data(data)
        .join(
          (enter) =>
            enter
              .append("div")
              .style("height", 0)
              .style(
                "transform",
                (d) => `translate(${xScale(d)}px, ${height}px)`
              ),
          (update) => update,
          (exit) => exit.remove()
        )
        .attr("class", "bar")
        .transition()
        .duration(500)
        .style("width", `${xScale.bandwidth()}px`)
        .style("height", (d) => `${height - yScale(d)}px`)
        .style("transform", (d) => `translate(${xScale(d)}px, ${yScale(d)}px)`);
    }
  }, [data, xScale, yScale]);

  return (
    <div className="chart d3-rendered-barchart" ref={containerRef}>
      {
        // nothing here - d3 handles it all
      }
    </div>
  );
}

export default D3RenderedBar;
