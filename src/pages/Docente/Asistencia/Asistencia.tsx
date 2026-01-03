import { useState } from 'react'
import { Calendar, TrendingUp, AlertTriangle, CheckCircle, Users, Check, X, Save } from 'lucide-react'
import Text from '../../../components/atoms/Text'
import Button from '../../../components/atoms/Button'

type Estudiante = {
    id: number
    nombre: string
    presente: boolean
}

type ClaseAsistencia = {
    dia: string
    fecha: string
    hora: string
    estado: 'tomada' | 'pendiente' | 'futura' | 'no_tomada'
}

const Asistencia = () => {
    const [cursoSeleccionado, setCursoSeleccionado] = useState(1)

    const cursos = [
        { id: 1, nombre: 'Álgebra', codigo: 'ALG-201' },
        { id: 2, nombre: 'Geometría', codigo: 'GEO-201' },
        { id: 3, nombre: 'Trigonometría', codigo: 'TRI-101' }
    ]

    const estudiantesPorCurso: Record<number, Estudiante[]> = {
        1: [
            { id: 1, nombre: 'Juan Pérez García', presente: true },
            { id: 2, nombre: 'María López Torres', presente: true },
            { id: 3, nombre: 'Carlos Mendoza Silva', presente: false },
            { id: 4, nombre: 'Ana Rodríguez Díaz', presente: true },
            { id: 5, nombre: 'Luis Fernández Cruz', presente: true }
        ],
        2: [
            { id: 6, nombre: 'Sofia Vargas Ramos', presente: true },
            { id: 7, nombre: 'Diego Castro Flores', presente: false },
            { id: 8, nombre: 'Valentina Ruiz Morales', presente: true }
        ],
        3: [
            { id: 9, nombre: 'Sebastián Ortiz Vega', presente: true },
            { id: 10, nombre: 'Isabella Campos Rojas', presente: true }
        ]
    }

    const [estudiantes, setEstudiantes] = useState<Estudiante[]>(estudiantesPorCurso[1])

    const clasesSemanales: ClaseAsistencia[] = [
        { dia: 'Lun', fecha: '9 Dic', hora: '8:00 AM', estado: 'tomada' },
        { dia: 'Mar', fecha: '10 Dic', hora: '8:00 AM', estado: 'pendiente' },
        { dia: 'Mié', fecha: '11 Dic', hora: '8:00 AM', estado: 'futura' },
        { dia: 'Jue', fecha: '12 Dic', hora: '8:00 AM', estado: 'futura' },
        { dia: 'Vie', fecha: '13 Dic', hora: '8:00 AM', estado: 'futura' }
    ]

    const resumenPorCurso: Record<number, any[]> = {
        1: [
            { nombre: 'Juan Pérez García', totalClases: 20, asistencias: 19, faltas: 1, porcentaje: 95 },
            { nombre: 'María López Torres', totalClases: 20, asistencias: 18, faltas: 2, porcentaje: 90 },
            { nombre: 'Carlos Mendoza Silva', totalClases: 20, asistencias: 15, faltas: 5, porcentaje: 75 },
            { nombre: 'Ana Rodríguez Díaz', totalClases: 20, asistencias: 20, faltas: 0, porcentaje: 100 },
            { nombre: 'Luis Fernández Cruz', totalClases: 20, asistencias: 16, faltas: 4, porcentaje: 80 }
        ],
        2: [
            { nombre: 'Sofia Vargas Ramos', totalClases: 18, asistencias: 17, faltas: 1, porcentaje: 94 },
            { nombre: 'Diego Castro Flores', totalClases: 18, asistencias: 14, faltas: 4, porcentaje: 78 },
            { nombre: 'Valentina Ruiz Morales', totalClases: 18, asistencias: 18, faltas: 0, porcentaje: 100 }
        ],
        3: [
            { nombre: 'Sebastián Ortiz Vega', totalClases: 16, asistencias: 15, faltas: 1, porcentaje: 94 },
            { nombre: 'Isabella Campos Rojas', totalClases: 16, asistencias: 16, faltas: 0, porcentaje: 100 }
        ]
    }

    const resumenEstudiantes = resumenPorCurso[cursoSeleccionado]

    const cursoActual = cursos.find(c => c.id === cursoSeleccionado)
    const presentesHoy = estudiantes.filter(e => e.presente).length
    const ausentesHoy = estudiantes.length - presentesHoy

    const cambiarCurso = (cursoId: number) => {
        setCursoSeleccionado(cursoId)
        setEstudiantes(estudiantesPorCurso[cursoId])
    }

    const toggleAsistencia = (id: number) => {
        setEstudiantes(estudiantes.map(e => 
            e.id === id ? { ...e, presente: !e.presente } : e
        ))
    }

    const marcarTodos = (presente: boolean) => {
        setEstudiantes(estudiantes.map(e => ({ ...e, presente })))
    }

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case 'tomada': return 'bg-green-500/20 border-green-500/50 text-green-400'
            case 'pendiente': return 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
            case 'no_tomada': return 'bg-red-500/20 border-red-500/50 text-red-400'
            default: return 'bg-gray-800 border-gray-700 text-gray-500'
        }
    }

    const getEstadoIcon = (estado: string) => {
        switch (estado) {
            case 'tomada': return '✅'
            case 'pendiente': return '🟡'
            case 'no_tomada': return '🔴'
            default: return '⚪'
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] p-6'>
            <div className='max-w-[1600px] mx-auto'>
                {/* Header */}
                <div className='mb-8'>
                    <div className='flex items-center justify-between mb-6'>
                        <div>
                            <h1 className='text-5xl font-bold text-gray-100 mb-2'>
                                Asistencia
                            </h1>
                            <p className='text-xl text-gray-400'>Gestiona la asistencia de tus estudiantes</p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        <div className='bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-2xl p-5 relative overflow-hidden'>
                            <div className='absolute top-0 right-0 text-6xl opacity-10'>📚</div>
                            <div className='relative z-10'>
                                <p className='text-white/80 text-sm mb-1'>Clases del Mes</p>
                                <p className='text-4xl font-bold text-white'>20</p>
                                <p className='text-white/60 text-xs mt-1'>Diciembre 2024</p>
                            </div>
                        </div>

                        <div className='bg-[#0d1512] rounded-2xl p-5 border border-gray-800'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center'>
                                    <TrendingUp className='text-green-400' size={20} />
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm'>Promedio</p>
                                    <p className='text-3xl font-bold text-gray-100'>88%</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#0d1512] rounded-2xl p-5 border border-gray-800'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center'>
                                    <AlertTriangle className='text-yellow-400' size={20} />
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm'>Baja Asistencia</p>
                                    <p className='text-3xl font-bold text-gray-100'>2</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#0d1512] rounded-2xl p-5 border border-gray-800'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center'>
                                    <CheckCircle className='text-blue-400' size={20} />
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm'>Completadas</p>
                                    <p className='text-3xl font-bold text-gray-100'>15/20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Selector de Curso */}
                <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800 mb-6'>
                    <Text size='h6' className='text-white mb-4'>Selecciona un Curso</Text>
                    <div className='flex flex-wrap gap-3'>
                        {cursos.map((curso) => (
                            <button
                                key={curso.id}
                                onClick={() => cambiarCurso(curso.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                    cursoSeleccionado === curso.id
                                        ? 'bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white shadow-lg'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {curso.nombre}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {/* Calendario Semanal */}
                    <div className='lg:col-span-1'>
                        <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                            <div className='flex items-center gap-2 mb-6'>
                                <Calendar className='text-[#00A676]' size={24} />
                                <h3 className='text-xl font-bold text-white'>Semana Actual</h3>
                            </div>
                            <div className='space-y-3'>
                                {clasesSemanales.map((clase, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 rounded-xl border-2 transition-all ${getEstadoColor(clase.estado)}`}
                                    >
                                        <div className='flex items-center justify-between mb-2'>
                                            <div>
                                                <p className='font-bold text-sm'>{clase.dia}</p>
                                                <p className='text-xs opacity-80'>{clase.fecha}</p>
                                            </div>
                                            <span className='text-2xl'>{getEstadoIcon(clase.estado)}</span>
                                        </div>
                                        <p className='text-xs opacity-70'>{clase.hora}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-6 pt-6 border-t border-gray-800'>
                                <p className='text-xs text-gray-400 mb-3 font-semibold'>Leyenda:</p>
                                <div className='space-y-2 text-xs'>
                                    <div className='flex items-center gap-2'>
                                        <span>✅</span>
                                        <span className='text-gray-400'>Asistencia tomada</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span>🟡</span>
                                        <span className='text-gray-400'>Clase hoy (pendiente)</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span>⚪</span>
                                        <span className='text-gray-400'>Clase futura</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span>🔴</span>
                                        <span className='text-gray-400'>No tomada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel de Toma de Asistencia */}
                    <div className='lg:col-span-2 space-y-6'>
                        {/* Tomar Asistencia Hoy */}
                        <div className='bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-2xl p-6 relative overflow-hidden'>
                            <div className='absolute top-0 right-0 text-9xl opacity-10'>✓</div>
                            <div className='relative z-10'>
                                <h3 className='text-2xl font-bold text-white mb-2'>
                                    {cursoActual?.nombre} - Hoy
                                </h3>
                                <p className='text-white/80 mb-4'>Martes, 10 de Diciembre 2024 • 8:00 AM</p>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg'>
                                        <p className='text-white/80 text-xs'>Presentes</p>
                                        <p className='text-2xl font-bold text-white'>{presentesHoy}</p>
                                    </div>
                                    <div className='bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg'>
                                        <p className='text-white/80 text-xs'>Ausentes</p>
                                        <p className='text-2xl font-bold text-white'>{ausentesHoy}</p>
                                    </div>
                                    <div className='bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg'>
                                        <p className='text-white/80 text-xs'>Total</p>
                                        <p className='text-2xl font-bold text-white'>{estudiantes.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lista de Estudiantes */}
                        <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                            <div className='flex items-center justify-between mb-6'>
                                <div className='flex items-center gap-2'>
                                    <Users className='text-[#00A676]' size={24} />
                                    <h3 className='text-xl font-bold text-white'>Lista de Estudiantes</h3>
                                </div>
                                <div className='flex gap-2'>
                                    <button
                                        onClick={() => marcarTodos(true)}
                                        className='px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all text-sm font-semibold'
                                    >
                                        Todos Presentes
                                    </button>
                                    <button
                                        onClick={() => marcarTodos(false)}
                                        className='px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all text-sm font-semibold'
                                    >
                                        Todos Ausentes
                                    </button>
                                </div>
                            </div>

                            <div className='space-y-3'>
                                {estudiantes.map((estudiante) => (
                                    <div
                                        key={estudiante.id}
                                        onClick={() => toggleAsistencia(estudiante.id)}
                                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                            estudiante.presente
                                                ? 'bg-green-500/10 border-green-500/50 hover:bg-green-500/20'
                                                : 'bg-red-500/10 border-red-500/50 hover:bg-red-500/20'
                                        }`}
                                    >
                                        <div className='flex items-center gap-3'>
                                            <div className='w-10 h-10 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold text-sm'>
                                                {estudiante.nombre.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <p className='text-white font-semibold'>{estudiante.nombre}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            {estudiante.presente ? (
                                                <>
                                                    <span className='text-green-400 text-sm font-semibold'>Presente</span>
                                                    <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
                                                        <Check size={18} className='text-white' />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <span className='text-red-400 text-sm font-semibold'>Ausente</span>
                                                    <div className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center'>
                                                        <X size={18} className='text-white' />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button variant='primary' className='w-full mt-6 flex items-center justify-center gap-2'>
                                <Save size={20} />
                                Guardar Asistencia
                            </Button>
                        </div>

                        {/* Resumen de Asistencia */}
                        <div className='bg-[#0d1512] rounded-2xl p-6 border border-gray-800'>
                            <h3 className='text-xl font-bold text-white mb-6'>Resumen del Curso</h3>
                            <div className='overflow-x-auto'>
                                <table className='w-full'>
                                    <thead className='bg-[#0a0e0d] border-b border-gray-800'>
                                        <tr>
                                            <th className='px-4 py-3 text-left'>
                                                <Text size='small' className='text-gray-300 font-semibold'>Estudiante</Text>
                                            </th>
                                            <th className='px-4 py-3 text-center'>
                                                <Text size='small' className='text-gray-300 font-semibold'>Total</Text>
                                            </th>
                                            <th className='px-4 py-3 text-center'>
                                                <Text size='small' className='text-gray-300 font-semibold'>Presentes</Text>
                                            </th>
                                            <th className='px-4 py-3 text-center'>
                                                <Text size='small' className='text-gray-300 font-semibold'>Faltas</Text>
                                            </th>
                                            <th className='px-4 py-3 text-center'>
                                                <Text size='small' className='text-gray-300 font-semibold'>%</Text>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {resumenEstudiantes.map((est, idx) => (
                                            <tr key={idx} className='border-b border-gray-800 hover:bg-[#162019] transition-colors'>
                                                <td className='px-4 py-4'>
                                                    <Text size='p' className='text-white font-medium'>{est.nombre}</Text>
                                                </td>
                                                <td className='px-4 py-4 text-center'>
                                                    <Text size='small' className='text-gray-400'>{est.totalClases}</Text>
                                                </td>
                                                <td className='px-4 py-4 text-center'>
                                                    <Text size='small' className='text-green-400 font-semibold'>{est.asistencias}</Text>
                                                </td>
                                                <td className='px-4 py-4 text-center'>
                                                    <Text size='small' className='text-red-400 font-semibold'>{est.faltas}</Text>
                                                </td>
                                                <td className='px-4 py-4 text-center'>
                                                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold ${
                                                        est.porcentaje >= 90 ? 'bg-green-500/20 text-green-400' :
                                                        est.porcentaje >= 75 ? 'bg-yellow-500/20 text-yellow-400' :
                                                        'bg-red-500/20 text-red-400'
                                                    }`}>
                                                        {est.porcentaje}%
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asistencia
