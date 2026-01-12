import React from 'react'
import { useNavigate } from 'react-router-dom';
import CursoCard from '../../molecules/dashboard/CursoCard'
import { BookOpen } from 'lucide-react';
import Text from '../../atoms/Text';

// Importamos el Tipo de dato 'Curso'
import type { Curso2 as Curso} from '../../../type/Curso'; // Asegúrate de tener este tipo o úsalo inline

type Props = {
    cursos: Curso[]; // Recibimos la lista real
    loading: boolean;
}

const CursosSection = ({ cursos, loading }: Props) => {
    const navigate = useNavigate();

    // Función para navegar al detalle
    const handleCursoClick = (id: number) => {
        navigate(`/alumno/curso/${id}`);
    }

    if (loading) return <div className="text-white">Cargando tus cursos...</div>;

    if (cursos.length === 0) {
        return (
            <section>
                 <Text size='h5' className='text-white mb-3'>Mis Cursos</Text> 
                 <div className="p-10 border border-dashed border-gray-700 rounded-xl text-center text-gray-400">
                    No tienes cursos activos. ¡Ve a Matrícula para inscribirte!
                 </div>
            </section>
        )
    }

    return (
        <section>
            <Text size='h5' className='text-white mb-3'>Mis Cursos</Text> 
            <div className='grid md:grid-cols-2 gap-5'>
                {cursos.map((curso) => (
                    <div key={curso.idCurso} onClick={() => handleCursoClick(curso.idCurso)} className="cursor-pointer">
                        <CursoCard 
                            name={curso.nombreCurso} 
                            icon={<BookOpen className='text-white' />} 
                            teacher={curso.docente ? `${curso.docente.nombre} ${curso.docente.apellido}` : "Docente por asignar"} 
                           
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CursosSection