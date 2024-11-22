import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, registerables, LinearScale, PointElement, LineElement, CategoryScale, Filler } from 'chart.js';

ChartJS.register(...registerables);

interface LineChartProps {
  chartDate: number[],
  index?: number
}

ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Filler);

  const LineChart: React.FC<LineChartProps> = ({chartDate, index}) => {

    // const lb = chartDate.map((_, i) => i);

    const colors = [
      'rgba(80, 209, 178, 1)',
      'rgba(236, 140, 86, 1)',
      'rgba(115, 100, 219, 1)',
      'rgba(255, 0, 0, 1)',
    ];
  // const type = chartDate[0] < chartDate[chartDate.length - 1]

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: 'My First dataset',
        data: chartDate,
        fill: false,
        pointBorderColor: colors[index ? index: 0],
        borderColor: colors[index ? index: 0],
        tension: 0.4,
        labels: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    radius: 0,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false, 
      },
      datalabels: {
          display: false,
      },
    },
    scales: {
      x: {
        display: false, 
        grid: {
          display: false, 
        },
      },
      y: {
        display: false, 
        grid: {
          display: false, 
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;