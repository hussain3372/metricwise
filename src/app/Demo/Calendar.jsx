'use client'

import React, { useState } from 'react';
import { Calendar } from 'calendar';

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const cal = new Calendar();
  const monthDays = cal.monthDays(currentYear, currentMonth);

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
    }
  };

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex justify-between items-center w-full max-w-md p-4 bg-gray-200 rounded-lg">
        <button onClick={prevMonth} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          &lt;
        </button>
        <h2 className="text-xl font-bold">{`${currentYear} - ${currentMonth + 1}`}</h2>
        <button onClick={nextMonth} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 w-full max-w-md mt-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold bg-blue-500 text-white p-2 rounded-lg">
            {day}
          </div>
        ))}
        {monthDays.flat().map((day, index) => (
          <div key={index} className={`text-center p-2 ${day ? 'border' : 'bg-gray-100'}`}>
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;
