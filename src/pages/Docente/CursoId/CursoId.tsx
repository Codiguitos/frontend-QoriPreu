import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDocenteStore } from '../../../store/useDocenteStore' // Importamos el Store
import CursoDocenteLayout from '../../../components/templates/CursoDocenteLayout'
import Swal from 'sweetalert2'

const CursoId = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // 1. Traemos todo lo necesario del Store
  const { 
    getCursoDetalle, 
    cursoActual, 
    loading, 
    subirMaterial, 
    actualizarLink,
    limpiarCursoActual 
  } = useDocenteStore();

  // 2. Cargamos la info del curso al entrar
  useEffect(() => {
    if (slug) {
      getCursoDetalle(Number(slug));
    }
    // Limpiamos la memoria al salir
    return () => limpiarCursoActual();
  }, [slug]);

  // 3. Función para manejar la subida de PDF
  const handleUpload = async (file: File, nombre: string) => {
    if (!slug) return;
    try {
      await subirMaterial(Number(slug), file, nombre);
      Swal.fire('Éxito', 'Material subido correctamente', 'success');
    } catch (error) {
      Swal.fire('Error', 'No se pudo subir el archivo', 'error');
    }
  }

  // 4. Función para guardar el Link
  const handleSaveLink = async (link: string) => {
    if (!slug) return;
    try {
      await actualizarLink(Number(slug), link);
      Swal.fire('Actualizado', 'El enlace de la clase se guardó', 'success');
    } catch (error) {
      Swal.fire('Error', 'No se pudo guardar el enlace', 'error');
    }
  }

  if (loading) return <div className="p-10 text-white">Cargando curso...</div>;
  if (!cursoActual) return <div className="p-10 text-white">No se encontró información.</div>;

  return (
    <CursoDocenteLayout 
        data={cursoActual} 
        onUpload={handleUpload} 
        onUpdateLink={handleSaveLink}
    />
  )
}

export default CursoId