"use state";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CalendarTable from "./CalendarTable";
import "./Calendar.css";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth()); // 0-based index (0 = January, 11 = December)
  const [year, setYear] = useState(new Date().getFullYear());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthChange = (increment) => {
    setMonth((prev) => {
      const newMonth = prev + increment;
      if (newMonth < 0) {
        setYear((prevYear) => prevYear - 1);
        return 11;
      }
      if (newMonth > 11) {
        setYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };

  const handleYearChange = (increment) => {
    setYear((prev) => prev + increment);
  };

  return (
    <div>
      {/* <div className="bg-white shadow-[0_0_10px_rgba(0,0,16,0.1)] overflow-hidden rounded-lg calendarclass">
        <div className="p-5 grid md:grid-cols-2 border-b border-[#00000033]">
          <p className="font-16 font-inter font-medium leading-5">
            Select Date & Time
          </p>
          <div className="flex justify-end items-end">
            <Image width={20} height={20} src="/contact_calendar.png" alt="contact_calendar" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center sm:px-5 py-3 relative border-b border-[#00000033]">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:px-2">
            <div>
              <h1 className="font-16 font-inter font-medium leading-5">
                {monthNames[month]}
              </h1>
            </div>
            <div className="flex items-end justify-end gap-3 mt-2 md:mt-0">
              <Image
                width={16}
                height={16}
                className="cursor-pointer"
                src="/prev.png"
                alt="contact_calendar"
                onClick={() => handleMonthChange(-1)}
              />
              <Image
                width={16}
                height={16}
                className="cursor-pointer"
                src="/next.png"
                alt="contact_calendar"
                onClick={() => handleMonthChange(1)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center sm:px-2">
            <div>
              <h1 className="font-16 font-inter font-medium leading-5">
                {year}
              </h1>
            </div>
            <div className="flex items-end justify-end gap-3 mt-2 md:mt-0">
              <Image
                width={16}
                height={16}
                className="cursor-pointer"
                src="/prev.png"
                alt="contact_calendar"
                onClick={() => handleYearChange(-1)}
              />
              <Image
                width={16}
                height={16}
                className="cursor-pointer"
                src="/next.png"
                alt="contact_calendar"
                onClick={() => handleYearChange(1)}
              />
            </div>
          </div>
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#00000033]"></div>
        </div>

        <CalendarTable month={month} year={year} />
      </div> */}

      <InlineWidget url="https://calendly.com/hussainabdullah3372" styles={{height: 853}}/>
    </div>
  );
};

export default Calendar;
