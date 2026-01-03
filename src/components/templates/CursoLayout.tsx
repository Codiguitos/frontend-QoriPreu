import React from 'react'
import HeroSection from '../organisms/DashboardAlumno/CursoId/HeroSection'
import MaterialSection from '../organisms/DashboardAlumno/CursoId/MaterialSection'
import AccionesSection from '../organisms/DashboardAlumno/CursoId/AccionesSection'
import TeacherSection from '../organisms/DashboardAlumno/CursoId/TeacherSection'
import ActividadesSections from '../organisms/DashboardAlumno/CursoId/ActividadesSections'

// Imports de tipos
import type { CourseContentResponse } from '../../type/CourseContent'
import type { Material } from '../../type/MaterialITem'

interface Props {
    data: CourseContentResponse;
}

const CursoLayout = ({ data }: Props) => {
    
    const { curso, materiales } = data;

    // 🔄 ADAPTADOR: Convertimos el formato del Backend al formato que espera tu componente MaterialSection
    // Backend: { idMaterial, Tipo, url, etiqueta }
    // Frontend Component: { id, title, type, url }
    const materialesAdaptados: Material[] = materiales.map(m => ({
        id: m.idMaterial,
        title: m.etiqueta || "Material sin título", // Usamos 'etiqueta' como título
        type: m.Tipo === 'pdf' ? 'documento' : m.Tipo === 'ppt' ? 'documento' : 'video', // Mapeo simple
        url: m.url
    }));

    return (
        <div className='w-full grid gap-8 p-8'>
            {/* Pasamos datos reales al Hero */}
            <HeroSection 
                nombreCurso={curso.Nombre} 
                nombreProfesor={curso.nombreDocente || "Profesor sin nombre"} // Si tu query no trae profe aun, deja un texto fijo o agrégalo al query
                materiales={materiales.length} 
            />
            
            <div className='grid md:grid-cols-[2.3fr_1fr] gap-8'>
                <div className='grid gap-8'>
                    {/* Pasamos los materiales reales */}
                    <MaterialSection materiales={materialesAdaptados}/>
                    {/* <ActividadesSections /> */}
                </div>
                <div className='grid gap-8 h-max'>
                    <AccionesSection link={curso.linkReunion} />
                    {/* <TeacherSection /> */}
                </div>
            </div>
        </div>
    )
}

export default CursoLayout