import React, { useRef, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const chartMap = {
  pie: Pie,
  bar: Bar,
};

const ReusableChart = ({ type, data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  const ChartComponent = chartMap[type];

  return <ChartComponent ref={chartRef} data={data} options={options} />;
};

export default ReusableChart;
