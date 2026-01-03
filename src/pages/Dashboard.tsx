import { useState } from 'react';
import { BookOpen, Video, FileText, Calendar, Bell, User, LogOut, Home, BarChart, Settings, Download, Clock, ChevronRight, PlayCircle, Award, TrendingUp } from 'lucide-react';
import '.././App.css'
export default function DashboardAlumno() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [showNotifications, setShowNotifications] = useState(false);

  const cursos = [
    { 
      id: 1, 
      nombre: 'Matemática', 
      docente: 'Prof. Juan Pérez',
      progreso: 75,
      proximaClase: '24 Nov - 3:00 PM',
      color: 'from-blue-500 to-blue-600',
      colorBg: 'bg-blue-500',
      materiales: 12,
      tareas: 3,
      icon: '📐'
    },
    { 
      id: 2, 
      nombre: 'Comunicación', 
      docente: 'Prof. María García',
      progreso: 60,
      proximaClase: '25 Nov - 10:00 AM',
      color: 'from-purple-500 to-purple-600',
      colorBg: 'bg-purple-500',
      materiales: 8,
      tareas: 2,
      icon: '📝'
    },
    { 
      id: 3, 
      nombre: 'Física', 
      docente: 'Prof. Carlos Mendoza',
      progreso: 45,
      proximaClase: '23 Nov - 4:00 PM',
      color: 'from-red-500 to-red-600',
      colorBg: 'bg-red-500',
      materiales: 15,
      tareas: 4,
      icon: '⚛️'
    },
    { 
      id: 4, 
      nombre: 'Química', 
      docente: 'Prof. Ana Torres',
      progreso: 80,
      proximaClase: '26 Nov - 2:00 PM',
      color: 'from-green-500 to-green-600',
      colorBg: 'bg-green-500',
      materiales: 10,
      tareas: 1,
      icon: '🧪'
    },
    { 
      id: 5, 
      nombre: 'Historia del Perú', 
      docente: 'Prof. Luis Vargas',
      progreso: 55,
      proximaClase: '24 Nov - 11:00 AM',
      color: 'from-yellow-500 to-yellow-600',
      colorBg: 'bg-yellow-500',
      materiales: 7,
      tareas: 2,
      icon: '🏛️'
    },
    { 
      id: 6, 
      nombre: 'Biología', 
      docente: 'Prof. Rosa Chávez',
      progreso: 90,
      proximaClase: '27 Nov - 9:00 AM',
      color: 'from-teal-500 to-teal-600',
      colorBg: 'bg-teal-500',
      materiales: 11,
      tareas: 1,
      icon: '🧬'
    }
  ];

  const notificaciones = [
    { tipo: 'tarea', mensaje: 'Nueva tarea en Matemática', tiempo: 'Hace 2 horas', icon: '📋', color: 'text-blue-400' },
    { tipo: 'clase', mensaje: 'Clase de Física en 1 hora', tiempo: 'Próximamente', icon: '🔔', color: 'text-red-400' },
    { tipo: 'material', mensaje: 'Nuevo material en Comunicación', tiempo: 'Hace 5 horas', icon: '📚', color: 'text-purple-400' },
    { tipo: 'nota', mensaje: 'Calificación publicada en Química', tiempo: 'Hace 1 día', icon: '⭐', color: 'text-green-400' }
  ];

  const proximasClases = [
    { curso: 'Física', fecha: 'Hoy', hora: '4:00 PM', link: '#', color: 'bg-red-500' },
    { curso: 'Matemática', fecha: 'Mañana', hora: '3:00 PM', link: '#', color: 'bg-blue-500' },
    { curso: 'Historia', fecha: 'Mañana', hora: '11:00 AM', link: '#', color: 'bg-yellow-500' }
  ];

  const renderInicio = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#006B4B] to-[#00A676] rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Award size={24} />
            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Alumno Activo</span>
          </div>
          <h2 className="text-4xl font-bold mb-2">¡Bienvenido de vuelta, Juan! 👋</h2>
          <p className="text-lg opacity-90 mb-6">Estás en camino a lograr tu ingreso a la UNSAAC</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={20} />
                <p className="text-sm opacity-80">Progreso General</p>
              </div>
              <p className="text-4xl font-bold">68%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={20} />
                <p className="text-sm opacity-80">Cursos Activos</p>
              </div>
              <p className="text-4xl font-bold">6</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={20} />
                <p className="text-sm opacity-80">Tareas Pendientes</p>
              </div>
              <p className="text-4xl font-bold">13</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mis Cursos */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-100">Mis Cursos</h3>
            <button className="text-[#00A676] hover:text-[#00d494] transition-colors text-sm font-semibold">
              Ver todos →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cursos.map(curso => (
              <div 
                key={curso.id}
                onClick={() => setSelectedCourse(curso)}
                className="bg-[#0d1512] rounded-xl p-5 hover:bg-[#162019] transition-all cursor-pointer border border-gray-800 hover:border-[#006B4B] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`text-3xl bg-gradient-to-br ${curso.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg`}>
                      {curso.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-100 group-hover:text-[#00A676] transition-colors">{curso.nombre}</h4>
                      <p className="text-sm text-gray-400">{curso.docente}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-600 group-hover:text-[#00A676] transition-colors" size={20} />
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progreso</span>
                    <span className="font-semibold text-[#00A676]">{curso.progreso}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#006B4B] to-[#00A676] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${curso.progreso}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <FileText size={14} /> {curso.materiales}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {curso.tareas} tareas
                    </span>
                  </div>
                  <span className="text-xs text-[#FFB800] font-semibold">{curso.proximaClase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Right */}
        <div className="space-y-6">
          {/* Próximas Clases */}
          <div className="bg-[#0d1512] rounded-xl p-5 border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-lg flex items-center justify-center">
                <Video size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-100">Próximas Clases</h3>
            </div>
            <div className="space-y-3">
              {proximasClases.map((clase, idx) => (
                <div key={idx} className="bg-[#0a0e0d] rounded-lg p-4 border border-gray-800 hover:border-[#006B4B] transition-all group">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${clase.color} rounded-full`}></div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-100 group-hover:text-[#00A676] transition-colors">{clase.curso}</p>
                      <p className="text-sm text-gray-400">{clase.fecha} - {clase.hora}</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-[#006B4B]/30 transition-all flex items-center justify-center gap-2">
                    <PlayCircle size={16} />
                    Unirse Ahora
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Notificaciones */}
          <div className="bg-[#0d1512] rounded-xl p-5 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFB800] to-[#ff9500] rounded-lg flex items-center justify-center">
                  <Bell size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-100">Notificaciones</h3>
              </div>
              <span className="bg-[#FFB800] text-black text-xs font-bold px-2 py-1 rounded-full">{notificaciones.length}</span>
            </div>
            <div className="space-y-3">
              {notificaciones.slice(0, 3).map((notif, idx) => (
                <div key={idx} className="bg-[#0a0e0d] rounded-lg p-3 border border-gray-800 hover:border-[#006B4B] transition-all">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{notif.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-200 font-medium">{notif.mensaje}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.tiempo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-3 w-full text-[#00A676] text-sm font-semibold hover:underline">
              Ver todas las notificaciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurso = () => {
    if (!selectedCourse) return renderInicio();

    const materiales = [
      { nombre: 'Ecuaciones Cuadráticas.pdf', tipo: 'PDF', fecha: '20 Nov 2025', size: '2.4 MB', icon: '📄' },
      { nombre: 'Ejercicios Resueltos.pdf', tipo: 'PDF', fecha: '18 Nov 2025', size: '1.8 MB', icon: '📄' },
      { nombre: 'Video: Teoría Fundamental.mp4', tipo: 'Video', fecha: '15 Nov 2025', size: '45 MB', icon: '🎥' },
      { nombre: 'Práctica Calificada 3.pdf', tipo: 'PDF', fecha: '12 Nov 2025', size: '890 KB', icon: '📝' }
    ];

    return (
      <div className="space-y-6">
        <button 
          onClick={() => setSelectedCourse(null)}
          className="text-[#00A676] hover:text-[#00d494] flex items-center gap-2 font-semibold transition-colors"
        >
          ← Volver a mis cursos
        </button>

        {/* Course Header */}
        <div className={`bg-gradient-to-r ${selectedCourse.color} rounded-2xl p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 text-9xl opacity-10">{selectedCourse.icon}</div>
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-2">{selectedCourse.nombre}</h2>
              <p className="text-lg opacity-90 mb-4">{selectedCourse.docente}</p>
              <div className="flex gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                  <p className="text-sm opacity-80">Materiales</p>
                  <p className="text-2xl font-bold">{selectedCourse.materiales}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                  <p className="text-sm opacity-80">Tareas</p>
                  <p className="text-2xl font-bold">{selectedCourse.tareas}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30">
              <p className="text-sm opacity-80 mb-1">Tu progreso</p>
              <p className="text-5xl font-bold">{selectedCourse.progreso}%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Material del Curso */}
            <div className="bg-[#0d1512] rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-lg flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-100">Material del Curso</h3>
              </div>
              <div className="space-y-3">
                {materiales.map((material, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-lg hover:bg-[#162019] transition-all border border-gray-800 hover:border-[#006B4B] group">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-3xl">{material.icon}</div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-100 group-hover:text-[#00A676] transition-colors">{material.nombre}</p>
                        <p className="text-xs text-gray-500">{material.fecha} • {material.size}</p>
                      </div>
                    </div>
                    <button className="text-[#00A676] hover:text-[#00d494] transition-colors p-2 hover:bg-[#006B4B]/10 rounded-lg">
                      <Download size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Próximas Actividades */}
            <div className="bg-[#0d1512] rounded-xl p-6 border border-gray-800">
              <h3 className="font-bold text-xl text-gray-100 mb-5">Próximas Actividades</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-4 bg-red-500/10 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-100 mb-1">Tarea: Resolver problemas 10-25</p>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <Clock size={14} />
                        Vence: 25 Nov 2025 - 11:59 PM
                      </p>
                    </div>
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Urgente</span>
                  </div>
                  <button className="mt-3 bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">
                    Entregar Tarea
                  </button>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-4 bg-blue-500/10 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-100 mb-1">Examen Parcial</p>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <Calendar size={14} />
                        Fecha: 30 Nov 2025 - 3:00 PM
                      </p>
                    </div>
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Próximo</span>
                  </div>
                  <button className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                    Ver Temario
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Acciones Rápidas */}
            <div className="bg-[#0d1512] rounded-xl p-5 border border-gray-800">
              <h3 className="font-bold text-lg text-gray-100 mb-4">Acciones Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white py-3 rounded-lg hover:shadow-lg hover:shadow-[#006B4B]/30 transition-all font-semibold flex items-center justify-center gap-2">
                  <Video size={18} />
                  Unirse a Clase Virtual
                </button>
                <button className="w-full bg-gradient-to-r from-[#FFB800] to-[#ff9500] text-white py-3 rounded-lg hover:shadow-lg hover:shadow-[#FFB800]/30 transition-all font-semibold flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Ver Horario
                </button>
              </div>
            </div>

            {/* Información del Docente */}
            <div className="bg-[#0d1512] rounded-xl p-5 border border-gray-800">
              <h3 className="font-bold text-lg text-gray-100 mb-4">Información del Docente</h3>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-lg">
                  {selectedCourse.docente.split(' ')[1][0]}
                </div>
                <p className="font-semibold text-gray-100">{selectedCourse.docente}</p>
                <p className="text-sm text-gray-400 mb-4">Docente de {selectedCourse.nombre}</p>
                <button className="w-full bg-[#0a0e0d] text-[#00A676] border border-[#006B4B] py-2 rounded-lg text-sm font-semibold hover:bg-[#006B4B]/10 transition-all">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0d1512] border-r border-gray-800 flex flex-col">
        <div className="p-6 bg-gradient-to-r from-[#006B4B] to-[#00A676]">
          <h1 className="text-2xl font-bold text-white">Qori<span className="text-[#FFB800]">Preu</span></h1>
          <p className="text-sm text-white/80 mt-1">Academia Cusco</p>
        </div>
        
        <nav className="flex-1 p-4">
          <button
            onClick={() => { setActiveSection('inicio'); setSelectedCourse(null); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all font-semibold ${
              activeSection === 'inicio' 
                ? 'bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white shadow-lg shadow-[#006B4B]/30' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
            }`}
          >
            <Home size={20} />
            <span>Inicio</span>
          </button>
          
          <button
            onClick={() => setActiveSection('cursos')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all font-semibold ${
              activeSection === 'cursos' 
                ? 'bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white shadow-lg shadow-[#006B4B]/30' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
            }`}
          >
            <BookOpen size={20} />
            <span>Mis Cursos</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-all font-semibold">
            <Calendar size={20} />
            <span>Calendario</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-all font-semibold">
            <BarChart size={20} />
            <span>Mis Notas</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-all font-semibold">
            <Settings size={20} />
            <span>Configuración</span>
          </button>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-4 p-3 bg-gray-800 rounded-xl">
            <div className="w-10 h-10 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-gray-100">Juan Díaz</p>
              <p className="text-xs text-gray-400">Alumno</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-xl transition-all font-semibold">
            <LogOut size={18} />
            <span className="text-sm">Cerrar Sesión</span>
          </button>
        </div>
      </div>

              {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#0a0e0d]">
        <header className="bg-[#0d1512] border-b border-gray-800 p-6 sticky top-0 z-50 backdrop-blur-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-100">
                {selectedCourse ? selectedCourse.nombre : 'Dashboard'}
              </h2>
              <p className="text-gray-400">Domingo, 23 de Noviembre 2025</p>
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-3 text-gray-400 hover:bg-gray-800 rounded-xl transition-all"
              >
                <Bell size={24} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-[#0d1512] rounded-xl shadow-2xl border border-gray-800 p-4">
                  <h3 className="font-bold text-gray-100 mb-3">Notificaciones Recientes</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {notificaciones.map((notif, idx) => (
                      <div key={idx} className="bg-[#0a0e0d] rounded-lg p-3 border border-gray-800">
                        <div className="flex items-start gap-2">
                          <span className="text-lg">{notif.icon}</span>
                          <div className="flex-1">
                            <p className="text-sm text-gray-200">{notif.mensaje}</p>
                            <p className="text-xs text-gray-500 mt-1">{notif.tiempo}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="p-6 bg-[#0a0e0d] min-h-screen">
          {selectedCourse ? renderCurso() : renderInicio()}
        </main>
      </div>
    </div>
  );
}