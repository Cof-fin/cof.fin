<script lang="ts">
  import * as d3 from "d3";
  import { onMount } from "svelte";

  // export let data: { year: number; value: number }[] = [];

  const data: { year: number; value: number }[] = [
    { year: 2000, value: 10 },
    { year: 2001, value: 20 },
    { year: 2002, value: 30 },
    { year: 2003, value: 40 },
    { year: 2004, value: 50 },
    { year: 2005, value: 60 },
    { year: 2006, value: 70 },
    { year: 2007, value: 80 },
    { year: 2008, value: 90 },
    { year: 2009, value: 100 },
  ];
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  let x: d3.ScaleLinear<number, number>;
  let y: d3.ScaleLinear<number, number>;
  let line: d3.Line<{ year: number; value: number }>;

  const createChart = () => {
    console.log("creating chart");
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.year) as [number, number])
      .range([0, width]);

    y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) as number])
      .range([height, 0]);

    line = d3
      .line<{ year: number; value: number }>()
      .x((d) => x(d.year))
      .y((d) => y(d.value));

    console.log("line generated", line(data));

    svg.append("path").datum(data).attr("class", "line").attr("d", line);

    console.log("path element created");

    svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));

    console.log("x-axis created");

    svg.append("g").call(d3.axisLeft(y));

    console.log("y-axis created");
  };

  onMount(() => {
    createChart();
  });
</script>

<div id="chart" />

<style>
  #chart {
    width: 500px;
    height: 300px;
  }

  .line {
    fill: #ffffff;
    stroke: #ffffff;
    stroke-width: 2px;
    color: #ffffff;
    border: 1px solid #ffffff;
  }

  .tick line {
    stroke: black;
    stroke-width: 1px;
  }

  .tick text {
    font-size: 12px;
    font-family: sans-serif;
  }
</style>
