import CursoDocenteCard from '../../../components/organisms/DashboardDocente/CursoDocenteCard'
import Text from '../../../components/atoms/Text'
import { useNavigate } from 'react-router-dom'

const MisCursos = () => {
    const navigate = useNavigate()
    const cursos = [
        {
            nombre: 'Álgebra Avanzada',
            codigo: 'ALG-201',
            descripcion: 'Curso de álgebra para estudiantes avanzados, cubre ecuaciones complejas y sistemas lineales',
            estudiantes: 45,
            horario: 'Lun-Mie 9:00-11:00',
            aula: '201',
            activo: true
        },
        {
            nombre: 'Geometría Analítica',
            codigo: 'GEO-201',
            descripcion: 'Estudio de figuras geométricas mediante el álgebra y el análisis matemático',
            estudiantes: 38,
            horario: 'Mar-Jue 14:00-16:00',
            aula: '186',
            activo: true
        },
        {
            nombre: 'Trigonometría',
            codigo: 'TRI-101',
            descripcion: 'Fundamentos de trigonometría, funciones trigonométricas y aplicaciones',
            estudiantes: 42,
            horario: 'Vie 10:00-12:00',
            aula: '202',
            activo: true
        }
    ]

    return (
        <div className='w-full p-5 md:p-8 bg-[#0a0e0d] min-h-screen'>
            <div className='mb-6'>
                <Text size='h3' className='text-white mb-2'>Mis Cursos</Text>
                <Text size='small' className='text-gray-400'>Bienvenido al portal de gestión docente</Text>
            </div>

            <div className='mb-6'>
                <Text size='h6' className='text-white mb-4'>Cursos Asignados</Text>
                <Text size='small' className='text-gray-400 mb-6'>Tienes 3 cursos asignados este semestre</Text>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {cursos.map((curso, index) => (
                    <CursoDocenteCard
                        key={index}
                        nombre={curso.nombre}
                        codigo={curso.codigo}
                        descripcion={curso.descripcion}
                        estudiantes={curso.estudiantes}
                        horario={curso.horario}
                        aula={curso.aula}
                        activo={curso.activo}
                        onClick={() => navigate(`/docente/${curso.codigo}`)}
                    />
                ))}
            </div>
        </div>
    )
}

export default MisCursos
