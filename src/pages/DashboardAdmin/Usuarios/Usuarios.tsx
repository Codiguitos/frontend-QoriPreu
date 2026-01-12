import { useState } from 'react'
import { Search, UserPlus, Edit2, Trash2 } from 'lucide-react'

const Usuarios = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const usuarios = [
        { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@email.com', rol: 'Estudiante', curso: 'Álgebra', estado: 'Activo' },
        { id: 2, nombre: 'María García', email: 'maria.garcia@email.com', rol: 'Estudiante', curso: 'Física', estado: 'Activo' },
        { id: 3, nombre: 'Carlos Mendoza', email: 'carlos.m@email.com', rol: 'Profesor', curso: '', estado: 'Activo' },
        { id: 4, nombre: 'Ana López', email: 'ana.lopez@email.com', rol: 'Estudiante', curso: 'Química', estado: 'Inactivo' },
        { id: 5, nombre: 'Pedro Sánchez', email: 'pedro.s@email.com', rol: 'Administrador', curso: '', estado: 'Activo' }
    ]

    const getRolColor = (rol: string) => {
        switch (rol) {
            case 'Estudiante':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
            case 'Profesor':
                return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
            case 'Administrador':
                return 'bg-red-500/20 text-red-400 border-red-500/30'
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
        }
    }

    const getEstadoColor = (estado: string) => {
        return estado === 'Activo'
            ? 'bg-green-500/20 text-green-400 border-green-500/30'
            : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }

    const filteredUsuarios = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className='min-h-screen bg-gradient-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] p-6'>
            <div className='max-w-[1600px] mx-auto'>
                {/* Header */}
                <div className='mb-8'>
                    <h1 className='text-5xl font-bold text-gray-100 mb-2'>Usuarios</h1>
                    <p className='text-xl text-gray-400'>Gestiona y administra el campus virtual QoriPreu</p>
                </div>

                {/* Gestión de Usuarios Card */}
                <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
                    <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-2xl font-bold text-white'>Gestión de Usuarios</h2>
                        <button className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white rounded-lg hover:shadow-lg transition-all'>
                            <UserPlus size={20} />
                            <span className='font-semibold'>Nuevo Usuario</span>
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className='mb-6 relative'>
                        <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
                        <input
                            type='text'
                            placeholder='Buscar por nombre o email...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full pl-12 pr-4 py-3 bg-[#0a1410] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#006B4B] transition-all'
                        />
                    </div>

                    {/* Table */}
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border-b border-gray-800'>
                                    <th className='text-left py-4 px-4 text-gray-400 font-semibold text-sm'>Nombre</th>
                                    <th className='text-left py-4 px-4 text-gray-400 font-semibold text-sm'>Email</th>
                                    <th className='text-left py-4 px-4 text-gray-400 font-semibold text-sm'>Rol</th>
                                    <th className='text-left py-4 px-4 text-gray-400 font-semibold text-sm'>Curso</th>
                                    <th className='text-left py-4 px-4 text-gray-400 font-semibold text-sm'>Estado</th>
                                    <th className='text-left py-4 px-4 text-gray-400 font-semibold text-sm'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsuarios.map((usuario) => (
                                    <tr key={usuario.id} className='border-b border-gray-800 hover:bg-gray-800/30 transition-all'>
                                        <td className='py-4 px-4'>
                                            <div className='flex items-center gap-3'>
                                                <div className='w-10 h-10 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold text-sm'>
                                                    {usuario.nombre.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <span className='text-white font-medium'>{usuario.nombre}</span>
                                            </div>
                                        </td>
                                        <td className='py-4 px-4'>
                                            <span className='text-gray-400'>{usuario.email}</span>
                                        </td>
                                        <td className='py-4 px-4'>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRolColor(usuario.rol)}`}>
                                                {usuario.rol}
                                            </span>
                                        </td>
                                        <td className='py-4 px-4'>
                                            <span className='text-gray-400'>{usuario.curso || '-'}</span>
                                        </td>
                                        <td className='py-4 px-4'>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getEstadoColor(usuario.estado)}`}>
                                                {usuario.estado}
                                            </span>
                                        </td>
                                        <td className='py-4 px-4'>
                                            <div className='flex items-center gap-2'>
                                                <button className='p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all'>
                                                    <Edit2 size={18} />
                                                </button>
                                                <button className='p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all'>
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usuarios
