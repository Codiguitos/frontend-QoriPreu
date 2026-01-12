import { useState } from 'react'
import { User, Lock, Bell, Palette, Save } from 'lucide-react'

const Configuracion = () => {
    const [activeTab, setActiveTab] = useState('perfil')

    const tabs = [
        { id: 'perfil', label: 'Perfil', icon: <User size={20} /> },
        { id: 'seguridad', label: 'Seguridad', icon: <Lock size={20} /> },
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
                            <h1 className='text-5xl font-bold text-gray-100 mb-2'>Configuración</h1>
                            <p className='text-xl text-gray-400'>Gestiona tu perfil y preferencias del sistema</p>
                        </div>
                        <button className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-lg hover:shadow-lg transition-all'>
                            <Save size={20} />
                            <span className='font-semibold'>Guardar Cambios</span>
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className='flex gap-2 mb-6 border-b border-gray-800'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${
                                activeTab === tab.id
                                    ? 'text-white border-b-2 border-[#006B4B]'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className='bg-[#0d1512] rounded-xl p-8 border border-gray-800'>
                    {activeTab === 'perfil' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-white mb-6'>Información Personal</h2>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Nombre Completo</label>
                                    <input
                                        type='text'
                                        defaultValue='Administrador QoriPreu'
                                        className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Email</label>
                                    <input
                                        type='email'
                                        defaultValue='admin@qoripreu.com'
                                        className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Teléfono</label>
                                    <input
                                        type='tel'
                                        defaultValue='+51 987 654 321'
                                        className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Cargo</label>
                                    <input
                                        type='text'
                                        defaultValue='Administrador General'
                                        className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'seguridad' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-white mb-6'>Seguridad</h2>
                            
                            <div className='space-y-6'>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Contraseña Actual</label>
                                    <input
                                        type='password'
                                        placeholder='Ingresa tu contraseña actual'
                                        className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Nueva Contraseña</label>
                                    <input
                                        type='password'
                                        placeholder='Ingresa tu nueva contraseña'
                                        className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Confirmar Nueva Contraseña</label>
                                    <input
                                        type='password'
                                        placeholder='Confirma tu nueva contraseña'
                                        className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notificaciones' && (
                        <div className='space-y-6'>
                            <h2 className='text-2xl font-bold text-white mb-6'>Notificaciones</h2>
                            
                            <div className='space-y-4'>
                                {[
                                    { label: 'Nuevos estudiantes registrados', desc: 'Recibe notificaciones cuando un nuevo estudiante se registre' },
                                    { label: 'Actualizaciones de cursos', desc: 'Notificaciones sobre cambios en los cursos' },
                                    { label: 'Reportes semanales', desc: 'Recibe reportes semanales del sistema' },
                                    { label: 'Alertas de sistema', desc: 'Notificaciones importantes del sistema' }
                                ].map((item, index) => (
                                    <div key={index} className='flex items-center justify-between p-4 bg-[#0a1410] rounded-lg'>
                                        <div>
                                            <h3 className='text-white font-semibold mb-1'>{item.label}</h3>
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
                            <h2 className='text-2xl font-bold text-white mb-6'>Preferencias</h2>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Idioma</label>
                                    <select className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'>
                                        <option value='es'>Español</option>
                                        <option value='en'>English</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='block text-gray-400 text-sm font-semibold mb-2'>Tema</label>
                                    <select className='w-full px-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#006B4B] transition-all'>
                                        <option value='dark'>Oscuro</option>
                                        <option value='light'>Claro</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Configuracion
