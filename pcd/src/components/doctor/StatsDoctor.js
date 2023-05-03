import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './stats.css';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import Layout from '../Layout';
import stats from '../../assets/stats1.mp4';
import NumberStats from '../SiteNumbers';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Stats = ({ data }) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Successful Cases',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Unsuccessful Cases',
        data: [5, 7, 2, 6, 8, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Successful Cases', 'Unsuccessful Cases'],
    datasets: [
      {
        data: [20, 13],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Successful Cases',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Unsuccessful Cases',
        data: [5, 7, 2, 6, 8, 4],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Successful Cases', 'Unsuccessful Cases'],
    datasets: [
      {
        data: [20, 13],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const [date, setDate] = useState(new Date());

  return (
    <Layout>
      <video src={stats} autoPlay loop muted />
        
      <div className="stats-container">
   
    <div className="chart-container">
      <Bar data={chartData} />
    </div>
    <div className="chart-container">
      <Pie data={pieChartData} />
    </div>
    <div className="chart-container">
      <Line data={lineChartData} />
    </div>
    <div className="chart-container">
      <Doughnut data={doughnutChartData} />
    </div>
   
  </div>
  
</Layout>
    
  );
};

export default Stats;
