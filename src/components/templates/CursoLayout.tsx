import React from 'react'
import HeroSection from '../organisms/DashboardAlumno/CursoId/HeroSection'
import MaterialSection from '../organisms/DashboardAlumno/CursoId/MaterialSection'
import type { Material } from '../../type/MaterialITem'
import AccionesSection from '../organisms/DashboardAlumno/CursoId/AccionesSection'
import TeacherSection from '../organisms/DashboardAlumno/CursoId/TeacherSection'
import ActividadesSections from '../organisms/DashboardAlumno/CursoId/ActividadesSections'
const CursoLayout = () => {
    const Curso={
        nombreCurso: "Matemática",
        nombreProfesor: "Juan Perez",
        progreso: 78,
        tareas: 3,
        materiales: 12
    }
    const materiales :Material[] = [
        { id: 1, title: "Introducción a la Álgebra.pdf", type: "documento", url: "https://drive.google.com/intro_algebra.pdf" },
        { id: 2, title: "Funciones y Gráficas.mp4", type: "video", url: "https://youtube.com/funciones_graficas" },
        { id: 3, title: "Ecuaciones Lineales.pdf", type: "documento", url: "https://drive.google.com/ecuaciones_lineales.pdf" }
    ]
    return (
        <div className='w-full grid gap-8 p-8'>
            <HeroSection nombreCurso={Curso.nombreCurso} nombreProfesor={Curso.nombreProfesor} progreso={Curso.progreso} tareas={Curso.tareas} materiales={Curso.materiales} />
            <div className='grid md:grid-cols-[2.3fr_1fr] gap-8'>
                <div className='grid gap-8'>
                    <MaterialSection materiales={materiales}/>
                    <ActividadesSections />
                </div>
                <div className='grid gap-8 h-max'>
                    <AccionesSection />
                    <TeacherSection />
                </div>
            </div>
        </div>
    )
}

export default CursoLayout