import Text from '../../atoms/Text'
import { Mail, Phone } from 'lucide-react'

type Estudiante = {
    id: number,
    nombre: string,
    dni: string,
    email: string,
    telefono: string,
    promedio: number,
    asistencia: string
}

type EstudiantesTableProps = {
    estudiantes: Estudiante[]
}

const EstudiantesTable = ({ estudiantes }: EstudiantesTableProps) => {
    return (
        <div className='bg-[#0d1512] rounded-xl border border-gray-800 overflow-hidden'>
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead className='bg-[#0a0e0d] border-b border-gray-800'>
                        <tr>
                            <th className='px-6 py-4 text-left'>
                                <Text size='small' className='text-gray-300 font-semibold'>Estudiante</Text>
                            </th>
                            <th className='px-6 py-4 text-left'>
                                <Text size='small' className='text-gray-300 font-semibold'>DNI</Text>
                            </th>
                            <th className='px-6 py-4 text-left'>
                                <Text size='small' className='text-gray-300 font-semibold'>Contacto</Text>
                            </th>
                            <th className='px-6 py-4 text-center'>
                                <Text size='small' className='text-gray-300 font-semibold'>Promedio</Text>
                            </th>
                            <th className='px-6 py-4 text-center'>
                                <Text size='small' className='text-gray-300 font-semibold'>Asistencia</Text>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantes.map((estudiante) => (
                            <tr key={estudiante.id} className='border-b border-gray-800 hover:bg-[#162019] transition-colors'>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-10 h-10 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold text-sm'>
                                            {estudiante.nombre.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <Text size='p' className='text-white font-medium'>{estudiante.nombre}</Text>
                                    </div>
                                </td>
                                <td className='px-6 py-4'>
                                    <Text size='small' className='text-gray-400'>{estudiante.dni}</Text>
                                </td>
                                <td className='px-6 py-4'>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-2'>
                                            <Mail size={14} className='text-gray-500' />
                                            <Text size='small' className='text-gray-400'>{estudiante.email}</Text>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Phone size={14} className='text-gray-500' />
                                            <Text size='small' className='text-gray-400'>{estudiante.telefono}</Text>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4 text-center'>
                                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold ${
                                        estudiante.promedio >= 14 ? 'bg-green-500/20 text-green-400' :
                                        estudiante.promedio >= 11 ? 'bg-yellow-500/20 text-yellow-400' :
                                        'bg-red-500/20 text-red-400'
                                    }`}>
                                        {estudiante.promedio.toFixed(1)}
                                    </span>
                                </td>
                                <td className='px-6 py-4 text-center'>
                                    <Text size='small' className='text-gray-300 font-medium'>{estudiante.asistencia}</Text>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EstudiantesTable
