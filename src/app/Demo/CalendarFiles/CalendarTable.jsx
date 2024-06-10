import React from "react";
const CalendarTable = ({ month, year }) => {
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(month, year);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const tableItems = [];
  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    const week = { MON: "", TUE: "", WED: "", THU: "", FRI: "", SAT: "", SUN: "" };
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        continue;
      }
      if (dayCounter <= daysInMonth) {
        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        week[days[j]] = dayCounter.toString();
        dayCounter++;
      }
    }
    tableItems.push(week);
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-[#042440] text-[#FFFFFF] cursor-pointer font-14 font-normal font-inter leading-4">
            <tr>
              <th className="py-3 px-5 hover:text-[#FFDB5B]">MON</th>
              <th className="py-3 px-5 hover:text-[#FFDB5B]">TUE</th>
              <th className="py-3 px-5 hover:text-[#FFDB5B]">WED</th>
              <th className="py-3 px-5 hover:text-[#FFDB5B]">THU</th>
              <th className="py-3 px-5 hover:text-[#FFDB5B]">FRI</th>
              <th className="py-3 px-5 hover:text-[#FFDB5B]">SAT</th>
              <th className="py-3 px-5 hover:text-[#FFDB5B]">SUN</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-1 py-2 whitespace-nowrap">
                  <div
                    className={`${
                      item.MON == currentDay && month == currentMonth && year == currentYear
                        ? "text-white bg-[#00000066]"
                        : "hover:text-white hover:bg-[#00000066]"
                    } px-1 py-2 cursor-pointer rounded-md flex justify-center items-center`}
                  >
                    {item.MON}
                  </div>
                </td>
                <td className="px-1 py-2 whitespace-nowrap">
                  <div
                    className={`${
                      item.TUE == currentDay && month == currentMonth && year == currentYear
                        ? "text-white bg-[#00000066]"
                        : "hover:text-white hover:bg-[#00000066]"
                    } px-1 py-2 cursor-pointer rounded-md flex justify-center items-center`}
                  >
                    {item.TUE}
                  </div>
                </td>
                <td className="px-1 py-2 whitespace-nowrap">
                  <div
                    className={`${
                      item.WED == currentDay && month == currentMonth && year == currentYear
                        ? "text-white bg-[#00000066]"
                        : "hover:text-white hover:bg-[#00000066]"
                    } px-1 py-2 cursor-pointer rounded-md flex justify-center items-center`}
                  >
                    {item.WED}
                  </div>
                </td>
                <td className="px-1 py-2 whitespace-nowrap">
                  <div
                    className={`${
                      item.THU == currentDay && month == currentMonth && year == currentYear
                        ? "text-white bg-[#00000066]"
                        : "hover:text-white hover:bg-[#00000066]"
                    } px-1 py-2 cursor-pointer rounded-md flex justify-center items-center`}
                  >
                    {item.THU}
                  </div>
                </td>
                <td className="px-1 py-2 whitespace-nowrap">
                  <div
                    className={`${
                      item.FRI == currentDay && month == currentMonth && year == currentYear
                        ? "text-white bg-[#00000066]"
                        : "hover:text-white hover:bg-[#00000066]"
                    } px-1 py-2 cursor-pointer rounded-md flex justify-center items-center`}
                  >
                    {item.FRI}
                  </div>
                </td>
                <td className="px-1 py-2 whitespace-nowrap">
                  <div
                    className={`${
                      item.SAT == currentDay && month == currentMonth && year == currentYear
                        ? "text-white bg-[#00000066]"
                        : "hover:text-white hover:bg-[#00000066]"
                    } px-1 py-2 cursor-pointer rounded-md flex justify-center items-center`}
                  >
                    {item.SAT}
                  </div>
                </td>
                <td className="px-1 py-2 whitespace-nowrap">
                  <div
                    className={`${
                      item.SUN == currentDay && month == currentMonth && year == currentYear
                        ? "text-white bg-[#00000066]"
                        : "hover:text-white hover:bg-[#00000066]"
                    } px-1 py-2 cursor-pointer rounded-md flex justify-center items-center`}
                  >
                    {item.SUN}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarTable;
