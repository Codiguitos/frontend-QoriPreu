import React from 'react'
import Text from '../../atoms/Text'
import GlassCard from '../../molecules/dashboard/GlassCard'
import {TrendingUp,Award,FileText,BookOpen} from 'lucide-react'

type HeroSectionProps = {
  nombreAlumno: string
}
const HeroSection = () => {
  const nombreAlumno = "Elvis"
  return (
    <section className=' relative overflow-hidden bg-gradient rounded-2xl p-5 flex flex-col gap-4 '>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
        <Text size='h2' className='text-white'>Bienvenido de Vuelta ,{nombreAlumno}</Text>
        <Text size='p' className='text-white'>Estas en camino a lograr tu ingreso a la UNSAAC</Text>
        <div className='grid grid-cols-3 gap-3'>
          <GlassCard icon={<TrendingUp  className='text-white' size={18}/>} title='Progreso General' number='5%'/>
          <GlassCard icon={<BookOpen className='text-white' size={18}/>} title='Cursos Activos' number='120'/>
          <GlassCard icon={<FileText className='text-white' size={18}/>} title='Tareas Pendientes' number='30'/>
        </div>
    </section>
  )
}

export default HeroSection