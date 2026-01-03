import React from 'react'
import Text from '../../atoms/Text'
import GlassCard from '../../molecules/dashboard/GlassCard'
import { TrendingUp, BookOpen } from 'lucide-react'

// Definimos los Props que esperamos recibir
type HeroSectionProps = {
  nombreAlumno: string;
  cantidadCursos: number;
}

const HeroSection = ({ nombreAlumno, cantidadCursos }: HeroSectionProps) => {
  
  return (
    <section className='relative overflow-hidden bg-gradient rounded-2xl p-5 flex flex-col gap-4'>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
        
        <Text size='h2' className='text-white capitalize'>
            Bienvenido de vuelta, {nombreAlumno}
        </Text>
        <Text size='p' className='text-white'>
            Estás en camino a lograr tu ingreso a la UNSAAC
        </Text>
        
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-2'>
          <GlassCard 
              icon={<TrendingUp className='text-white' size={18}/>} 
              title='Progreso General' 
              number='5%' // Esto lo calcularemos más adelante
          />
          <GlassCard 
              icon={<BookOpen className='text-white' size={18}/>} 
              title='Cursos Activos' 
              number={cantidadCursos.toString()} 
          />
        </div>
    </section>
  )
}

export default HeroSection