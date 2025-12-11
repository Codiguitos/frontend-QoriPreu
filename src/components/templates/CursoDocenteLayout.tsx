import HeroSectionDocente from '../organisms/DashboardDocente/CursoId/HeroSectionDocente'
import MaterialSectionDocente from '../organisms/DashboardDocente/CursoId/MaterialSectionDocente'
import type { Material } from '../../type/MaterialITem'
import AccionesSectionDocente from '../organisms/DashboardDocente/CursoId/AccionesSectionDocente'
import ActividadesSectionDocente from '../organisms/DashboardDocente/CursoId/ActividadesSectionDocente'
import EstudiantesListSection from '../organisms/DashboardDocente/CursoId/EstudiantesListSection'

const CursoDocenteLayout = () => {
    const Curso = {
        nombreCurso: "Álgebra Avanzada",
        codigo: "ALG-201",
        estudiantes: 45,
        materiales: 12,
        aula: "201"
    }

    const materiales: Material[] = [
        { id: 1, title: "Ecuaciones Cuadráticas.pdf", type: "documento", url: "https://drive.google.com/ecuaciones.pdf" },
        { id: 2, title: "Video Tutorial - Álgebra.mp4", type: "video", url: "https://youtube.com/algebra_tutorial" },
        { id: 3, title: "Ejercicios Resueltos.pdf", type: "documento", url: "https://drive.google.com/ejercicios.pdf" }
    ]

    const estudiantes = [
        { id: 1, nombre: "Juan Pérez García", promedio: 16.5, asistencia: "95%" },
        { id: 2, nombre: "María López Torres", promedio: 14.8, asistencia: "92%" },
        { id: 3, nombre: "Carlos Mendoza Silva", promedio: 12.3, asistencia: "88%" },
        { id: 4, nombre: "Ana Rodríguez Díaz", promedio: 17.2, asistencia: "98%" },
        { id: 5, nombre: "Luis Fernández Cruz", promedio: 10.5, asistencia: "75%" }
    ]

    return (
        <div className='w-full grid gap-8 p-8 bg-[#0a0e0d] min-h-screen'>
            <HeroSectionDocente 
                nombreCurso={Curso.nombreCurso} 
                codigo={Curso.codigo} 
                estudiantes={Curso.estudiantes} 
                materiales={Curso.materiales}
                aula={Curso.aula}
            />
            <div className='grid md:grid-cols-[2.3fr_1fr] gap-8'>
                <div className='grid gap-8'>
                    <EstudiantesListSection estudiantes={estudiantes} />
                    <MaterialSectionDocente materiales={materiales} />
                    <ActividadesSectionDocente />
                </div>
                <div className='grid gap-8 h-max'>
                    <AccionesSectionDocente />
                </div>
            </div>
        </div>
    )
}

export default CursoDocenteLayout
