import { TrendingUp, Users, BookOpen, DollarSign } from 'lucide-react'

const Resumen = () => {
    const stats = [
        {
            title: 'Total Estudiantes',
            value: '324',
            change: '+15%',
            icon: <Users size={24} />,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Cursos Activos',
            value: '18',
            change: '+2',
            icon: <BookOpen size={24} />,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Tasa de Aprobación',
            value: '87%',
            change: '+8%',
            icon: <TrendingUp size={24} />,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Ingresos Este Mes',
            value: 'S/ 45,000',
            change: '+10%',
            icon: <DollarSign size={24} />,
            color: 'from-orange-500 to-orange-600'
        }
    ]

    const inscripcionesMensuales = [
        { mes: 'Ene', valor: 50 },
        { mes: 'Feb', valor: 65 },
        { mes: 'Mar', valor: 70 },
        { mes: 'Abr', valor: 75 },
        { mes: 'May', valor: 72 },
        { mes: 'Jun', valor: 80 }
    ]

    const rendimientoCursos = [
        { curso: 'Álgebra', valor: 85 },
        { curso: 'Física', valor: 78 },
        { curso: 'Química', valor: 82 },
        { curso: 'Aritmética', valor: 90 },
        { curso: 'Geometría', valor: 75 }
    ]

    const actividadReciente = [
        { titulo: 'Nuevo estudiante registrado', detalle: 'María García', tiempo: 'Hace 2 min' },
        { titulo: 'Curso actualizado', detalle: 'Álgebra Avanzada', tiempo: 'Hace 1 hora' },
        { titulo: 'Examen completado', detalle: 'Física - Grupo A', tiempo: 'Hace 2 horas' },
        { titulo: 'Nuevo profesor asignado', detalle: 'Carlos Mendoza', tiempo: 'Hace 3 horas' }
    ]

    const maxInscripciones = Math.max(...inscripcionesMensuales.map(m => m.valor))
    const maxRendimiento = Math.max(...rendimientoCursos.map(c => c.valor))

    return (
        <div className='min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] p-6'>
            <div className='max-w-[1600px] mx-auto'>
                {/* Header */}
                <div className='mb-8'>
                    <h1 className='text-5xl font-bold text-gray-100 mb-2'>Resumen</h1>
                    <p className='text-xl text-gray-400'>Gestiona y administra el campus virtual QoriPreu</p>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                    {stats.map((stat, index) => (
                        <div key={index} className='bg-[#0d1512] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all'>
                            <div className='flex items-start justify-between mb-4'>
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                                    {stat.icon}
                                </div>
                                <span className='text-green-400 text-sm font-semibold'>{stat.change}</span>
                            </div>
                            <h3 className='text-gray-400 text-sm mb-1'>{stat.title}</h3>
                            <p className='text-3xl font-bold text-white'>{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
                    {/* Inscripciones Mensuales */}
                    <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
                        <h2 className='text-xl font-bold text-white mb-6'>Inscripciones Mensuales</h2>
                        <div className='space-y-4'>
                            {inscripcionesMensuales.map((item, index) => (
                                <div key={index}>
                                    <div className='flex items-center justify-between mb-2'>
                                        <span className='text-gray-400 text-sm'>{item.mes}</span>
                                        <span className='text-white font-semibold'>{item.valor}</span>
                                    </div>
                                    <div className='w-full bg-gray-800 rounded-full h-2'>
                                        <div
                                            className='bg-gradient-to-r from-[#006B4B] to-[#00A676] h-2 rounded-full transition-all'
                                            style={{ width: `${(item.valor / maxInscripciones) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rendimiento por Curso */}
                    <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
                        <h2 className='text-xl font-bold text-white mb-6'>Rendimiento por Curso</h2>
                        <div className='flex items-end justify-between h-64 gap-4'>
                            {rendimientoCursos.map((item, index) => (
                                <div key={index} className='flex-1 flex flex-col items-center gap-2'>
                                    <div className='w-full bg-[#0a1410] rounded-t-lg relative' style={{ height: `${(item.valor / maxRendimiento) * 100}%` }}>
                                        <div className='absolute inset-0 bg-gradient-to-t from-[#006B4B] to-[#00A676] rounded-t-lg' />
                                        <span className='absolute -top-6 left-1/2 -translate-x-1/2 text-white text-sm font-bold'>
                                            {item.valor}
                                        </span>
                                    </div>
                                    <span className='text-gray-400 text-xs text-center'>{item.curso}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Actividad Reciente */}
                <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
                    <h2 className='text-xl font-bold text-white mb-6'>Actividad Reciente</h2>
                    <div className='space-y-4'>
                        {actividadReciente.map((actividad, index) => (
                            <div key={index} className='flex items-center justify-between p-4 bg-[#0a1410] rounded-lg hover:bg-gray-800/50 transition-all'>
                                <div>
                                    <h3 className='text-white font-medium mb-1'>{actividad.titulo}</h3>
                                    <p className='text-gray-400 text-sm'>{actividad.detalle}</p>
                                </div>
                                <span className='text-gray-500 text-sm'>{actividad.tiempo}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resumen
