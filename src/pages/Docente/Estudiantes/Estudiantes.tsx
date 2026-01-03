import { useState } from 'react'
import Text from '../../../components/atoms/Text'
import EstudiantesTable from '../../../components/organisms/DashboardDocente/EstudiantesTable'

const Estudiantes = () => {
    const cursos = [
        { id: 1, nombre: 'Álgebra Avanzada', codigo: 'ALG-201' },
        { id: 2, nombre: 'Geometría Analítica', codigo: 'GEO-201' },
        { id: 3, nombre: 'Trigonometría', codigo: 'TRI-101' }
    ]

    const [cursoSeleccionado, setCursoSeleccionado] = useState(1)

    const estudiantesPorCurso: { [key: number]: any[] } = {
        1: [
            {
                id: 1,
                nombre: 'Juan Pérez García',
                dni: '72345678',
                email: 'juan.perez@email.com',
                telefono: '987654321',
                promedio: 16.5,
                asistencia: '95%'
            },
            {
                id: 2,
                nombre: 'María López Torres',
                dni: '73456789',
                email: 'maria.lopez@email.com',
                telefono: '987654322',
                promedio: 14.8,
                asistencia: '92%'
            },
            {
                id: 3,
                nombre: 'Carlos Mendoza Silva',
                dni: '74567890',
                email: 'carlos.mendoza@email.com',
                telefono: '987654323',
                promedio: 12.3,
                asistencia: '88%'
            },
            {
                id: 4,
                nombre: 'Ana Rodríguez Díaz',
                dni: '75678901',
                email: 'ana.rodriguez@email.com',
                telefono: '987654324',
                promedio: 17.2,
                asistencia: '98%'
            },
            {
                id: 5,
                nombre: 'Luis Fernández Cruz',
                dni: '76789012',
                email: 'luis.fernandez@email.com',
                telefono: '987654325',
                promedio: 10.5,
                asistencia: '75%'
            }
        ],
        2: [
            {
                id: 6,
                nombre: 'Sofia Vargas Ramos',
                dni: '77890123',
                email: 'sofia.vargas@email.com',
                telefono: '987654326',
                promedio: 15.6,
                asistencia: '90%'
            },
            {
                id: 7,
                nombre: 'Diego Castro Flores',
                dni: '78901234',
                email: 'diego.castro@email.com',
                telefono: '987654327',
                promedio: 13.9,
                asistencia: '85%'
            },
            {
                id: 8,
                nombre: 'Valentina Ruiz Morales',
                dni: '79012345',
                email: 'valentina.ruiz@email.com',
                telefono: '987654328',
                promedio: 16.8,
                asistencia: '96%'
            }
        ],
        3: [
            {
                id: 9,
                nombre: 'Sebastián Ortiz Vega',
                dni: '70123456',
                email: 'sebastian.ortiz@email.com',
                telefono: '987654329',
                promedio: 14.2,
                asistencia: '89%'
            },
            {
                id: 10,
                nombre: 'Isabella Campos Rojas',
                dni: '71234567',
                email: 'isabella.campos@email.com',
                telefono: '987654330',
                promedio: 17.5,
                asistencia: '99%'
            }
        ]
    }

    const estudiantesActuales = estudiantesPorCurso[cursoSeleccionado] || []
    const cursoActual = cursos.find(c => c.id === cursoSeleccionado)

    return (
        <div className='w-full p-5 md:p-8 bg-[#0a0e0d] min-h-screen'>
            <div className='mb-6'>
                <Text size='h3' className='text-white mb-2'>Estudiantes</Text>
                <Text size='small' className='text-gray-400'>Gestiona los estudiantes de tus cursos</Text>
            </div>

            <div className='bg-[#0d1512] rounded-xl p-6 border border-gray-800 mb-6'>
                <Text size='h6' className='text-white mb-4'>Selecciona un Curso</Text>
                <div className='flex flex-wrap gap-3'>
                    {cursos.map((curso) => (
                        <button
                            key={curso.id}
                            onClick={() => setCursoSeleccionado(curso.id)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                cursoSeleccionado === curso.id
                                    ? 'bg-gradient-to-r from-[#006B4B] to-[#00A676] text-white shadow-lg'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            {curso.nombre}
                        </button>
                    ))}
                </div>
            </div>

            <div className='mb-4'>
                <Text size='h5' className='text-white mb-2'>
                    {cursoActual?.nombre} ({cursoActual?.codigo})
                </Text>
                <Text size='small' className='text-gray-400'>
                    {estudiantesActuales.length} estudiantes matriculados
                </Text>
            </div>

            <EstudiantesTable estudiantes={estudiantesActuales} />
        </div>
    )
}

export default Estudiantes
