const CalendarDayNumber: React.FC<{
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
}> = ({ day, isCurrentMonth, isToday }) => (
  <div
    className={`text-sm font-semibold mb-2 ${
      !isCurrentMonth ? 'text-gray-600' : 'text-gray-300'
    } ${isToday ? 'text-[#00A676]' : ''}`}
  >
    {day}
  </div>
);
export default CalendarDayNumber;