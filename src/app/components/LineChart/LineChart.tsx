import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, registerables, LinearScale, PointElement, LineElement, CategoryScale, Filler } from 'chart.js';

ChartJS.register(...registerables);

interface LineChartProps {
  chartDate: number[],
  index?: number
}

ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Filler);

let lb = []

for(let i = 0; i < 10; i++){
  lb.push(i)
}

const LineChart: React.FC<LineChartProps> = ({chartDate, index}) => {

  const colors = [ 'rgba(80, 209, 178, 1)', 'rgba(236, 140, 86, 1)', 'rgba(115, 100, 219, 1)',  'rgba(255, 0, 0, 1)']

  // const type = chartDate[0] < chartDate[chartDate.length - 1]

  const data = {
    labels: lb,
    datasets: [
      {
        label: 'My First dataset',
        data: chartDate,
        fill: false,
        pointBorderColor: 'transparent',
        borderColor: colors[index ? index: 0],
        tension: 0.4,
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