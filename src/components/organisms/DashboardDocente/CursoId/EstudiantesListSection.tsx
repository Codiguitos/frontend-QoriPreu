import Text from '../../../atoms/Text'
import { Users } from 'lucide-react'

type Estudiante = {
    id: number,
    nombre: string,
    promedio: number,
    asistencia: string
}

type EstudiantesListSectionProps = {
    estudiantes: Estudiante[]
}

const EstudiantesListSection = ({ estudiantes }: EstudiantesListSectionProps) => {
    return (
        <section className='bg-[#0d1512] grid gap-5 rounded-xl p-6 border border-gray-800'>
            <div className='flex gap-2 items-center'>
                <div className="w-12 h-12 bg-gradient rounded-lg flex items-center justify-center">
                    <Users size={24} className="text-white" />
                </div>
                <Text size='h5' className='text-white'>Lista de Estudiantes</Text>
            </div>
            <div className='grid gap-3'>
                {estudiantes.map(estudiante => (
                    <article 
                        key={estudiante.id}
                        className='flex items-center justify-between p-4 bg-[#0a0e0d] rounded-lg hover:bg-[#162019] transition-all border border-gray-800 hover:border-[#006B4B]'
                    >
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-full flex items-center justify-center text-white font-bold text-sm'>
                                {estudiante.nombre.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <Text size='p' className='text-white font-semibold'>{estudiante.nombre}</Text>
                                <Text size='small' className='text-gray-400'>Asistencia: {estudiante.asistencia}</Text>
                            </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            estudiante.promedio >= 14 ? 'bg-green-500/20 text-green-400' :
                            estudiante.promedio >= 11 ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                        }`}>
                            {estudiante.promedio.toFixed(1)}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default EstudiantesListSection
