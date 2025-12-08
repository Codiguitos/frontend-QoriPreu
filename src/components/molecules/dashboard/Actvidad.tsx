import React from 'react'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
const estadoMap = {
    urgente: {
        style: "border-l-4  border-red-500 pl-4 py-4 bg-red-500/10 rounded-r-lg",
        color: "bg-red-500",
        span: "pendiente",
    },
    proximo: {
        style: "border-l-4 border-blue-500 pl-4 py-4 bg-blue-500/10 rounded-r-lg",
        color: "bg-blue-500",
        span: "proximo",
    },
}

type ActvidadProps = {
    nombreActividad: string,
    fechaEntrega: string,
    horaEntrega: string,
    estado: "urgente" |"proximo",
}
const Actvidad = ({ nombreActividad, fechaEntrega, horaEntrega, estado }: ActvidadProps) => {
  return (
    <article className={`flex ${estadoMap[estado].style}`}>
        <div className='grid gap-2'>
            <Text size='p' className='text-white font-semibold'>{nombreActividad}</Text>
            <Text size='small'>Fecha: {fechaEntrega} {horaEntrega}</Text>
            <Button variant='none' size='small' className={`text-sm ${estadoMap[estado].color} text-white`}>Entregar Tarea</Button>
        </div>
    </article>
  )
}

export default Actvidad