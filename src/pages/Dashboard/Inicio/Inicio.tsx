import React from 'react'
import CursosSection from '../../../components/organisms/DashboardAlumno/CursosSection'
import HeroSection from '../../../components/organisms/DashboardAlumno/HeroSection'
import NextClassSection from '../../../components/organisms/DashboardAlumno/NextClassSection'
const Inicio = () => {
  return (
    <div className='w-full p-5 grid gap-10'>
      <HeroSection/>
      <div className='grid  lg:grid-cols-[2.3fr_1fr] gap-10'>
        <CursosSection/>
        <NextClassSection/>
      </div>
    </div>
  )
}

export default Inicio