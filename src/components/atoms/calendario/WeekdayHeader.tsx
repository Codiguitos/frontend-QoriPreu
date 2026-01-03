const WeekdayHeader: React.FC<{ day: string }> = ({ day }) => (
  <div className="p-4 text-center font-semibold text-gray-400 text-sm">
    {day}
  </div>
);
export default WeekdayHeader;