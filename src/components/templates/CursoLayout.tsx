import React from 'react'
import HeroSection from '../organisms/DashboardAlumno/CursoId/HeroSection'
import MaterialSection from '../organisms/DashboardAlumno/CursoId/MaterialSection'
import AccionesSection from '../organisms/DashboardAlumno/CursoId/AccionesSection'
// import TeacherSection from '../organisms/DashboardAlumno/CursoId/TeacherSection'
// import ActividadesSections from '../organisms/DashboardAlumno/CursoId/ActividadesSections'

import type { CourseContentResponse } from '../../type/CourseContent'
import type { Material } from '../../type/MaterialITem'

interface Props {
    data: CourseContentResponse;
}

const CursoLayout = ({ data }: Props) => {
    
    // ✅ FIX: Valor por defecto para evitar el error de pantalla blanca
    const { curso, materiales = [] } = data;

    // URL del Backend
    const API_URL = import.meta.env.VITE_URL || 'http://localhost:4000';

    // 🔄 ADAPTADOR SEGURO
    const materialesAdaptados: Material[] = materiales.map(m => ({
        id: m.idMaterial,
        title: m.etiqueta || "Material sin título",
        type: m.Tipo === 'pdf' ? 'documento' : m.Tipo === 'ppt' ? 'documento' : 'video',
        // ✅ Corregimos la URL agregando el dominio si falta
        url: m.url?.startsWith('http') ? m.url : `${API_URL}${m.url}`
    }));

    return (
        <div className='w-full grid gap-8 p-8'>
            <HeroSection 
                nombreCurso={curso?.Nombre || "Curso"} 
                nombreProfesor={curso?.nombreDocente || "Docente asignado"} 
                materiales={materiales.length} 
            />
            
            <div className='grid md:grid-cols-[2.3fr_1fr] gap-8'>
                <div className='grid gap-8'>
                    <MaterialSection materiales={materialesAdaptados}/>
                </div>
                <div className='grid gap-8 h-max'>
                    <AccionesSection link={curso?.linkReunion || ""} />
                </div>
            </div>
        </div>
    )
}

export default CursoLayout