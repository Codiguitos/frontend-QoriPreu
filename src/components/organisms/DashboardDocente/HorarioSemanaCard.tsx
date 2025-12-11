import Text from '../../atoms/Text'
import { Clock } from 'lucide-react'

type ClaseHorario = {
    nombre: string,
    horario: string,
    aula: string
}

type HorarioSemanaCardProps = {
    clases: ClaseHorario[]
}

const HorarioSemanaCard = ({ clases }: HorarioSemanaCardProps) => {
    return (
        <section className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
            <Text size='h5' className='text-white mb-4'>Horario de la Semana</Text>
            <div className='grid gap-3'>
                {clases.map((clase, index) => (
                    <article 
                        key={index} 
                        className='flex items-center gap-3 p-4 bg-[#0a0e0d] rounded-lg border border-gray-800 hover:border-[#006B4B] transition-all'
                    >
                        <div className='w-12 h-12 bg-gradient-to-br from-[#006B4B] to-[#00A676] rounded-lg flex items-center justify-center text-white font-bold'>
                            {clase.nombre.charAt(0)}
                        </div>
                        <div className='flex-1'>
                            <Text size='p' className='text-white font-semibold'>{clase.nombre}</Text>
                            <div className='flex items-center gap-4 mt-1'>
                                <Text size='small' className='text-gray-400 flex items-center gap-1'>
                                    <Clock size={14} /> {clase.horario}
                                </Text>
                                <Text size='small' className='text-gray-400'>Aula {clase.aula}</Text>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default HorarioSemanaCard
