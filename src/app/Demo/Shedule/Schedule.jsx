import React, { useState } from 'react';
import Image from 'next/image';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const handlePrevDay = () => {
    setCurrentDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() - 1)));
  };

  const handleNextDay = () => {
    setCurrentDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() + 1)));
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const timeSlots = [
    "12:00 AM", "02:00 PM", "04:00 PM", "05:30 PM",
    "06:30 PM", "09:00 PM", "09:30 PM", "10:00 PM",
    "11:00 PM", "12:00 PM"
  ];

  return (
    <div>
      <div className='bg-white shadow-lg p-3 rounded-lg'>
        <div className='grid grid-cols-2'>
          <p>{formattedDate}</p>
          <div className='flex items-center justify-end gap-2'>
            <Image width={16} height={16} src="/prev.png" onClick={handlePrevDay} className="cursor-pointer" />
            <Image width={16} height={16} src="/next.png" onClick={handleNextDay} className="cursor-pointer" />
          </div>
        </div>

        <div>
          <div className='grid grid-cols-2 gap-2 mt-4'>
            {timeSlots.map((time, index) => (
              <div
                key={index}
                onClick={() => handleTimeSelect(time)}
                className={`px-7 py-2 border rounded-md flex justify-center items-center cursor-pointer ${
                  selectedTime === time
                    ? 'bg-[#042440] text-white border-[#042440]'
                    : 'border-[#00000099] hover:bg-[#042440] hover:text-white hover:border-[#042440]'
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
