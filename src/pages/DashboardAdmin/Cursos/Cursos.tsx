import { useState } from 'react'
import { Search, Plus, Edit2, Trash2, Users } from 'lucide-react'

const Cursos = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const cursos = [
        { id: 1, nombre: 'Álgebra Avanzada', codigo: 'ALG-201', profesor: 'Carlos Mendoza', estudiantes: 45, estado: 'Activo' },
        { id: 2, nombre: 'Física I', codigo: 'FIS-101', profesor: 'Ana López', estudiantes: 38, estado: 'Activo' },
        { id: 3, nombre: 'Química General', codigo: 'QUI-101', profesor: 'Pedro Sánchez', estudiantes: 42, estado: 'Activo' },
        { id: 4, nombre: 'Geometría Analítica', codigo: 'GEO-201', profesor: 'María García', estudiantes: 35, estado: 'Activo' },
        { id: 5, nombre: 'Trigonometría', codigo: 'TRI-101', profesor: 'Juan Pérez', estudiantes: 40, estado: 'Inactivo' }
    ]

    const getEstadoColor = (estado: string) => {
        return estado === 'Activo'
            ? 'bg-green-500/20 text-green-400 border-green-500/30'
            : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }

    const filteredCursos = cursos.filter(curso =>
        curso.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curso.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curso.profesor.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className='min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] p-6'>
            <div className='max-w-[1600px] mx-auto'>
                {/* Header */}
                <div className='mb-8'>
                    <h1 className='text-5xl font-bold text-gray-100 mb-2'>Cursos</h1>
                    <p className='text-xl text-gray-400'>Gestiona los cursos del campus virtual QoriPreu</p>
                </div>

                {/* Gestión de Cursos Card */}
                <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
                    <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-2xl font-bold text-white'>Gestión de Cursos</h2>
                        <button className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-lg hover:shadow-lg transition-all'>
                            <Plus size={20} />
                            <span className='font-semibold'>Nuevo Curso</span>
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className='mb-6 relative'>
                        <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
                        <input
                            type='text'
                            placeholder='Buscar por nombre, código o profesor...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full pl-12 pr-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#006B4B] transition-all'
                        />
                    </div>

                    {/* Courses Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredCursos.map((curso) => (
                            <div key={curso.id} className='bg-[#0a1410] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all'>
                                <div className='flex items-start justify-between mb-4'>
                                    <div className='flex-1'>
                                        <h3 className='text-white font-bold text-lg mb-1'>{curso.nombre}</h3>
                                        <p className='text-gray-400 text-sm'>{curso.codigo}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getEstadoColor(curso.estado)}`}>
                                        {curso.estado}
                                    </span>
                                </div>

                                <div className='space-y-3 mb-4'>
                                    <div className='flex items-center gap-2 text-gray-400 text-sm'>
                                        <Users size={16} />
                                        <span>{curso.estudiantes} estudiantes</span>
                                    </div>
                                    <div className='text-gray-400 text-sm'>
                                        <span className='text-gray-500'>Profesor:</span> {curso.profesor}
                                    </div>
                                </div>

                                <div className='flex items-center gap-2 pt-4 border-t border-gray-800'>
                                    <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all'>
                                        <Edit2 size={16} />
                                        <span className='text-sm'>Editar</span>
                                    </button>
                                    <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all'>
                                        <Trash2 size={16} />
                                        <span className='text-sm'>Eliminar</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursos
