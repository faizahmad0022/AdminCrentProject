import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SAMPLE_EVENTS = [
  { id: 1, bookingId: 'BK10245', client: 'Alex Johnson', dates: '01-08-2025', startCol: 0, span: 1, timeRow: 0 },
  { id: 2, bookingId: 'BK10245', client: 'Alex Johnson', dates: '24-04-05 25-04-05', startCol: 3, span: 2, timeRow: 0 },
  { id: 3, bookingId: 'BK10245', client: 'Alex Johnson', dates: '24-04-05', startCol: 1, span: 1, timeRow: 1 },
  { id: 4, bookingId: 'BK10245', client: 'Alex Johnson', dates: '24-04-05', startCol: 3, span: 1, timeRow: 2 },
  { id: 5, bookingId: 'BK10245', client: 'Alex Johnson', dates: '24-04-05 25-04-05', startCol: 3, span: 2, timeRow: 3 },
];

const TIME_SLOTS = ['09:20 AM', '09:20 AM', '09:20 AM', '09:20 AM', '', ''];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 1));
  const monthName = MONTHS[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const goPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  const goNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="font-sans min-h-full bg-[#F6F7F9] -m-4 md:-m-8 p-4 md:p-8">
      <div className="bg-white rounded-t-xl rounded-b-xl shadow-sm overflow-hidden border border-[#E5E7EB]/60">
        <div className="flex items-center gap-4 px-6 py-5 border-b border-[#E5E7EB] text-[#101828]">
          <h1 className="text-lg font-bold">Ride Book</h1>
          <div className="w-px h-5 bg-[#E5E7EB]" />
          <span className="text-sm font-medium text-[#3563E9]">{monthName}, {year}</span>
          <div className="flex-1" />
          <div className="flex items-center overflow-hidden rounded-lg border border-[#E0EDFE] w-[66px] h-[34px]">
            <button type="button" onClick={goPrevMonth} className="cursor-pointer flex-1 h-full bg-white text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors border-r border-[#E5E7EB]" aria-label="Previous month">
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>
            <button type="button" onClick={goNextMonth} className="cursor-pointer flex-1 h-full bg-[#3563E9] text-white flex items-center justify-center hover:bg-[#2d52c4] transition-colors" aria-label="Next month">
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ borderColor: '#E5E7EB' }}>
            <thead>
              <tr className="bg-[#F1F3F9]">
                <th className="border border-[#E5E7EB] py-3 px-4 text-left text-sm font-semibold text-[#3563E9] w-[100px]">Time</th>
                {DAYS.map((day) => (
                  <th key={day} className="border border-[#E5E7EB] py-3 px-2 text-center text-sm font-semibold text-[#3563E9] min-w-[100px]">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIME_SLOTS.map((time, rowIndex) => (
                <tr key={`${rowIndex}-${time}`} className="bg-white">
                  <td className="border border-[#E5E7EB] py-2 px-4 text-sm text-[#3563E9] align-top bg-[#FAFAFA]">{time || '\u00A0'}</td>
                  {DAYS.map((_, colIndex) => {
                    const eventHere = SAMPLE_EVENTS.find((e) => e.timeRow === rowIndex && e.startCol === colIndex);
                    const isSpanned = SAMPLE_EVENTS.some((e) => e.timeRow === rowIndex && colIndex > e.startCol && colIndex < e.startCol + e.span);
                    if (isSpanned) return null;
                    const dayOfMonth = rowIndex * 7 + colIndex + 1;
                    if (eventHere) {
                      return (
                        <td key={`${rowIndex}-${colIndex}`} className="border border-[#E5E7EB] p-1 align-top bg-white" colSpan={eventHere.span}>
                          <div className="bg-[#d6e4fd] rounded-lg pl-2 pr-2 py-1.5 text-xs leading-tight text-[#101828] space-y-0.5 border-l-[3px] border-l-[#4771ea]">
                            <p className="font-bold text-[#101828]">{eventHere.bookingId}</p>
                            <p className="text-gray-700 text-xs">{eventHere.client}</p>
                            <p className="text-[#101828]/80 text-[11px] pt-0.5">{eventHere.dates}</p>
                          </div>
                        </td>
                      );
                    }
                    return (
                      <td key={`${rowIndex}-${colIndex}`} className="border border-[#E5E7EB] p-2 align-top min-w-[100px] bg-[#FAFAFA] text-[#3563E9] text-sm">
                        {dayOfMonth <= 31 ? dayOfMonth : ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
