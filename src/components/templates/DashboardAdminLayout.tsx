import { useNavigate, useLocation, Outlet } from 'react-router'
import { LayoutDashboard, Users, BookOpen, Settings, LogOut } from 'lucide-react'
import NotificationButton from '../molecules/NotificationButton'

const DashboardAdminLayout = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = [
        { id: 'resumen', label: 'Resumen', icon: <LayoutDashboard size={20} />, path: '/admin' },
        { id: 'usuarios', label: 'Usuarios', icon: <Users size={20} />, path: '/admin/usuarios' },
        { id: 'cursos', label: 'Cursos', icon: <BookOpen size={20} />, path: '/admin/cursos' },
        { id: 'configuracion', label: 'Configuración', icon: <Settings size={20} />, path: '/admin/configuracion' }
    ]

    const isActive = (path: string) => {
        if (path === '/admin') {
            return location.pathname === '/admin'
        }
        return location.pathname.startsWith(path)
    }

    return (
        <div className='flex h-screen bg-[#0a0e0d] overflow-hidden'>
            {/* Sidebar */}
            <aside className='w-64 bg-[#0a1410] border-r border-gray-800 flex flex-col'>
                {/* Header */}
                <div className='bg-[#006B4B] p-6'>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center'>
                                <span className='text-2xl'>🎓</span>
                            </div>
                            <div>
                                <h2 className='text-white font-bold text-lg'>QoriPreu</h2>
                                <p className='text-white/70 text-xs'>Panel Admin</p>
                            </div>
                        </div>
                        <NotificationButton />
                    </div>
                </div>

                {/* Navigation */}
                <nav className='flex-1 p-4 space-y-2'>
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                isActive(item.path)
                                    ? 'bg-[#006B4B] text-white'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                        >
                            {item.icon}
                            <span className='font-medium'>{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* User Profile Footer */}
                <div className='p-4 border-t border-gray-800'>
                    <div className='flex items-center gap-3 mb-3'>
                        <div className='w-10 h-10 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold'>
                            AD
                        </div>
                        <div className='flex-1 min-w-0'>
                            <p className='text-white text-sm font-medium truncate'>Admin</p>
                            <p className='text-gray-400 text-xs truncate'>admin@qoripreu.com</p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/auth/login')}
                        className='w-full flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all'
                    >
                        <LogOut size={18} />
                        <span className='text-sm'>Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className='flex-1 overflow-y-auto'>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardAdminLayout
