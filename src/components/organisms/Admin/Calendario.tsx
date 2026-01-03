import React, { useState } from 'react';
import { Award, Users, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { Eventos } from '../../../data/EventosData';
type Evento = {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string; // YYYY-MM-DD
  horaInicio: string;
  horaFin: string;
  tipo: 'simulacro' | 'reunion' | 'feriado' | 'taller' | 'academico';
  lugar: string;
  participantes?: number;
  estado?: string;
};
const Calendario: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 11, 19)); // Diciembre 2024
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null);
  const [eventos, setEventos] = useState(Eventos);
  const [formData, setFormData] = useState<Evento>({
    id: 0,
    titulo: '',
    descripcion: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    tipo: 'simulacro',
    lugar: '',
    participantes: undefined,
    estado: 'programado'
  });

  
  // ======================
  // Helpers
  // ======================
  const getTipoIcon = (tipo: Evento['tipo']): React.FC => {
    const icons: Record<Evento['tipo'], React.FC> = {
      simulacro: Award,
      reunion: Users,
      feriado: Calendar,
      taller: BookOpen,
      academico: CheckCircle
    };
    return icons[tipo];
  };

  const getTipoColor = (tipo: Evento['tipo']): string => {
    const colors: Record<Evento['tipo'], string> = {
      simulacro: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      reunion: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      feriado: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      taller: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      academico: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    };
    return colors[tipo];
  };

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

  const changeMonth = (direction: number) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + direction);
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
      <div className="grid grid-cols-7 bg-gray-900/50 border-b border-gray-700">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
          <div key={day} className="p-4 text-center font-semibold text-gray-400 text-sm">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {days.map((dayInfo, idx) => {
          const dayEventos = getEventosForDay(dayInfo.date);
          const isToday = dayInfo.date.toDateString() === new Date().toDateString();
          return (
            <div
              key={idx}
              className={`min-h-[120px] p-2 border-r border-b border-gray-700 ${
                !dayInfo.isCurrentMonth ? 'bg-gray-900/30' : 'bg-gray-900/10'
              } ${isToday ? 'bg-[#00A676]/10' : ''} hover:bg-gray-800/30 transition-colors`}
            >
              <div
                className={`text-sm font-semibold mb-2 ${!dayInfo.isCurrentMonth ? 'text-gray-600' : 'text-gray-300'} ${isToday ? 'text-[#00A676]' : ''}`}>
                {dayInfo.day}
              </div>

              <div className="space-y-1">
                {dayEventos.slice(0, 2).map(evento => {
                  const TipoIcon = getTipoIcon(evento.tipo);
                  return (
                    <div
                      key={evento.id}
                      className={`text-xs p-1.5 rounded border ${getTipoColor(evento.tipo)} cursor-pointer hover:scale-105 transition-transform`}
                      onClick={() => {
                        setSelectedEvent(evento);
                        setFormData(evento);
                        setShowModal(true);
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <TipoIcon size={10} />
                        <span className="truncate font-medium">{evento.titulo}</span>
                      </div>
                    </div>
                  );
                })}
                {dayEventos.length > 2 && (
                  <div className="text-xs text-gray-500 pl-1.5">+{dayEventos.length - 2} más</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendario;