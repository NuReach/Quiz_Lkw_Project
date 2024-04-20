import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function TeacherCalendar() {
  const events = [
    { date: new Date(2024, 1, 27) },
    { date: new Date(2024, 1, 28) },
    // Add more events as needed
  ];
  const tileContent = ({ date, view }) => {
    const dateKey = date.toISOString().split('T')[0];
    const isEvent = events.some((event) => event.date.toISOString().split('T')[0] === dateKey);
    return isEvent ? <div className="event-day-marker "></div> : null;
  };
  return (
    <div className='w-full border-2 shadow-lg rounded-lg p-3 h-80 sm:w-80 md:w-96 xl:w-60 '>
        <Calendar
          className=" w-full"
          tileContent={tileContent}
        />
    
    </div>
  )
}
