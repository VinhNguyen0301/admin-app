import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface ChartData {
  name: string;
  data: number[];
}

interface ChartOptions {
  // Define your chart options interface here
  // For example:
  // xaxis: {
  //   categories: string[];
  // }
}

interface Props {
  chartData: ChartData[];
  chartOptions: ChartOptions;
}

const BarChart: React.FC<Props> = ({ chartData, chartOptions }) => {
  const [data, setData] = useState<ChartData[]>([]);
  const [options, setOptions] = useState<ChartOptions>({});

  useEffect(() => {
    setData(chartData);
    setOptions(chartOptions);
  }, [chartData, chartOptions]);

  return (
    <Chart
      options={options}
      series={data}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default BarChart;
