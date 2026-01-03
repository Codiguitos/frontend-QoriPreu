import React from 'react'
import GlassCard from '../../../molecules/dashboard/GlassCard'
import Text from '../../../atoms/Text'
type HeroSectionProps = {
  nombreCurso: string,
  nombreProfesor: string,
  materiales: number
}                     
const HeroSection = ({nombreCurso, nombreProfesor,  materiales}: HeroSectionProps) => {
  return (
    <section className='rounded-2xl p-5 bg-blue-600 flex justify-between items-center '>
        <div className='grid gap-3'>
          <Text size='h3' className='text-white'>Curso de {nombreCurso}</Text>
          <Text size='p'>Prof. {nombreProfesor}</Text>
          <div className='flex gap-4'>
            <GlassCard title='Materiales' number={materiales.toString()}/>
          </div>
        </div>
    </section>
  )
}

export default HeroSection