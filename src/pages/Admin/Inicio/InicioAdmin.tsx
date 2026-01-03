import React from 'react';
import { 
  Users, BookOpen, TrendingUp, DollarSign, 
  CheckCircle, UserPlus, AlertCircle, Calendar,
  Clock, Award, ArrowUp, ArrowDown, Eye
} from 'lucide-react';

export default function AdminInicio() {
  // Datos de ejemplo
  const estadisticas = [
    { 
      titulo: 'Total Estudiantes', 
      valor: '156', 
      cambio: '+12%', 
      tipo: 'aumento',
      icono: Users, 
      color: 'emerald',
      descripcion: 'vs mes anterior'
    },
    { 
      titulo: 'Docentes Activos', 
      valor: '24', 
      cambio: '+3', 
      tipo: 'aumento',
      icono: Award, 
      color: 'blue',
      descripcion: 'nuevos este mes'
    },
    { 
      titulo: 'Cursos en Proceso', 
      valor: '8', 
      cambio: '0', 
      tipo: 'neutro',
      icono: BookOpen, 
      color: 'purple',
      descripcion: 'activos ahora'
    },
    { 
      titulo: 'Ingresos del Mes', 
      valor: 'S/ 45,600', 
      cambio: '+8%', 
      tipo: 'aumento',
      icono: DollarSign, 
      color: 'yellow',
      descripcion: 'vs mes anterior'
    }
  ];

  const actividadReciente = [
    { 
      tipo: 'inscripcion', 
      titulo: 'Nuevo estudiante inscrito', 
      descripcion: 'Pedro Huamán se inscribió en Matemática Básica',
      tiempo: 'Hace 2 horas',
      icono: CheckCircle,
      color: 'emerald'
    },
    { 
      tipo: 'docente', 
      titulo: 'Docente actualizado', 
      descripcion: 'Ana Torres actualizó su perfil y especialidad',
      tiempo: 'Hace 5 horas',
      icono: UserPlus,
      color: 'blue'
    },
    { 
      tipo: 'curso', 
      titulo: 'Nuevo curso creado', 
      descripcion: 'Física II - Preparación intensiva para UNSAAC',
      tiempo: 'Hace 1 día',
      icono: BookOpen,
      color: 'purple'
    },
    { 
      tipo: 'alerta', 
      titulo: 'Pago pendiente', 
      descripcion: '3 estudiantes con pagos vencidos',
      tiempo: 'Hace 2 días',
      icono: AlertCircle,
      color: 'red'
    }
  ];

  const proximosEventos = [
    {
      titulo: 'Simulacro General UNSAAC',
      descripcion: 'Examen de práctica para todas las áreas',
      fecha: 'Sábado 21 de Diciembre',
      hora: '8:00 AM - 12:00 PM',
      participantes: 120,
      tipo: 'simulacro'
    },
    {
      titulo: 'Reunión de Docentes',
      descripcion: 'Planificación académica del siguiente ciclo',
      fecha: 'Lunes 23 de Diciembre',
      hora: '6:00 PM - 8:00 PM',
      participantes: 24,
      tipo: 'reunion'
    },
    {
      titulo: 'Inicio de Vacaciones',
      descripcion: 'Receso académico por fiestas',
      fecha: 'Viernes 27 de Diciembre',
      hora: 'Todo el día',
      participantes: null,
      tipo: 'feriado'
    }
  ];

  const cursosDestacados = [
    { nombre: 'Matemática Básica', estudiantes: 25, capacidad: 30, progreso: 83, docente: 'Carlos Mendoza' },
    { nombre: 'Física I', estudiantes: 22, capacidad: 25, progreso: 88, docente: 'Ana Torres' },
    { nombre: 'Química General', estudiantes: 28, capacidad: 30, progreso: 93, docente: 'Luis Vargas' },
    { nombre: 'Biología', estudiantes: 20, capacidad: 25, progreso: 80, docente: 'María Quispe' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'from-emerald-500 to-teal-500',
      blue: 'from-blue-500 to-cyan-500',
      purple: 'from-purple-500 to-pink-500',
      yellow: 'from-yellow-500 to-orange-500',
      red: 'from-red-500 to-rose-500'
    };
    return colors[color] || colors.emerald;
  };

  const getIconBgColor = (color) => {
    const colors = {
      emerald: 'bg-emerald-500/10 text-emerald-400',
      blue: 'bg-blue-500/10 text-blue-400',
      purple: 'bg-purple-500/10 text-purple-400',
      yellow: 'bg-yellow-500/10 text-yellow-400',
      red: 'bg-red-500/10 text-red-400'
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Bienvenido, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A676] to-[#FFB800]">Administrador</span>
        </h1>
        <p className="text-gray-400">Aquí tienes un resumen de la actividad de tu academia</p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {estadisticas.map((stat, idx) => {
          const Icono = stat.icono;
          return (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-[#00A676]/50 transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${getIconBgColor(stat.color)}`}>
                  <Icono size={24} />
                </div>
                <div className="flex items-center gap-1">
                  {stat.tipo === 'aumento' && <ArrowUp size={16} className="text-emerald-400" />}
                  {stat.tipo === 'disminucion' && <ArrowDown size={16} className="text-red-400" />}
                  <span className={`text-sm font-semibold ${
                    stat.tipo === 'aumento' ? 'text-emerald-400' : 
                    stat.tipo === 'disminucion' ? 'text-red-400' : 
                    'text-gray-400'
                  }`}>
                    {stat.cambio}
                  </span>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.valor}</div>
              <div className="text-sm text-gray-400">{stat.titulo}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.descripcion}</div>
            </div>
          );
        })}
      </div>

      {/* Contenido Principal */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Actividad Reciente */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Actividad Reciente</h2>
            <button className="text-sm text-[#00A676] hover:text-[#FFB800] transition-colors font-medium">
              Ver todo
            </button>
          </div>
          <div className="space-y-4">
            {actividadReciente.map((actividad, idx) => {
              const Icono = actividad.icono;
              return (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-all"
                >
                  <div className={`p-2 rounded-lg flex-shrink-0 ${getIconBgColor(actividad.color)}`}>
                    <Icono size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1">{actividad.titulo}</h3>
                    <p className="text-sm text-gray-400 mb-2">{actividad.descripcion}</p>
                    <p className="text-xs text-gray-500">{actividad.tiempo}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Próximos Eventos */}
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Próximos Eventos</h2>
            <Calendar className="text-gray-400" size={20} />
          </div>
          <div className="space-y-4">
            {proximosEventos.map((evento, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-gray-900/50 rounded-lg border-l-4 border-[#00A676] hover:bg-gray-900/70 transition-all"
              >
                <h3 className="font-semibold text-white mb-1">{evento.titulo}</h3>
                <p className="text-sm text-gray-400 mb-3">{evento.descripcion}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={14} />
                    <span>{evento.fecha}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>{evento.hora}</span>
                  </div>
                  {evento.participantes && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Users size={14} />
                      <span>{evento.participantes} participantes</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cursos Destacados */}
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Cursos Activos</h2>
          <button className="text-sm text-[#00A676] hover:text-[#FFB800] transition-colors font-medium flex items-center gap-2">
            <Eye size={16} />
            Ver todos los cursos
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cursosDestacados.map((curso, idx) => (
            <div 
              key={idx} 
              className="p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-[#00A676]/50 transition-all group"
            >
              <h3 className="font-semibold text-white mb-2 group-hover:text-[#00A676] transition-colors">
                {curso.nombre}
              </h3>
              <p className="text-sm text-gray-400 mb-3">Prof. {curso.docente}</p>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Ocupación</span>
                    <span>{curso.estudiantes}/{curso.capacidad}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00A676] to-[#FFB800] rounded-full transition-all"
                      style={{ width: `${(curso.estudiantes / curso.capacidad) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progreso</span>
                    <span>{curso.progreso}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all"
                      style={{ width: `${curso.progreso}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acciones Rápidas */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <button className="p-6 bg-gradient-to-br from-[#006B4B]/20 to-[#00A676]/10 rounded-xl border border-[#00A676]/30 hover:border-[#00A676] transition-all group text-left">
          <UserPlus className="text-[#00A676] mb-3 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold text-white mb-1">Añadir Docente</h3>
          <p className="text-sm text-gray-400">Registra un nuevo profesor</p>
        </button>

        <button className="p-6 bg-gradient-to-br from-[#006B4B]/20 to-[#00A676]/10 rounded-xl border border-[#00A676]/30 hover:border-[#00A676] transition-all group text-left">
          <BookOpen className="text-[#00A676] mb-3 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold text-white mb-1">Crear Curso</h3>
          <p className="text-sm text-gray-400">Configura un nuevo curso</p>
        </button>

        <button className="p-6 bg-gradient-to-br from-[#006B4B]/20 to-[#00A676]/10 rounded-xl border border-[#00A676]/30 hover:border-[#00A676] transition-all group text-left">
          <TrendingUp className="text-[#00A676] mb-3 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold text-white mb-1">Ver Reportes</h3>
          <p className="text-sm text-gray-400">Analiza el rendimiento</p>
        </button>
      </div>
    </div>
  );
}