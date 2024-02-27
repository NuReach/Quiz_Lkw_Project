import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Test() {
    const events = [
      { date: new Date(2024, 1, 27) },
      { date: new Date(2024, 1, 28) },
      // Add more events as needed
    ];
  
  
    const tileContent = ({ date, view }) => {
      const dateKey = date.toISOString().split('T')[0];
      console.log(date.toISOString());
      const isEvent = events.some((event) => event.date.toISOString().split('T')[0] === dateKey);
      return isEvent ? <div className="event-day-marker"></div> : null;
    };
  
  return (
    <div>
    <Calendar
      tileContent={tileContent}
    />
    </div>

  )
}
