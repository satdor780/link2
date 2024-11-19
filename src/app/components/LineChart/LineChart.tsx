import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

interface LineChartProps {
  chartDate: number[]
}

const LineChart: React.FC<LineChartProps> = ({chartDate}) => {

    const type = chartDate[0] < chartDate[chartDate.length - 1]

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: chartDate,
        fill: false,
        borderColor: type ? 'rgba(11, 186, 116, 1)': 'rgba(252, 20, 20, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
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