import React, { useState } from 'react';
import { 
  Calendar, Plus, X, Clock, MapPin, Users, 
  Filter, ChevronLeft, ChevronRight, Edit, Trash2,
  Eye, AlertCircle, CheckCircle, BookOpen, Award
} from 'lucide-react';

export default function CalendarioAdmin() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 19)); // Diciembre 2024
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('month'); // month, week, list

  // Eventos de ejemplo
  const [eventos, setEventos] = useState([
    {
      id: 1,
      titulo: 'Simulacro General UNSAAC',
      descripcion: 'Examen de práctica para todas las áreas según el prospecto UNSAAC 2025',
      fecha: '2024-12-21',
      horaInicio: '08:00',
      horaFin: '12:00',
      tipo: 'simulacro',
      lugar: 'Aula Principal - Sede Central',
      participantes: 120,
      estado: 'programado'
    },
    {
      id: 2,
      titulo: 'Reunión de Docentes',
      descripcion: 'Planificación académica del siguiente ciclo y evaluación de resultados',
      fecha: '2024-12-23',
      horaInicio: '18:00',
      horaFin: '20:00',
      tipo: 'reunion',
      lugar: 'Sala de Conferencias',
      participantes: 24,
      estado: 'programado'
    },
    {
      id: 3,
      titulo: 'Inicio de Vacaciones',
      descripcion: 'Receso académico por fiestas de fin de año',
      fecha: '2024-12-27',
      horaInicio: '00:00',
      horaFin: '23:59',
      tipo: 'feriado',
      lugar: 'Todas las sedes',
      participantes: null,
      estado: 'programado'
    },
    {
      id: 4,
      titulo: 'Taller de Estrategias de Examen',
      descripcion: 'Técnicas y métodos para optimizar el tiempo en el examen de admisión',
      fecha: '2024-12-20',
      horaInicio: '15:00',
      horaFin: '17:00',
      tipo: 'taller',
      lugar: 'Aula 201',
      participantes: 45,
      estado: 'programado'
    },
    {
      id: 5,
      titulo: 'Entrega de Notas - Ciclo I',
      descripcion: 'Publicación de calificaciones del primer ciclo académico',
      fecha: '2024-12-24',
      horaInicio: '10:00',
      horaFin: '18:00',
      tipo: 'academico',
      lugar: 'Plataforma Virtual',
      participantes: 156,
      estado: 'programado'
    }
  ]);

  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    tipo: 'simulacro',
    lugar: '',
    participantes: ''
  });

  // Función para obtener días del mes
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Días del mes anterior
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      });
    }

    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }

    // Días del siguiente mes
    const remainingDays = 42 - days.length; // 6 semanas * 7 días
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toISOString().split('T')[0];
  };

  const getEventosForDay = (date) => {
    const dateStr = formatDate(date.toISOString().split('T')[0]);
    return eventos.filter(evento => evento.fecha === dateStr);
  };

  const changeMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + direction);
      return newDate;
    });
  };

  const getTipoColor = (tipo) => {
    const colors = {
      simulacro: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      reunion: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      feriado: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      taller: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      academico: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    };
    return colors[tipo] || colors.simulacro;
  };

  const getTipoIcon = (tipo) => {
    const icons = {
      simulacro: Award,
      reunion: Users,
      feriado: Calendar,
      taller: BookOpen,
      academico: CheckCircle
    };
    return icons[tipo] || Calendar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoEvento = {
      id: eventos.length + 1,
      ...formData,
      participantes: parseInt(formData.participantes) || null,
      estado: 'programado'
    };
    setEventos([...eventos, nuevoEvento]);
    setShowModal(false);
    setFormData({
      titulo: '',
      descripcion: '',
      fecha: '',
      horaInicio: '',
      horaFin: '',
      tipo: 'simulacro',
      lugar: '',
      participantes: ''
    });
  };

  const EventModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="sticky top-0 bg-gradient-to-r from-[#006B4B] to-[#00A676] p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">
            {selectedEvent ? 'Editar Evento' : 'Crear Nuevo Evento'}
          </h2>
          <button onClick={() => setShowModal(false)} className="text-white hover:text-gray-200">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Título del Evento *</label>
            <input 
              type="text"
              required
              value={formData.titulo}
              onChange={(e) => setFormData({...formData, titulo: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-[#00A676] focus:outline-none"
              placeholder="Ej: Simulacro General UNSAAC"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Descripción</label>
            <textarea 
              value={formData.descripcion}
              onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-[#00A676] focus:outline-none"
              rows="3"
              placeholder="Describe el evento..."
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Fecha *</label>
              <input 
                type="date"
                required
                value={formData.fecha}
                onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-[#00A676] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Evento *</label>
              <select 
                required
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-[#00A676] focus:outline-none"
              >
                <option value="simulacro">Simulacro</option>
                <option value="reunion">Reunión</option>
                <option value="taller">Taller</option>
                <option value="academico">Académico</option>
                <option value="feriado">Feriado</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Hora Inicio *</label>
              <input 
                type="time"
                required
                value={formData.horaInicio}
                onChange={(e) => setFormData({...formData, horaInicio: e.target.value})}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-[#00A676] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Hora Fin *</label>
              <input 
                type="time"
                required
                value={formData.horaFin}
                onChange={(e) => setFormData({...formData, horaFin: e.target.value})}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-[#00A676] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Lugar *</label>
            <input 
              type="text"
              required
              value={formData.lugar}
              onChange={(e) => setFormData({...formData, lugar: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-[#00A676] focus:outline-none"
              placeholder="Ej: Aula Principal - Sede Central"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Participantes Esperados</label>
            <input 
              type="number"
              value={formData.participantes}
              onChange={(e) => setFormData({...formData, participantes: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-[#00A676] focus:outline-none"
              placeholder="Número de participantes"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] rounded-lg font-semibold hover:shadow-lg transition-all text-white"
            >
              {selectedEvent ? 'Actualizar Evento' : 'Crear Evento'}
            </button>
            <button 
              onClick={() => setShowModal(false)}
              className="px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition-all text-white"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const days = getDaysInMonth(currentDate);
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Gestión de Eventos</h1>
          <p className="text-gray-400">Crea y administra eventos académicos</p>
        </div>
        <button 
          onClick={() => {
            setSelectedEvent(null);
            setFormData({
              titulo: '',
              descripcion: '',
              fecha: '',
              horaInicio: '',
              horaFin: '',
              tipo: 'simulacro',
              lugar: '',
              participantes: ''
            });
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] rounded-lg font-semibold hover:shadow-lg transition-all text-white"
        >
          <Plus size={20} />
          Crear Evento
        </button>
      </div>

      {/* Controles del Calendario */}
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => changeMonth(-1)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-all text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-2xl font-bold text-white min-w-[200px] text-center">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button 
              onClick={() => changeMonth(1)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-all text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'month' 
                  ? 'bg-[#00A676] text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Mes
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'list' 
                  ? 'bg-[#00A676] text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Lista
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'month' ? (
        /* Vista de Calendario */
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
          {/* Días de la semana */}
          <div className="grid grid-cols-7 bg-gray-900/50 border-b border-gray-700">
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
              <div key={day} className="p-4 text-center font-semibold text-gray-400 text-sm">
                {day}
              </div>
            ))}
          </div>

          {/* Días del mes */}
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
                  <div className={`text-sm font-semibold mb-2 ${
                    !dayInfo.isCurrentMonth ? 'text-gray-600' : 'text-gray-300'
                  } ${isToday ? 'text-[#00A676]' : ''}`}>
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
                      <div className="text-xs text-gray-500 pl-1.5">
                        +{dayEventos.length - 2} más
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Vista de Lista */
        <div className="space-y-4">
          {eventos
            .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
            .map(evento => {
              const TipoIcon = getTipoIcon(evento.tipo);
              return (
                <div 
                  key={evento.id}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-[#00A676]/50 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTipoColor(evento.tipo)}`}>
                          <TipoIcon size={12} className="inline mr-1" />
                          {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {new Date(evento.fecha + 'T00:00:00').toLocaleDateString('es-ES', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{evento.titulo}</h3>
                      <p className="text-gray-400 mb-4">{evento.descripcion}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock size={16} className="text-[#00A676]" />
                          <span>{evento.horaInicio} - {evento.horaFin}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin size={16} className="text-[#00A676]" />
                          <span>{evento.lugar}</span>
                        </div>
                        {evento.participantes && (
                          <div className="flex items-center gap-2 text-gray-400">
                            <Users size={16} className="text-[#00A676]" />
                            <span>{evento.participantes} participantes</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <button 
                        onClick={() => {
                          setSelectedEvent(evento);
                          setFormData(evento);
                          setShowModal(true);
                        }}
                        className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-all"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => {
                          if (confirm('¿Estás seguro de eliminar este evento?')) {
                            setEventos(eventos.filter(e => e.id !== evento.id));
                          }
                        }}
                        className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {showModal && <EventModal />}
    </div>
  );
}