import React from "react";
import ChartStyles from "./ChartStyle";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const series = [
    {
      name: "jan",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "feb",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "mar",
      data: [10, 30, 20, 50, 60, 52,55],
    },
    {
      name: "apr",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "may",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "jun",
      data: [10, 32, 45, 80, 34, 52, 90],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <ChartStyles>
      <h5>Sales Analytics</h5>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </ChartStyles>
  );
};

export default Chart;
