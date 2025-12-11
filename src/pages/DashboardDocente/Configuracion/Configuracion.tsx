import { useState } from 'react'
import { User, Mail, Phone, MapPin, Lock, Bell, Globe, Palette, Save, Camera, Shield } from 'lucide-react'
import Button from '../../../components/atoms/Button'

const Configuracion = () => {
    const [activeTab, setActiveTab] = useState<'perfil' | 'seguridad' | 'notificaciones' | 'preferencias'>('perfil')

    const tabs = [
        { id: 'perfil', label: 'Perfil', icon: <User size={20} /> },
        { id: 'seguridad', label: 'Seguridad', icon: <Shield size={20} /> },
        { id: 'notificaciones', label: 'Notificaciones', icon: <Bell size={20} /> },
        { id: 'preferencias', label: 'Preferencias', icon: <Palette size={20} /> }
    ]

    return (
        <div className='min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] p-6'>
            <div className='max-w-[1400px] mx-auto'>
                {/* Header */}
                <div className='mb-8'>
                    <div className='flex items-center justify-between mb-6'>
                        <div>
                            <h1 className='text-5xl font-bold text-gray-100 mb-2'>
                                Configuración
                            </h1>
                            <p className='text-xl text-gray-400'>Gestiona tu perfil y preferencias del sistema</p>
                        </div>
                        <Button variant='primary' className='flex items-center gap-2'>
                            <Save size={20} />
                            Guardar Cambios
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                    {/* Sidebar Tabs */}
                    <div className='lg:col-span-1'>
                        <div className='bg-[#0d1512] rounded-2xl p-4 border border-gray-800 sticky top-6'>
                            <nav className='space-y-2'>
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                            activeTab === tab.id
                                                ? 'bg-[#006B4B] text-white font-semibold'
                                                : 'text-gray-400 hover:text-white hover:bg-[#0a0e0d]'
                                        }`}
                                    >
                                        {tab.icon}
                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className='lg:col-span-3'>
                        {activeTab === 'perfil' && (
                            <div className='space-y-6'>
                                {/* Profile Header Card */}
                                <div className='bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-2xl p-8 relative overflow-hidden'>
                                    <div className='absolute top-0 right-0 text-9xl opacity-10'>👤</div>
                                    <div className='relative z-10 flex items-center gap-6'>
                                        <div className='relative'>
                                            <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#006B4B] font-bold text-3xl'>
                                                CM
                                            </div>
                                            <button className='absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all'>
                                                <Camera size={16} className='text-[#006B4B]' />
                                            </button>
                                        </div>
                                        <div>
                                            <h2 className='text-3xl font-bold text-white mb-1'>Carlos Mendoza</h2>
                                            <p className='text-white/80 text-lg'>Docente de Matemáticas</p>
                                            <p className='text-white/60 text-sm mt-1'>Miembro desde Enero 2023</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Personal Information */}
                                <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                                    <h3 className='text-xl font-bold text-white mb-6'>Información Personal</h3>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div>
                                            <label className='block text-sm font-semibold text-gray-400 mb-2'>
                                                Nombre Completo
                                            </label>
                                            <div className='flex items-center gap-3 bg-[#0a0e0d] rounded-xl px-4 py-3 border border-gray-800'>
                                                <User size={18} className='text-gray-500' />
                                                <input
                                                    type='text'
                                                    defaultValue='Carlos Mendoza Silva'
                                                    className='flex-1 bg-transparent text-white outline-none'
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className='block text-sm font-semibold text-gray-400 mb-2'>
                                                Correo Electrónico
                                            </label>
                                            <div className='flex items-center gap-3 bg-[#0a0e0d] rounded-xl px-4 py-3 border border-gray-800'>
                                                <Mail size={18} className='text-gray-500' />
                                                <input
                                                    type='email'
                                                    defaultValue='carlos.mendoza@qoripreu.edu.pe'
                                                    className='flex-1 bg-transparent text-white outline-none'
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className='block text-sm font-semibold text-gray-400 mb-2'>
                                                Teléfono
                                            </label>
                                            <div className='flex items-center gap-3 bg-[#0a0e0d] rounded-xl px-4 py-3 border border-gray-800'>
                                                <Phone size={18} className='text-gray-500' />
                                                <input
                                                    type='tel'
                                                    defaultValue='+51 984 567 890'
                                                    className='flex-1 bg-transparent text-white outline-none'
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className='block text-sm font-semibold text-gray-400 mb-2'>
                                                Ubicación
                                            </label>
                                            <div className='flex items-center gap-3 bg-[#0a0e0d] rounded-xl px-4 py-3 border border-gray-800'>
                                                <MapPin size={18} className='text-gray-500' />
                                                <input
                                                    type='text'
                                                    defaultValue='Cusco, Perú'
                                                    className='flex-1 bg-transparent text-white outline-none'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'seguridad' && (
                            <div className='space-y-6'>
                                <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                                    <h3 className='text-xl font-bold text-white mb-6'>Cambiar Contraseña</h3>
                                    <div className='space-y-4'>
                                        <div>
                                            <label className='block text-sm font-semibold text-gray-400 mb-2'>
                                                Contraseña Actual
                                            </label>
                                            <div className='flex items-center gap-3 bg-[#0a0e0d] rounded-xl px-4 py-3 border border-gray-800'>
                                                <Lock size={18} className='text-gray-500' />
                                                <input
                                                    type='password'
                                                    placeholder='••••••••'
                                                    className='flex-1 bg-transparent text-white outline-none'
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className='block text-sm font-semibold text-gray-400 mb-2'>
                                                Nueva Contraseña
                                            </label>
                                            <div className='flex items-center gap-3 bg-[#0a0e0d] rounded-xl px-4 py-3 border border-gray-800'>
                                                <Lock size={18} className='text-gray-500' />
                                                <input
                                                    type='password'
                                                    placeholder='••••••••'
                                                    className='flex-1 bg-transparent text-white outline-none'
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className='block text-sm font-semibold text-gray-400 mb-2'>
                                                Confirmar Nueva Contraseña
                                            </label>
                                            <div className='flex items-center gap-3 bg-[#0a0e0d] rounded-xl px-4 py-3 border border-gray-800'>
                                                <Lock size={18} className='text-gray-500' />
                                                <input
                                                    type='password'
                                                    placeholder='••••••••'
                                                    className='flex-1 bg-transparent text-white outline-none'
                                                />
                                            </div>
                                        </div>

                                        <Button variant='primary' className='mt-4'>
                                            Actualizar Contraseña
                                        </Button>
                                    </div>
                                </div>

                                <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                                    <h3 className='text-xl font-bold text-white mb-4'>Sesiones Activas</h3>
                                    <div className='space-y-3'>
                                        <div className='bg-[#0a0e0d] rounded-xl p-4 border border-gray-800'>
                                            <div className='flex items-center justify-between'>
                                                <div>
                                                    <p className='text-white font-semibold'>Windows - Chrome</p>
                                                    <p className='text-gray-400 text-sm'>Cusco, Perú • Activo ahora</p>
                                                </div>
                                                <span className='px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold'>
                                                    Actual
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notificaciones' && (
                            <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                                <h3 className='text-xl font-bold text-white mb-6'>Preferencias de Notificaciones</h3>
                                <div className='space-y-4'>
                                    {[
                                        { label: 'Nuevas tareas asignadas', desc: 'Recibe notificaciones cuando los estudiantes entreguen tareas' },
                                        { label: 'Mensajes de estudiantes', desc: 'Notificaciones de mensajes directos' },
                                        { label: 'Recordatorios de clases', desc: 'Alertas 15 minutos antes de cada clase' },
                                        { label: 'Actualizaciones del sistema', desc: 'Novedades y mejoras de la plataforma' }
                                    ].map((item, idx) => (
                                        <div key={idx} className='flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl border border-gray-800'>
                                            <div>
                                                <p className='text-white font-semibold'>{item.label}</p>
                                                <p className='text-gray-400 text-sm'>{item.desc}</p>
                                            </div>
                                            <label className='relative inline-flex items-center cursor-pointer'>
                                                <input type='checkbox' defaultChecked className='sr-only peer' />
                                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#006B4B]"></div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'preferencias' && (
                            <div className='space-y-6'>
                                <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                                    <h3 className='text-xl font-bold text-white mb-6'>Idioma</h3>
                                    <div>
                                        <label className='block text-sm font-semibold text-gray-400 mb-2'>
                                            Selecciona tu idioma preferido
                                        </label>
                                        <div className='flex items-center gap-3 bg-[#0a0e0d] rounded-xl px-4 py-3 border border-gray-800'>
                                            <Globe size={18} className='text-gray-500' />
                                            <select className='flex-1 bg-transparent text-white outline-none'>
                                                <option value='es'>Español</option>
                                                <option value='en'>English</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                                    <h3 className='text-xl font-bold text-white mb-6'>Tema</h3>
                                    <div className='grid grid-cols-3 gap-4'>
                                        <div className='bg-[#0a0e0d] rounded-xl p-4 border-2 border-[#006B4B] cursor-pointer'>
                                            <div className='w-full h-20 bg-gradient-to-br from-[#0a0e0d] to-[#0d1512] rounded-lg mb-3'></div>
                                            <p className='text-white font-semibold text-center'>Oscuro</p>
                                        </div>
                                        <div className='bg-[#0a0e0d] rounded-xl p-4 border border-gray-800 cursor-pointer opacity-50'>
                                            <div className='w-full h-20 bg-gradient-to-br from-gray-100 to-white rounded-lg mb-3'></div>
                                            <p className='text-gray-400 font-semibold text-center'>Claro</p>
                                        </div>
                                        <div className='bg-[#0a0e0d] rounded-xl p-4 border border-gray-800 cursor-pointer opacity-50'>
                                            <div className='w-full h-20 bg-gradient-to-br from-[#0a0e0d] via-white to-[#0d1512] rounded-lg mb-3'></div>
                                            <p className='text-gray-400 font-semibold text-center'>Auto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Configuracion
