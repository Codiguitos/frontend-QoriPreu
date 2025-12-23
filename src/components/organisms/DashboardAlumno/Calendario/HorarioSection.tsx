import React from 'react'
import Horario from '../../../molecules/dashboard/Horario'
import Text from '../../../atoms/Text'

const HorarioSection = () => {
  return (
    <section className='bg-[#0d1512] grid h-max gap-5 rounded-xl p-6 border border-gray-800'>
        <Text size='h3' className='text-white mb-4'>Tu Horario Semanal</Text>
        <Horario />
    </section>
  )
}

export default HorarioSection