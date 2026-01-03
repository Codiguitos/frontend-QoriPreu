import Text from '../../atoms/Text'

type Actividad = {
    titulo: string,
    curso: string,
    tiempo: string
}

type ActividadRecienteCardProps = {
    actividades: Actividad[]
}

const ActividadRecienteCard = ({ actividades }: ActividadRecienteCardProps) => {
    return (
        <section className='bg-[#0d1512] rounded-xl p-6 border border-gray-800'>
            <Text size='h5' className='text-white mb-4'>Actividad Reciente</Text>
            <div className='grid gap-3'>
                {actividades.map((actividad, index) => (
                    <article 
                        key={index} 
                        className='p-4 bg-[#0a0e0d] rounded-lg border border-gray-800 hover:border-[#006B4B] transition-all'
                    >
                        <Text size='p' className='text-white font-semibold mb-1'>{actividad.titulo}</Text>
                        <Text size='small' className='text-gray-400'>{actividad.curso}</Text>
                        <Text size='small' className='text-gray-500 mt-1'>Hace {actividad.tiempo}</Text>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ActividadRecienteCard
