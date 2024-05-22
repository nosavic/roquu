import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CandlestickVolumeChart: React.FC = () => {
  const seriesData = [
    {
      x: new Date("2022-03-07").getTime(),
      y: [36400, 36641.54, 36365.4, 36641.54],
    },
    { x: new Date("2022-03-08").getTime(), y: [36500, 36700, 36400, 36600] },
    { x: new Date("2022-03-09").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-10").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-11").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-12").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-13").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-14").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-15").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-16").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-17").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-18").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-19").getTime(), y: [36600, 36800, 36500, 36750] },
    { x: new Date("2022-03-20").getTime(), y: [36600, 36800, 36500, 36750] },
    // Add more candlestick data points here
  ];

  const seriesDataLinear = [
    { x: new Date("2022-03-07").getTime(), y: 2418 },
    { x: new Date("2022-03-08").getTime(), y: 2000 },
    { x: new Date("2022-03-09").getTime(), y: 2200 },
    { x: new Date("2022-03-10").getTime(), y: 2200 },
    { x: new Date("2022-03-11").getTime(), y: 2200 },
    { x: new Date("2022-03-12").getTime(), y: 2200 },
    { x: new Date("2022-03-13").getTime(), y: 2200 },
    { x: new Date("2022-03-14").getTime(), y: 1600 },
    { x: new Date("2022-03-15").getTime(), y: 2200 },
    { x: new Date("2022-03-16").getTime(), y: 2200 },
    { x: new Date("2022-03-17").getTime(), y: 2000 },
    { x: new Date("2022-03-18").getTime(), y: 2200 },
    { x: new Date("2022-03-19").getTime(), y: 1900 },
    { x: new Date("2022-03-20").getTime(), y: 2200 },
    // Add more volume data points here
  ];

  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 290,
      id: "candles",
      toolbar: {
        autoSelected: "pan",
        show: true, // Ensure toolbar is visible
      },
      zoom: {
        enabled: true, // Enable zooming
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3C90EB",
          downward: "#DF7D46",
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true, // Move y-axis to the right
    },
  };

  const optionsBar: ApexOptions = {
    chart: {
      height: 160,
      type: "bar",
      brush: {
        enabled: true,
        target: "candles",
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("2022-03-07").getTime(),
          max: new Date("2022-03-15").getTime(),
        },
        fill: {
          color: "#ccc",
          opacity: 0.4,
        },
        stroke: {
          color: "#0D47A1",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
        colors: {
          ranges: [
            { from: -1000, to: 0, color: "#F15B46" },
            { from: 1, to: 10000, color: "#FEB019" },
          ],
        },
      },
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        offsetX: 13,
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
      opposite: true, // Move y-axis to the right
    },
  };

  return (
    <div className="p-4 text-black rounded-md">
      <div id="chart-candlestick">
        <Chart
          options={options}
          series={[{ name: "Price", data: seriesData }]}
          type="candlestick"
          height={290}
        />
      </div>
      <div id="chart-bar" className="mt-4">
        <Chart
          options={optionsBar}
          series={[{ name: "Volume", data: seriesDataLinear }]}
          type="bar"
          height={160}
        />
      </div>
    </div>
  );
};

export default CandlestickVolumeChart;
