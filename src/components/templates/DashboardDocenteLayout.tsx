import { Outlet } from 'react-router'
import { Home, BookOpen, Users, LogOut, GraduationCap, Settings } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const DashboardDocenteLayout = () => {
    const navItems = [
        { path: '/docente', icon: <Home size={20} />, label: 'Inicio', end: true },
        { path: '/docente/mis-cursos', icon: <BookOpen size={20} />, label: 'Mis Cursos' },
        { path: '/docente/estudiantes', icon: <GraduationCap size={20} />, label: 'Estudiantes' },
        { path: '/docente/asistencia', icon: <Users size={20} />, label: 'Asistencia' },
        { path: '/docente/configuracion', icon: <Settings size={20} />, label: 'Configuración' }
    ]

    return (
        <div className='min-h-screen bg-[#0a0e0d] flex'>
            <div className='hidden sm:flex flex-col w-64 bg-[#0a1410] border-r border-gray-800'>
                <div className="p-6 bg-[#006B4B]">
                    <h1 className="text-2xl font-bold text-white">Qori<span className="text-[#FFB800]">Preu</span></h1>
                    <p className="text-sm text-white/90 mt-1">Academia Cusco</p>
                </div>
                
                <nav className='flex-1 px-4 py-6'>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                                    isActive
                                        ? 'bg-[#006B4B] text-white font-semibold'
                                        : 'text-gray-400 hover:text-white hover:bg-[#0d1512]'
                                }`
                            }
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <div className="flex items-center gap-3 mb-3 p-3 bg-[#0d1512] rounded-xl">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            CM
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-white truncate">Carlos Mendoza</p>
                            <p className="text-xs text-gray-400">Docente</p>
                        </div>
                    </div>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-[#0d1512] rounded-xl transition-all text-sm">
                        <LogOut size={18} />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default DashboardDocenteLayout
