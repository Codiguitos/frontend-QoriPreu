import StatsCard from '../../../components/organisms/DashboardDocente/StatsCard'
import HorarioSemanaCard from '../../../components/organisms/DashboardDocente/HorarioSemanaCard'
import ActividadRecienteCard from '../../../components/organisms/DashboardDocente/ActividadRecienteCard'
import CursoDocenteCard from '../../../components/organisms/DashboardDocente/CursoDocenteCard'
import Text from '../../../components/atoms/Text'
import { BookOpen, Users, TrendingUp, Calendar } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {
    const navigate = useNavigate()
    const stats = [
        {
            icon: <BookOpen size={24} />,
            label: 'Cursos Asignados',
            value: '3',
            color: 'bg-blue-500'
        },
        {
            icon: <Users size={24} />,
            label: 'Total Estudiantes',
            value: '125',
            color: 'bg-green-500'
        },
        {
            icon: <TrendingUp size={24} />,
            label: 'Asistencia Promedio',
            value: '87%',
            color: 'bg-purple-500'
        },
        {
            icon: <Calendar size={24} />,
            label: 'Próximas Clases',
            value: '6',
            color: 'bg-orange-500'
        }
    ]

    const horarioSemana = [
        {
            nombre: 'Álgebra Avanzada',
            horario: 'Lunes - 9:00 - 11:00',
            aula: '201'
        },
        {
            nombre: 'Geometría Analítica',
            horario: 'Martes - 14:00 - 16:00',
            aula: '186'
        },
        {
            nombre: 'Álgebra Avanzada',
            horario: 'Miércoles - 9:00 - 11:00',
            aula: '201'
        },
        {
            nombre: 'Geometría Analítica',
            horario: 'Jueves - 14:00 - 16:00',
            aula: '186'
        },
        {
            nombre: 'Trigonometría',
            horario: 'Viernes - 10:00 - 12:00',
            aula: '202'
        }
    ]

    const actividadesRecientes = [
        {
            titulo: 'Calificaciones registradas',
            curso: 'Álgebra Avanzada',
            tiempo: '2 horas'
        },
        {
            titulo: 'Asistencia tomada',
            curso: 'Geometría Analítica',
            tiempo: '5 horas'
        },
        {
            titulo: 'Material subido',
            curso: 'Trigonometría',
            tiempo: '1 día'
        },
        {
            titulo: 'Examen programado',
            curso: 'Álgebra Avanzada',
            tiempo: '2 días'
        }
    ]

    const misCursos = [
        {
            nombre: 'Álgebra Avanzada',
            codigo: 'ALG-201',
            descripcion: 'Álgebra avanzada',
            estudiantes: 45,
            horario: 'Lun-Mie 9:00-11:00',
            aula: '201'
        },
        {
            nombre: 'Geometría Analítica',
            codigo: 'GEO-201',
            descripcion: 'Geometría analítica',
            estudiantes: 38,
            horario: 'Mar-Jue 14:00-16:00',
            aula: '186'
        },
        {
            nombre: 'Trigonometría',
            codigo: 'TRI-101',
            descripcion: 'Trigonometría',
            estudiantes: 42,
            horario: 'Vie 10:00-12:00',
            aula: '202'
        }
    ]

    return (
        <div className='w-full p-5 md:p-8 bg-[#0a0e0d] min-h-screen'>
            <div className='mb-6'>
                <Text size='h3' className='text-white mb-2'>Inicio</Text>
                <Text size='small' className='text-gray-400'>Bienvenido al portal de gestión docente</Text>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                {stats.map((stat, index) => (
                    <StatsCard
                        key={index}
                        icon={stat.icon}
                        label={stat.label}
                        value={stat.value}
                        color={stat.color}
                    />
                ))}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-8'>
                <HorarioSemanaCard clases={horarioSemana} />
                <ActividadRecienteCard actividades={actividadesRecientes} />
            </div>

            <div className='mb-6'>
                <Text size='h5' className='text-white mb-4'>Mis Cursos</Text>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {misCursos.map((curso, index) => (
                        <CursoDocenteCard
                            key={index}
                            nombre={curso.nombre}
                            codigo={curso.codigo}
                            descripcion={curso.descripcion}
                            estudiantes={curso.estudiantes}
                            horario={curso.horario}
                            aula={curso.aula}
                            onClick={() => navigate(`/docente/${curso.codigo}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Inicio
