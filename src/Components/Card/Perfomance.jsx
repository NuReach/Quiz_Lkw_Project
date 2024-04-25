import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function Perfomance({results}) {
  const choiceResults = results?.map(result => (
    (result.correct_choices_count / result.total_choices_count) * 100
  ));
  const resultTitle = results?.map((result)=>(
    result.exam_id
  ))
  const tests = resultTitle;
  const scores = choiceResults
  const data = {
    labels: tests,
    datasets: [
      {
        label: 'Last 6 exams',
        data: scores,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.6 // This adds some "curve" to the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Sales Data',
      // },
    },
  };
  return (
    <div className='w-full  p-6 shadow-lg rounded-lg border sm:w-60  lg:w-80'>
    <p className='font-bold text-lg w-fit'>Performance </p>
    <div className='w-11/12 '>
      <Line height={120} options={options} data={data} />
    </div>
    </div>
  )
}
