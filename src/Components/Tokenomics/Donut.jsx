
// import React, { Component } from 'react';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Presale', 'Liquidity', 'Staking Rewards Vesting', 'Team Vesting', 'Marketing Vesting', 'Reserve', 'CEX Listing', 'Burn'],
  datasets: [
    {
      label: 'Tokenomics',
      data: [150000000, 100000000, 250000000, 100000000, 100000000, 80000000, 50000000, 20000000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(16, 111, 19, 0.8)',
        'rgba(34, 17, 177, 0.8)',
        'rgba(245, 244, 247, 0.07)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Donut = () => {
  return <Doughnut data={data} />;
}


export default Donut;











// import DonutChart from 'react-donut-chart'; 


// <DonutChart
//   data={[
//     {
//       label: 'Give you up',
//       value: 25,
//     },
//     {
//         label: 'Give you up',
//         value: 25,
//     },
//     {
//         label: 'Give you up',
//         value: 25,
//     },
//     {
//         label: 'Give you up',
//         value: 25,
//     },
//   ]}

//   className={"Tokenomics"}
//   height={500}
//   width={750}
//   colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b']}
//   strokeColor={'#212121'}
//   colorFunction={(colors, index) => colors[(index % colors.length)]}
//   innerRadius={0.70}
//   outerRadius={0.90}
//   selectedOffset={0.03}
//   toggledOffset={0.04}
//   formatValues={(values, total) => `${(values / total * 100).toFixed(2)}%`}
//   onMouseEnter={(item) => item}
//   onMouseLeave={(item) => item}
//   onClick={(item, toggled) => (toggled ? item : null)}
//   legend={true}
//   clickToggle={true}
//   interactive={true}
// />; 
