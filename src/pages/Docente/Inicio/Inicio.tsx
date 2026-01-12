import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CursoDocenteCard from '../../../components/organisms/DashboardDocente/CursoDocenteCard'
import Text from '../../../components/atoms/Text'
import { BookOpen } from 'lucide-react'
import { useDocenteStore } from '../../../store/useDocenteStore'

const Inicio = () => {
    const navigate = useNavigate()
    
    // 1. Consumimos el estado y la acción del store
    const { getMisCursos, cursos, loading } = useDocenteStore()

    // 2. Cargamos los cursos al montar el componente
    useEffect(() => {
        getMisCursos()
    }, [])

    if (loading) {
        return <div className="p-8 text-white">Cargando tus cursos...</div>
    }

    return (
        <div className='w-full p-5 md:p-8 bg-[#0a0e0d] min-h-screen'>
            <div className='mb-6'>
                <Text size='h3' className='text-white mb-2'>Mis Cursos Asignados</Text>
                <Text size='small' className='text-gray-400'>
                    Bienvenido al portal docente. Selecciona un curso para gestionar su contenido.
                </Text>
            </div>

            {/* 3. Renderizado de Cursos Reales */}
            {cursos.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {cursos.map((curso) => (
                        <CursoDocenteCard
                            key={curso.idCurso}
                            nombre={curso.Nombre} // Backend: Nombre (con mayúscula)
                            codigo={`CUR-${curso.idCurso}`} // Generamos un código visual
                            descripcion={curso.Descripcion || "Sin descripción disponible"}
                            estudiantes={curso.cupoMaximo} // Usamos el cupo como referencia
                            horario="Ver horario en detalle" // Este dato lo vemos al entrar al curso
                            aula="Aula Virtual"
                            // 4. Navegación a la vista de detalle que creamos antes
                            onClick={() => navigate(`/docente/curso/${curso.idCurso}`)}
                        />
                    ))}
                </div>
            ) : (
                // Estado vacío por si no tiene cursos
                <div className="flex flex-col items-center justify-center p-10 border border-gray-800 rounded-xl bg-[#0d1512]">
                    <BookOpen size={48} className="text-gray-600 mb-4" />
                    <Text size='h5' className='text-gray-400'>No tienes cursos asignados actualmente.</Text>
                </div>
            )}
        </div>
    )
}

export default Inicio