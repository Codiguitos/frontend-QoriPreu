import { useState } from 'react'
import { Bell, X, Check, Trash2, CheckCheck } from 'lucide-react'

type Notification = {
    id: string
    tipo: 'info' | 'success' | 'warning' | 'error'
    titulo: string
    mensaje: string
    fecha: string
    leida: boolean
}

const NotificationButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    // Datos mock de notificaciones
    const [notificaciones, setNotificaciones] = useState<Notification[]>([
        {
            id: '1',
            tipo: 'info',
            titulo: 'Nueva clase programada',
            mensaje: 'Se ha programado una clase de Álgebra para mañana a las 10:00 AM',
            fecha: 'Hace 30 min',
            leida: false
        },
        {
            id: '2',
            tipo: 'success',
            titulo: 'Calificación publicada',
            mensaje: 'Tu calificación del examen de Física ha sido publicada: 18/20',
            fecha: 'Hace 2 h',
            leida: false
        },
        {
            id: '3',
            tipo: 'warning',
            titulo: 'Tarea pendiente',
            mensaje: 'Recuerda entregar la tarea de Química antes del viernes',
            fecha: 'Hace 5 h',
            leida: false
        },
        {
            id: '4',
            tipo: 'info',
            titulo: 'Material disponible',
            mensaje: 'Se ha subido nuevo material de estudio para el curso de Geometría',
            fecha: 'Hace 1 día',
            leida: true
        },
        {
            id: '5',
            tipo: 'success',
            titulo: 'Pago confirmado',
            mensaje: 'Tu pago mensual ha sido confirmado correctamente',
            fecha: 'Hace 2 días',
            leida: true
        }
    ])

    const noLeidas = notificaciones.filter(n => !n.leida).length

    const marcarComoLeida = (id: string) => {
        setNotificaciones(prev =>
            prev.map(notif =>
                notif.id === id ? { ...notif, leida: true } : notif
            )
        )
    }

    const marcarTodasComoLeidas = () => {
        setNotificaciones(prev =>
            prev.map(notif => ({ ...notif, leida: true }))
        )
    }

    const eliminarNotificacion = (id: string) => {
        setNotificaciones(prev => prev.filter(notif => notif.id !== id))
    }

    const getTipoColor = (tipo: string) => {
        switch (tipo) {
            case 'info':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
            case 'success':
                return 'bg-green-500/20 text-green-400 border-green-500/30'
            case 'warning':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
            case 'error':
                return 'bg-red-500/20 text-red-400 border-red-500/30'
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
        }
    }

    return (
        <>
            {/* Botón de Notificaciones */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all'
            >
                <Bell size={24} />
                {noLeidas > 0 && (
                    <span className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center'>
                        {noLeidas > 9 ? '9+' : noLeidas}
                    </span>
                )}
            </button>

            {/* Panel de Notificaciones */}
            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className='fixed inset-0 bg-black/50 z-40'
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Panel */}
                    <div className='fixed top-0 right-0 h-full w-full max-w-md bg-[#0d1512] border-l border-gray-800 z-50 shadow-2xl overflow-hidden flex flex-col'>
                        {/* Header */}
                        <div className='bg-[#0a1410] p-4 border-b border-gray-800'>
                            <div className='flex items-center justify-between mb-3'>
                                <h2 className='text-xl font-bold text-white'>Notificaciones</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className='p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all'
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            {notificaciones.some(n => !n.leida) && (
                                <button
                                    onClick={marcarTodasComoLeidas}
                                    className='flex items-center gap-2 text-sm text-[#00A676] hover:text-[#006B4B] transition-all'
                                >
                                    <CheckCheck size={16} />
                                    <span>Marcar todas como leídas</span>
                                </button>
                            )}
                        </div>

                        {/* Lista de Notificaciones */}
                        <div className='flex-1 overflow-y-auto'>
                            {notificaciones.length === 0 ? (
                                <div className='flex flex-col items-center justify-center h-full text-center p-8'>
                                    <Bell size={48} className='text-gray-600 mb-4' />
                                    <p className='text-gray-400 text-lg font-semibold mb-2'>No hay notificaciones</p>
                                    <p className='text-gray-500 text-sm'>Cuando recibas notificaciones aparecerán aquí</p>
                                </div>
                            ) : (
                                <div className='divide-y divide-gray-800'>
                                    {notificaciones.map((notif) => (
                                        <div
                                            key={notif.id}
                                            className={`p-4 hover:bg-gray-800/30 transition-all ${
                                                !notif.leida ? 'bg-gray-800/20' : ''
                                            }`}
                                        >
                                            <div className='flex items-start gap-3'>
                                                <div className={`px-2 py-1 rounded text-xs font-semibold border ${getTipoColor(notif.tipo)} mt-1`}>
                                                    {notif.tipo.toUpperCase()}
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <div className='flex items-start justify-between gap-2 mb-1'>
                                                        <h3 className='text-white font-semibold text-sm'>{notif.titulo}</h3>
                                                        {!notif.leida && (
                                                            <div className='w-2 h-2 bg-[#00A676] rounded-full flex-shrink-0 mt-1' />
                                                        )}
                                                    </div>
                                                    <p className='text-gray-400 text-sm mb-2'>{notif.mensaje}</p>
                                                    <div className='flex items-center justify-between'>
                                                        <span className='text-gray-500 text-xs'>{notif.fecha}</span>
                                                        <div className='flex items-center gap-1'>
                                                            {!notif.leida && (
                                                                <button
                                                                    onClick={() => marcarComoLeida(notif.id)}
                                                                    className='p-1.5 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded transition-all'
                                                                    title='Marcar como leída'
                                                                >
                                                                    <Check size={16} />
                                                                </button>
                                                            )}
                                                            <button
                                                                onClick={() => eliminarNotificacion(notif.id)}
                                                                className='p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-all'
                                                                title='Eliminar'
                                                            >
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default NotificationButton
