const EventCounter: React.FC<{ count: number }> = ({ count }) => (
  <div className="text-xs text-gray-500 pl-1.5">+{count} más</div>
);
export default EventCounter;