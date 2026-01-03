// ==================== TEMPLATE ====================
import CalendarHeader from "../organisms/calendario/CalendarHeader";
import CalendarGrid from "../organisms/calendario/CalendarGrid";
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
const CalendarTemplate: React.FC<{
  currentDate: Date;
  eventos: Evento[];
  onEventClick: (evento: Evento) => void;
}> = ({ currentDate, eventos, onEventClick }) => {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: { day: number; isCurrentMonth: boolean; date: Date }[] = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const getEventosForDay = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return eventos.filter(e => e.fecha === dateStr);
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
      <CalendarHeader />
      <CalendarGrid days={days} getEventosForDay={getEventosForDay} onEventClick={onEventClick} />
    </div>
  );
};
export default CalendarTemplate;