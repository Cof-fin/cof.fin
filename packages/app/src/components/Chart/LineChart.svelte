<script lang="ts">
  import * as d3 from "d3";
  import { onMount } from "svelte";

  // export let data: { year: number; value: number }[] = [];

  import { BollingerBands } from "@debut/indicators";
  import { bbhl, bbhu, bbll, bblu } from "../../stores";

  const getBBLong = (data: number[]) => {
    let bb = new BollingerBands(14, 2);
    for (let i = 0; i < data.length; i++) {
      let a = bb.nextValue(Number(data[i]));
    }
    return bb.momentValue(Number(data[data.length - 1]));
  };

  const getBBShort = (data: number[]) => {
    let bb = new BollingerBands(7, 2);
    for (let i = 0; i < data.length; i++) {
      let a = bb.nextValue(Number(data[i]));
    }
    return bb.momentValue(Number(data[data.length - 1]));
  };

  export let data: { date: number; value: number }[];
  let values = data.map(function (value) {
    return value.value;
  });

  let { lower: rangeMinimum, upper: rangeMaximum } = getBBLong(values);
  console.log("🚀 | rangeMaximum:", rangeMaximum);
  console.log("🚀 | rangeMinimum:", rangeMinimum);
  let { lower: rangeMinimum2, upper: rangeMaximum2 } = getBBShort(values);
  console.log("🚀 | rangeMaximum2:", rangeMaximum2);
  console.log("🚀 | rangeMinimum2:", rangeMinimum2);

  bbhl.set(rangeMinimum);
  bbhu.set(rangeMaximum);
  bbll.set(rangeMinimum2);
  bblu.set(rangeMaximum2);

  // export let rangeMinimum: number = 1801;
  // export let rangeMaximum: number = 1802;
  // export let rangeMinimum2: number = 1803;
  // export let rangeMaximum2: number = 1804;

  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  let x: d3.ScaleLinear<number, number>;
  let y: d3.ScaleLinear<number, number>;
  let line: d3.Line<{ date: number; value: number }>;

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
      .domain(d3.extent(data, (d) => d.date) as [number, number])
      .range([0, width]);

    y = d3
      .scaleLinear()
      .domain([
        (d3.min(data, (d) => d.value) as number) - 100,
        d3.max(data, (d) => d.value) as number,
      ])
      .range([height, 0]);

    line = d3
      .line<{ date: number; value: number }>()
      .x((d) => x(d.date))
      .y((d) => y(d.value));

    // Create line generator for horizontal line
    const horizontalLine = d3
      .line<{ date: number; value: number }>()
      .x((d) => x(d.date))
      .y((d) => y(rangeMinimum));

    // Create array of two points for the horizontal line
    const horizontalLineData = [
      { date: data[0].date, value: rangeMinimum },
      { date: data[data.length - 1].date, value: rangeMinimum },
    ];

    const addHorizontalLine = (svg: any, value: number, lineColour: string) => {
      // Create line generator for horizontal line
      const horizontalLine = d3
        .line<{ date: number; value: number }>()
        .x((d) => x(d.date))
        .y((d) => y(value));

      // Create array of two points for the horizontal line
      const horizontalLineData = [
        { date: data[0].date, value: value },
        { date: data[data.length - 1].date, value: value },
      ];
      return svg
        .append("path")
        .datum(horizontalLineData)
        .attr("fill", "none")
        .attr("stroke", lineColour)
        .attr("stroke-width", 2)
        .attr("d", horizontalLine);
    };

    addHorizontalLine(svg, rangeMinimum, "red");
    addHorizontalLine(svg, rangeMaximum, "red");
    addHorizontalLine(svg, rangeMinimum2, "orange");
    addHorizontalLine(svg, rangeMaximum2, "orange");

    // Draw the horizontal line
    svg
      .append("path")
      .datum(horizontalLineData)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", horizontalLine);

    // svg = addHorizontalLine(svg);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
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
</style>
