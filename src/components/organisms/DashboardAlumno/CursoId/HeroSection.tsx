import React from 'react'
import GlassCard from '../../../molecules/dashboard/GlassCard'
import Text from '../../../atoms/Text'
type HeroSectionProps = {
  nombreCurso: string,
  nombreProfesor: string,
  progreso: number,
  tareas: number,
  materiales: number
}                     
const HeroSection = ({nombreCurso, nombreProfesor, progreso, tareas, materiales}: HeroSectionProps) => {
  return (
    <section className='rounded-2xl p-5 bg-blue-600 flex justify-between items-center '>
        <div className='grid gap-3'>
          <Text size='h3' className='text-white'>Curso de {nombreCurso}</Text>
          <Text size='p'>Prof. {nombreProfesor}</Text>
          <div className='flex gap-4'>
            <GlassCard title='Materiales' number={materiales.toString()}/>
            <GlassCard title='Tareas' number={tareas.toString()}/>
          </div>
        </div>
        <GlassCard title='Tu progreso' number={`${progreso}%`}/>
    </section>
  )
}

export default HeroSection