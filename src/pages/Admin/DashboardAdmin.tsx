import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  UserPlus, 
  Calendar,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  Phone,
  Award,
  BarChart3,
  Download,
  Upload,
  Home,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const AdminDashboard = () => {
  const [paginaActiva, setPaginaActiva] = useState('inicio');
  const [busqueda, setBusqueda] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);

  // Datos de ejemplo
  const estadisticasGenerales = [
    { titulo: 'Total Estudiantes', valor: '2,547', cambio: '+12.5%', icono: Users, color: 'from-blue-500 to-cyan-600', tendencia: 'up' },
    { titulo: 'Total Docentes', valor: '86', cambio: '+4.2%', icono: GraduationCap, color: 'from-purple-500 to-pink-600', tendencia: 'up' },
    { titulo: 'Cursos Activos', valor: '124', cambio: '+8.1%', icono: BookOpen, color: 'from-green-500 to-emerald-600', tendencia: 'up' },
    { titulo: 'Ingresos Mes', valor: 'S/ 485,200', cambio: '+23.8%', icono: DollarSign, color: 'from-orange-500 to-red-600', tendencia: 'up' }
  ];

  const estudiantesRecientes = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@email.com', curso: 'Matemáticas', estado: 'activo', fecha: '2024-01-15' },
    { id: 2, nombre: 'María González', email: 'maria@email.com', curso: 'Física', estado: 'activo', fecha: '2024-01-14' },
    { id: 3, nombre: 'Carlos Ruiz', email: 'carlos@email.com', curso: 'Química', estado: 'pendiente', fecha: '2024-01-13' },
    { id: 4, nombre: 'Ana Torres', email: 'ana@email.com', curso: 'Verbal', estado: 'activo', fecha: '2024-01-12' }
  ];

  const docentes = [
    { id: 1, nombre: 'Roberto García', especialidad: 'Matemáticas', estudiantes: 156, cursos: 8, calificacion: 4.8 },
    { id: 2, nombre: 'Laura Mendoza', especialidad: 'Física', estudiantes: 142, cursos: 6, calificacion: 4.9 },
    { id: 3, nombre: 'Diego Sánchez', especialidad: 'Química', estudiantes: 128, cursos: 5, calificacion: 4.7 },
    { id: 4, nombre: 'Carmen López', especialidad: 'Verbal', estudiantes: 175, cursos: 9, calificacion: 4.9 }
  ];

  const cursos = [
    { id: 1, nombre: 'Matemáticas Avanzada', docente: 'Roberto García', estudiantes: 45, ingresos: 'S/ 22,500', estado: 'activo' },
    { id: 2, nombre: 'Física Mecánica', docente: 'Laura Mendoza', estudiantes: 38, ingresos: 'S/ 19,000', estado: 'activo' },
    { id: 3, nombre: 'Química Orgánica', docente: 'Diego Sánchez', estudiantes: 42, ingresos: 'S/ 21,000', estado: 'activo' },
    { id: 4, nombre: 'Razonamiento Verbal', docente: 'Carmen López', estudiantes: 52, ingresos: 'S/ 26,000', estado: 'activo' }
  ];

  const actividadReciente = [
    { tipo: 'estudiante', mensaje: 'Nuevo estudiante registrado: Ana María Torres', tiempo: 'Hace 5 min', icono: UserPlus },
    { tipo: 'pago', mensaje: 'Pago recibido: S/ 500 - Juan Pérez', tiempo: 'Hace 15 min', icono: DollarSign },
    { tipo: 'curso', mensaje: 'Nuevo curso creado: Álgebra Lineal', tiempo: 'Hace 1 hora', icono: BookOpen },
    { tipo: 'docente', mensaje: 'Docente actualizado: Roberto García', tiempo: 'Hace 2 horas', icono: GraduationCap }
  ];

  // Sidebar Navigation
  const menuItems = [
    { id: 'inicio', nombre: 'Dashboard', icono: Home },
    { id: 'estudiantes', nombre: 'Estudiantes', icono: Users },
    { id: 'docentes', nombre: 'Docentes', icono: GraduationCap },
    { id: 'cursos', nombre: 'Cursos', icono: BookOpen },
    { id: 'finanzas', nombre: 'Finanzas', icono: DollarSign },
    { id: 'reportes', nombre: 'Reportes', icono: BarChart3 },
    { id: 'configuracion', nombre: 'Configuración', icono: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#0d1512] border-r border-gray-800 z-50">
        <div className="p-6 bg-gradient-to-r from-[#006B4B] to-[#00A676]">
          <h1 className="text-2xl font-bold text-white">Qori<span className="text-[#FFB800]">Preu</span></h1>
          <p className="text-sm text-white/80 mt-1">Panel Admin</p>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icono;
            return (
              <button
                key={item.id}
                onClick={() => setPaginaActiva(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                  paginaActiva === item.id
                    ? 'bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white'
                    : 'text-gray-400 hover:bg-[#0a0e0d] hover:text-gray-200'
                }`}
              >
                <Icon size={20} />
                <span>{item.nombre}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-6">
        {/* Header */}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {menuItems.find(item => item.id === paginaActiva)?.nombre || 'Dashboard'}
            </h2>
            <p className="text-gray-400">Gestiona tu academia desde aquí</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-3 rounded-xl bg-[#0d1512] hover:bg-[#0a0e0d] transition-colors">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0d1512]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#006B4B] to-[#00A676] flex items-center justify-center text-white font-bold">
                AD
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Admin</p>
                <p className="text-gray-400 text-xs">Administrador</p>
              </div>
            </div>
          </div>
        </header>

        {/* Página Inicio */}
        {paginaActiva === 'inicio' && (
          <div className="space-y-6">
            {/* Estadísticas Generales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {estadisticasGenerales.map((stat, index) => {
                const Icon = stat.icono;
                return (
                  <div key={index} className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800 hover:scale-105 transition-transform">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                        stat.tendencia === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {stat.cambio}
                      </span>
                    </div>
                    <h3 className="text-gray-400 text-sm mb-1">{stat.titulo}</h3>
                    <p className="text-white text-2xl font-bold">{stat.valor}</p>
                  </div>
                );
              })}
            </div>

            {/* Grid de contenido */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Actividad Reciente */}
              <div className="lg:col-span-2 bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                <h3 className="text-white text-xl font-bold mb-4">Actividad Reciente</h3>
                <div className="space-y-4">
                  {actividadReciente.map((actividad, index) => {
                    const Icon = actividad.icono;
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-[#006B4B] to-[#00A676]">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold">{actividad.mensaje}</p>
                          <p className="text-gray-400 text-sm">{actividad.tiempo}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Estudiantes Recientes */}
              <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                <h3 className="text-white text-xl font-bold mb-4">Nuevos Estudiantes</h3>
                <div className="space-y-3">
                  {estudiantesRecientes.slice(0, 4).map((estudiante) => (
                    <div key={estudiante.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                        {estudiante.nombre.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm">{estudiante.nombre}</p>
                        <p className="text-gray-400 text-xs">{estudiante.curso}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                        estudiante.estado === 'activo' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {estudiante.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Página Estudiantes */}
        {paginaActiva === 'estudiantes' && (
          <div className="space-y-6">
            {/* Barra de búsqueda y acciones */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar estudiantes..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full bg-[#0d1512] border border-gray-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#006B4B]"
                />
              </div>
              <button className="px-6 py-3 bg-[#0d1512] border border-gray-800 text-gray-400 rounded-xl hover:bg-[#0a0e0d] transition-colors flex items-center gap-2">
                <Filter size={20} />
                Filtros
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                <UserPlus size={20} />
                Nuevo Estudiante
              </button>
            </div>

            {/* Tabla de estudiantes */}
            <div className="bg-[#0d1512] rounded-2xl border border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#0a0e0d]">
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-400 font-semibold">Estudiante</th>
                    <th className="text-left p-4 text-gray-400 font-semibold">Email</th>
                    <th className="text-left p-4 text-gray-400 font-semibold">Curso</th>
                    <th className="text-left p-4 text-gray-400 font-semibold">Estado</th>
                    <th className="text-left p-4 text-gray-400 font-semibold">Fecha</th>
                    <th className="text-center p-4 text-gray-400 font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {estudiantesRecientes.map((estudiante) => (
                    <tr key={estudiante.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                            {estudiante.nombre.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-white font-semibold">{estudiante.nombre}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-400">{estudiante.email}</td>
                      <td className="p-4 text-gray-400">{estudiante.curso}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                          estudiante.estado === 'activo' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {estudiante.estado}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400">{estudiante.fecha}</td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors">
                            <Eye size={16} />
                          </button>
                          <button className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors">
                            <Edit size={16} />
                          </button>
                          <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Página Docentes */}
        {paginaActiva === 'docentes' && (
          <div className="space-y-6">
            {/* Acciones */}
            <div className="flex justify-between">
              <div className="flex-1 relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar docentes..."
                  className="w-full bg-[#0d1512] border border-gray-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#006B4B]"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                <UserPlus size={20} />
                Nuevo Docente
              </button>
            </div>

            {/* Grid de docentes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {docentes.map((docente) => (
                <div key={docente.id} className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800 hover:scale-105 transition-transform">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                      {docente.nombre.split(' ').map(n => n[0]).join('')}
                    </div>
                    <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                      <MoreVertical size={20} className="text-gray-400" />
                    </button>
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-1">{docente.nombre}</h3>
                  <p className="text-gray-400 text-sm mb-4">{docente.especialidad}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Estudiantes</span>
                      <span className="text-white font-semibold">{docente.estudiantes}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cursos</span>
                      <span className="text-white font-semibold">{docente.cursos}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Calificación</span>
                      <div className="flex items-center gap-1">
                        <Award size={14} className="text-yellow-400" />
                        <span className="text-white font-semibold">{docente.calificacion}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform">
                    Ver Perfil
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Página Cursos */}
        {paginaActiva === 'cursos' && (
          <div className="space-y-6">
            {/* Acciones */}
            <div className="flex justify-between">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl font-semibold">
                  Todos (124)
                </button>
                <button className="px-4 py-2 bg-[#0d1512] text-gray-400 rounded-xl hover:text-white transition-colors">
                  Activos (98)
                </button>
                <button className="px-4 py-2 bg-[#0d1512] text-gray-400 rounded-xl hover:text-white transition-colors">
                  Inactivos (26)
                </button>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                <BookOpen size={20} />
                Nuevo Curso
              </button>
            </div>

            {/* Tabla de cursos */}
            <div className="bg-[#0d1512] rounded-2xl border border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#0a0e0d]">
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-400 font-semibold">Curso</th>
                    <th className="text-left p-4 text-gray-400 font-semibold">Docente</th>
                    <th className="text-center p-4 text-gray-400 font-semibold">Estudiantes</th>
                    <th className="text-left p-4 text-gray-400 font-semibold">Ingresos</th>
                    <th className="text-center p-4 text-gray-400 font-semibold">Estado</th>
                    <th className="text-center p-4 text-gray-400 font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cursos.map((curso) => (
                    <tr key={curso.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                            <BookOpen size={20} className="text-white" />
                          </div>
                          <span className="text-white font-semibold">{curso.nombre}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-400">{curso.docente}</td>
                      <td className="p-4 text-center">
                        <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 font-semibold">
                          {curso.estudiantes}
                        </span>
                      </td>
                      <td className="p-4 text-white font-semibold">{curso.ingresos}</td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          <span className="px-3 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-semibold">
                            {curso.estado}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors">
                            <Eye size={16} />
                          </button>
                          <button className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors">
                            <Edit size={16} />
                          </button>
                          <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Página Finanzas */}
        {paginaActiva === 'finanzas' && (
          <div className="space-y-6">
            {/* Estadísticas financieras */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600">
                    <DollarSign size={24} className="text-white" />
                  </div>
                  <span className="px-2 py-1 rounded-lg text-xs font-semibold bg-green-500/20 text-green-400">
                    +15.3%
                  </span>
                </div>
                <h3 className="text-gray-400 text-sm mb-1">Ingresos Totales</h3>
                <p className="text-white text-2xl font-bold">S/ 1,245,800</p>
              </div>

              <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <span className="px-2 py-1 rounded-lg text-xs font-semibold bg-blue-500/20 text-blue-400">
                    +8.7%
                  </span>
                </div>
                <h3 className="text-gray-400 text-sm mb-1">Mes Actual</h3>
                <p className="text-white text-2xl font-bold">S/ 485,200</p>
              </div>

              <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600">
                    <Users size={24} className="text-white" />
                  </div>
                  <span className="px-2 py-1 rounded-lg text-xs font-semibold bg-purple-500/20 text-purple-400">
                    +12%
                  </span>
                </div>
                <h3 className="text-gray-400 text-sm mb-1">Pagos Recibidos</h3>
                <p className="text-white text-2xl font-bold">2,341</p>
              </div>

              <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600">
                    <Clock size={24} className="text-white" />
                  </div>
                  <span className="px-2 py-1 rounded-lg text-xs font-semibold bg-orange-500/20 text-orange-400">
                    -3.2%
                  </span>
                </div>
                <h3 className="text-gray-400 text-sm mb-1">Pagos Pendientes</h3>
                <p className="text-white text-2xl font-bold">S/ 48,300</p>
              </div>
            </div>

            {/* Tabla de transacciones recientes */}
            <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-xl font-bold">Transacciones Recientes</h3>
                <button className="px-4 py-2 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                  <Download size={16} />
                  Exportar
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0a0e0d]">
                    <tr className="border-b border-gray-800">
                      <th className="text-left p-4 text-gray-400 font-semibold">Estudiante</th>
                      <th className="text-left p-4 text-gray-400 font-semibold">Concepto</th>
                      <th className="text-left p-4 text-gray-400 font-semibold">Monto</th>
                      <th className="text-left p-4 text-gray-400 font-semibold">Método</th>
                      <th className="text-left p-4 text-gray-400 font-semibold">Fecha</th>
                      <th className="text-center p-4 text-gray-400 font-semibold">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { estudiante: 'Juan Pérez', concepto: 'Mensualidad Enero', monto: 'S/ 500', metodo: 'Transferencia', fecha: '2024-01-15', estado: 'completado' },
                      { estudiante: 'María González', concepto: 'Matrícula', monto: 'S/ 800', metodo: 'Efectivo', fecha: '2024-01-14', estado: 'completado' },
                      { estudiante: 'Carlos Ruiz', concepto: 'Mensualidad Enero', monto: 'S/ 500', metodo: 'Yape', fecha: '2024-01-13', estado: 'pendiente' },
                      { estudiante: 'Ana Torres', concepto: 'Material Didáctico', monto: 'S/ 150', metodo: 'Tarjeta', fecha: '2024-01-12', estado: 'completado' },
                    ].map((transaccion, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                        <td className="p-4 text-white font-semibold">{transaccion.estudiante}</td>
                        <td className="p-4 text-gray-400">{transaccion.concepto}</td>
                        <td className="p-4 text-white font-semibold">{transaccion.monto}</td>
                        <td className="p-4 text-gray-400">{transaccion.metodo}</td>
                        <td className="p-4 text-gray-400">{transaccion.fecha}</td>
                        <td className="p-4">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                              transaccion.estado === 'completado' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {transaccion.estado}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Página Reportes */}
        {paginaActiva === 'reportes' && (
          <div className="space-y-6">
            {/* Opciones de reportes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { titulo: 'Reporte de Asistencia', descripcion: 'Genera reportes de asistencia por curso o período', icono: CheckCircle, color: 'from-blue-500 to-cyan-600' },
                { titulo: 'Reporte Académico', descripcion: 'Notas y desempeño de estudiantes', icono: Award, color: 'from-purple-500 to-pink-600' },
                { titulo: 'Reporte Financiero', descripcion: 'Ingresos, gastos y estado financiero', icono: DollarSign, color: 'from-green-500 to-emerald-600' },
                { titulo: 'Reporte de Docentes', descripción: 'Evaluación y desempeño docente', icono: GraduationCap, color: 'from-orange-500 to-red-600' },
                { titulo: 'Reporte de Cursos', descripcion: 'Estadísticas y métricas por curso', icono: BookOpen, color: 'from-pink-500 to-rose-600' },
                { titulo: 'Reporte Personalizado', descripcion: 'Crea reportes con filtros personalizados', icono: FileText, color: 'from-indigo-500 to-blue-600' },
              ].map((reporte, index) => {
                const Icon = reporte.icono;
                return (
                  <div key={index} className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800 hover:scale-105 transition-transform cursor-pointer">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${reporte.color} flex items-center justify-center mb-4`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{reporte.titulo}</h3>
                    <p className="text-gray-400 text-sm mb-4">{reporte.descripcion}</p>
                    <button className="w-full py-2 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                      <Download size={16} />
                      Generar Reporte
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Historial de reportes */}
            <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
              <h3 className="text-white text-xl font-bold mb-6">Reportes Recientes</h3>
              <div className="space-y-3">
                {[
                  { nombre: 'Reporte_Asistencia_Enero_2024.pdf', fecha: '2024-01-15', tamaño: '2.4 MB', tipo: 'PDF' },
                  { nombre: 'Reporte_Financiero_Q4_2023.xlsx', fecha: '2024-01-10', tamaño: '1.8 MB', tipo: 'Excel' },
                  { nombre: 'Reporte_Academico_2023.pdf', fecha: '2024-01-05', tamaño: '3.2 MB', tipo: 'PDF' },
                ].map((archivo, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-[#006B4B] to-[#00A676]">
                        <FileText size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{archivo.nombre}</p>
                        <p className="text-gray-400 text-sm">{archivo.fecha} • {archivo.tamaño}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                      <Download size={16} />
                      Descargar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Página Configuración */}
        {paginaActiva === 'configuracion' && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Configuración General */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-white text-xl font-bold mb-6">Información de la Academia</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Nombre de la Academia</label>
                        <input
                          type="text"
                          defaultValue="Academia QoriPreu"
                          className="w-full bg-[#0a0e0d] border border-gray-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#006B4B]"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">RUC</label>
                        <input
                          type="text"
                          defaultValue="20123456789"
                          className="w-full bg-[#0a0e0d] border border-gray-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#006B4B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Dirección</label>
                      <input
                        type="text"
                        defaultValue="Av. La Cultura 1234, Cusco"
                        className="w-full bg-[#0a0e0d] border border-gray-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#006B4B]"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Teléfono</label>
                        <input
                          type="text"
                          defaultValue="+51 984 123 456"
                          className="w-full bg-[#0a0e0d] border border-gray-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#006B4B]"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Email</label>
                        <input
                          type="email"
                          defaultValue="contacto@qoripreu.edu.pe"
                          className="w-full bg-[#0a0e0d] border border-gray-800 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-[#006B4B]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-white text-xl font-bold mb-6">Configuración del Sistema</h3>
                  <div className="space-y-4">
                    {[
                      { titulo: 'Modo de mantenimiento', descripcion: 'Activa el modo de mantenimiento para el sistema', activo: false },
                      { titulo: 'Registro de estudiantes', descripcion: 'Permite que nuevos estudiantes se registren', activo: true },
                      { titulo: 'Notificaciones por email', descripcion: 'Envía notificaciones automáticas por correo', activo: true },
                      { titulo: 'Backup automático', descripcion: 'Realiza copias de seguridad diarias', activo: true },
                    ].map((config, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <div>
                          <p className="text-white font-semibold">{config.titulo}</p>
                          <p className="text-gray-400 text-sm">{config.descripcion}</p>
                        </div>
                        <button 
                          className={`relative w-14 h-7 rounded-full transition-colors ${
                            config.activo ? 'bg-gradient-to-r from-[#006B4B] to-[#00A676]' : 'bg-gray-700'
                          }`}
                        >
                          <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            config.activo ? 'translate-x-7' : 'translate-x-0'
                          }`}></span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel lateral */}
              <div className="space-y-6">
                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-white text-xl font-bold mb-6">Acciones Rápidas</h3>
                  <div className="space-y-3">
                    <button className="w-full py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                      <Upload size={20} />
                      Importar Datos
                    </button>
                    <button className="w-full py-3 bg-[#0a0e0d] border border-gray-800 text-white rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                      <Download size={20} />
                      Exportar Datos
                    </button>
                    <button className="w-full py-3 bg-[#0a0e0d] border border-gray-800 text-white rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                      <FileText size={20} />
                      Logs del Sistema
                    </button>
                  </div>
                </div>

                <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-white text-xl font-bold mb-4">Almacenamiento</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Usado</span>
                      <span className="text-white font-semibold">68.5 GB / 100 GB</span>
                    </div>
                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#006B4B] to-[#00A676]" style={{ width: '68.5%' }}></div>
                    </div>
                    <p className="text-gray-400 text-xs">31.5 GB disponibles</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-6">
                  <h3 className="text-white text-lg font-bold mb-2">Zona de Peligro</h3>
                  <p className="text-gray-300 text-sm mb-4">Las siguientes acciones son irreversibles</p>
                  <button className="w-full py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors font-semibold">
                    Restablecer Sistema
                  </button>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end gap-4">
              <button className="px-6 py-3 bg-[#0d1512] border border-gray-800 text-white rounded-xl hover:bg-white/5 transition-colors">
                Cancelar
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                <CheckCircle size={20} />
                Guardar Cambios
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;