import Actvidad from '../../../molecules/dashboard/Actvidad'
import Text from '../../../atoms/Text'
import { Plus } from 'lucide-react'

type actividad = {
    nombreActividad: string,
    fechaEntrega: string,
    horaEntrega: string,
    estado: "urgente" | "proximo",
}

const ActividadesSectionDocente = () => {
    const actividades: actividad[] = [
        {
            nombreActividad: "Tarea: Resolver problemas 10-25",
            fechaEntrega: "2024-12-15",
            horaEntrega: "23:59",
            estado: "proximo",
        },
        {
            nombreActividad: "Examen Parcial",
            fechaEntrega: "2024-12-20",
            horaEntrega: "15:00",
            estado: "urgente",
        },
    ];

    return (
        <section className='bg-[#0d1512] grid gap-5 rounded-xl p-6 border border-gray-800'>
            <div className='flex justify-between items-center'>
                <Text size='h5' className='text-white'>Actividades Programadas</Text>
                <button className='flex items-center gap-2 px-4 py-2 bg-gradient text-white rounded-lg hover:shadow-lg transition-all'>
                    <Plus size={18} />
                    <span className='text-sm font-semibold'>Nueva Actividad</span>
                </button>
            </div>
            <div className='grid gap-3'>
                {actividades.map((actividad, index) => (
                    <Actvidad
                        key={index}
                        nombreActividad={actividad.nombreActividad}
                        fechaEntrega={actividad.fechaEntrega}
                        horaEntrega={actividad.horaEntrega}
                        estado={actividad.estado}
                    />
                ))}
            </div>
        </section>
    )
}

export default ActividadesSectionDocente
