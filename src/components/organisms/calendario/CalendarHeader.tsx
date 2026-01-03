import WeekdayHeader from "../../atoms/calendario/WeekdayHeader";
const CalendarHeader: React.FC = () => {
  const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  return (
    <div className="grid grid-cols-7 bg-gray-900/50 border-b border-gray-700">
      {weekdays.map(day => (
        <WeekdayHeader key={day} day={day} />
      ))}
    </div>
  );
};
export default CalendarHeader;