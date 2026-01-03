import React, { useEffect } from 'react';
import { useAlumnoStore } from '../../../store/useAlumnoStore';
import { useAuthStore } from '../../../store/useAuthStore';

import CursosSection from '../../../components/organisms/DashboardAlumno/CursosSection'
import HeroSection from '../../../components/organisms/DashboardAlumno/HeroSection'
import NextClassSection from '../../../components/organisms/DashboardAlumno/NextClassSection'

const Inicio = () => {
  // 1. Traemos las funciones del Store
  const { getCursos, getProfile, cursos, Profile, loadingCurso } = useAlumnoStore();
  const { user } = useAuthStore(); // Opcional, si Profile falla

  // 2. Cargamos todo al iniciar
  useEffect(() => {
    getCursos();
    getProfile();
  }, []);

  return (
    <div className='w-full p-5 grid gap-10'>
      {/* Pasamos los datos como props a los componentes hijos */}
      <HeroSection 
         nombreAlumno={Profile.Nombre || user?.nombre || "Estudiante"} 
         cantidadCursos={cursos?.length || 0}
      />
      
      <div className='grid lg:grid-cols-[2.3fr_1fr] gap-10'>
        {/* Pasamos la lista de cursos reales */}
        <CursosSection 
           cursos={cursos || []} 
           loading={loadingCurso}
        />
        
        <NextClassSection/>
      </div>
    </div>
  )
}

export default Inicio