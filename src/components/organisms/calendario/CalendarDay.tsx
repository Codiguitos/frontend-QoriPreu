
import CalendarDayNumber from "../../atoms/calendario/CalendarDayNumber";
import EventList from "../../molecules/calendario/EventList";
type Evento = {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  tipo: 'simulacro' | 'reunion' | 'feriado' | 'taller' | 'academico';
  lugar: string;
  participantes?: number;
  estado?: string;
};

const CalendarDay: React.FC<{
  dayInfo: { day: number; isCurrentMonth: boolean; date: Date };
  eventos: Evento[];
  isToday: boolean;
  onEventClick: (evento: Evento) => void;
}> = ({ dayInfo, eventos, isToday, onEventClick }) => (
  <div
    className={`min-h-[120px] p-2 border-r border-b border-gray-700 ${
      !dayInfo.isCurrentMonth ? 'bg-gray-900/30' : 'bg-gray-900/10'
    } ${isToday ? 'bg-[#00A676]/10' : ''} hover:bg-gray-800/30 transition-colors`}
  >
    <CalendarDayNumber
      day={dayInfo.day}
      isCurrentMonth={dayInfo.isCurrentMonth}
      isToday={isToday}
    />
    <EventList eventos={eventos} maxVisible={2} onEventClick={onEventClick} />
  </div>
);
export default CalendarDay;