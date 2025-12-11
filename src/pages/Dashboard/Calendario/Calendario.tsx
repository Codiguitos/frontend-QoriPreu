import React from 'react'
import HeroSection from '../../../components/organisms/DashboardAlumno/Calendario/HeroSection'
import HorarioSection from '../../../components/organisms/DashboardAlumno/Calendario/HorarioSection' 
const Calendario = () => {
  return (
    <div className='grid w-full p-8 gap-8'>
      <HeroSection />
      <HorarioSection />
    </div> 
  )
}

export default Calendario