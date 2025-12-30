import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CursoLayout from '../../../components/templates/CursoLayout';
import { useAlumnoStore } from '../../../store/useAlumnoStore';

const CursoId = () => {
  // 1. Obtenemos el ID de la URL (definido como :slug o :id en tu router)
  const { slug } = useParams<{ slug: string }>();
  
  // 2. Traemos el estado y la acción del store
  const { getCourseContent, currentCourse, loadingContent } = useAlumnoStore();

  useEffect(() => {
    if (slug) {
        // Convertimos el slug a número porque tu DB usa IDs numéricos
        getCourseContent(Number(slug));
    }
  }, [slug]);

  if (loadingContent) {
    return <div className="p-10 text-white">Cargando contenido del curso...</div>;
  }

  if (!currentCourse) {
    return <div className="p-10 text-white">No se encontró información del curso.</div>;
  }

  // 3. Pasamos la data REAL al layout
  return (
    <CursoLayout data={currentCourse} />
  );
}

export default CursoId;