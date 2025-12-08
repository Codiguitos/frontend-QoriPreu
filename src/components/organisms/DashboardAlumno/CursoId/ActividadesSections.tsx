import React from 'react'
import Actvidad from '../../../molecules/dashboard/Actvidad'
import Text from '../../../atoms/Text'
type actividad = {
    nombreActividad: string,
    fechaEntrega: string,
    horaEntrega: string,
    estado: "urgente" |"proximo",
}
const ActividadesSections = () => { 
    const actividades: actividad[] = [
        {
            nombreActividad: "Tarea de Matemáticas",
            fechaEntrega: "2024-07-10",
            horaEntrega: "23:59",
            estado: "proximo",
        },
        {
            nombreActividad: "Proyecto de Ciencias",
            fechaEntrega: "2024-07-15",
            horaEntrega: "17:00",
            estado: "urgente",
        },
    ];
    return (
        <section className='bg-[#0d1512] grid gap-5 rounded-xl p-6 border border-gray-800'>
            <Text size='h5' className='text-white'>Actividades Recientes</Text>
            <div className='grid gap-3'>
                {
                    actividades.map((actividad, index) => (
                        <Actvidad
                            key={index}
                            nombreActividad={actividad.nombreActividad}
                            fechaEntrega={actividad.fechaEntrega}
                            horaEntrega={actividad.horaEntrega}
                            estado={actividad.estado}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ActividadesSections