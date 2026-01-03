import CalendarDay from "./CalendarDay";
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
const CalendarGrid: React.FC<{
  days: { day: number; isCurrentMonth: boolean; date: Date }[];
  getEventosForDay: (date: Date) => Evento[];
  onEventClick: (evento: Evento) => void;
}> = ({ days, getEventosForDay, onEventClick }) => (
  <div className="grid grid-cols-7">
    {days.map((dayInfo, idx) => {
      const dayEventos = getEventosForDay(dayInfo.date);
      const isToday = dayInfo.date.toDateString() === new Date().toDateString();
      return (
        <CalendarDay
          key={idx}
          dayInfo={dayInfo}
          eventos={dayEventos}
          isToday={isToday}
          onEventClick={onEventClick}
        />
      );
    })}
  </div>
);
export default CalendarGrid;