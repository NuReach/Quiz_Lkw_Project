import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

export default function LastTest({data}) {
  const percentage = ((data[0]?.correct_choices_count / data[0]?.total_choices_count) * 100).toFixed(2);
  return (
    <div className='w-full p-6 shadow-lg rounded-lg border sm:w-60 lg:w-80 h-fit xl:h-full '>
    <p className='font-bold text-lg'>Last Tests</p>
    <div className='flex mt-3 justify-center items-center space-x-3 flex-wrap'>
        <div className='max-w-28 w-full text-center flex justify-center items-center'>
          <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `#65B741`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: '#d6d6d6',
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',
                  // Rotate the trail
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                // Customize the text
                text: {
                  // Text color
                  fill: '#65B741',
                  // Text size
                  fontSize: '18px',
                  fontWeight:"bold",
                  textAnchor: 'middle', // Center horizontally
                  dominantBaseline: 'middle', // Center vertically
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: '#65B741',
                },
              }}
            />
        </div>
        <div>
            <p className='text-xs font-bold capitalize'>{data[0]?.exam_title}</p>
            <p className='text-gray-500 font-medium text-xs mt-2 capitalize'>{data[0]?.course_title}</p>
            <p className='text-gray-500 font-medium text-xs mt-2'>[{percentage}%]</p>
            <p className='text-gray-500 font-medium text-xs mt-2'>{data[0]?.created_at.slice(0,10)}</p>
        </div>
    </div>
</div>
  )
}
