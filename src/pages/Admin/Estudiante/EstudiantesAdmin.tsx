import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

// 1. Imports del Store y API
import { useAdminStore } from '../../../store/useAdminStore';
import { validateMatriculaRequest, rejectMatriculaRequest } from '../../../api/adminApi';

import { MatriculasSection } from '../../../components/organisms/Admin/Estudiantes/MatriculaSection';
import HeroSection from '../../../components/organisms/Admin/Estudiantes/HeroSection';

// Definimos el tipo que espera tu componente visual (Flat)
export type MatriculaVisual = {
  idMatricula: number;
  fechaMatricula: string;
  Estado: 'pendiente' | 'confirmada' | 'cancelada' | 'pendiente_pago' | 'pendiente_validacion_admin' | 'rechazada'; // Actualizado con los estados reales de la BD
  dniAlumno: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  nombreCurso: string;
  idCurso: number;
  cupoMaximo: number;       // El store quizás no traiga esto en 'matricula', usaremos defaults o ajustaremos
  inscritosActuales: number; // Igual que arriba
  monto?: number;           // Dato extra útil para admin
  transaccion?: string;     // Dato extra útil
};

const EstudiantesAdmin = () => {
  // 2. CONEXIÓN CON EL STORE
  const { 
    matriculasPendientes, // La data que viene de la BD
    cursos,               // Los cursos reales
    getMatriculasRevision, 
    getCursos,
    loadingMatriculas 
  } = useAdminStore();

  // 3. ESTADO LOCAL (Filtros)
  const [statusFilter, setStatusFilter] = useState<string>('pendiente_validacion_admin'); // Default al más importante
  const [courseFilter, setCourseFilter] = useState<number | 'todos'>('todos');
  const [searchTerm, setSearchTerm] = useState("");

  // 4. CARGAR DATOS AL MONTAR (useEffect)
  useEffect(() => {
    getMatriculasRevision(); // Trae las matrículas
    getCursos();             // Trae los cursos para el dropdown
  }, []);

  // 5. ADAPTADOR (Mapping): Store (Anidado) -> Vista (Plano)
 // Dentro de EstudiantesAdmin.tsx

  // 5. ADAPTADOR (Mapping): Backend (Plano) -> Vista (Plano)
  const matriculasMapeadas: MatriculaVisual[] = matriculasPendientes.map((m) => ({
    idMatricula: m.idMatricula,
    fechaMatricula: m.fechaMatricula, // Tu backend manda 'fechaMatricula'
    Estado: m.Estado,                 // Tu backend manda 'Estado' con mayúscula
    
    // CORRECCIÓN: Leemos directo, sin buscar dentro de 'alumno'
    dniAlumno: m.dniAlumno,
    nombreAlumno: m.nombreAlumno,
    apellidoAlumno: m.apellidoAlumno,
    
    // CORRECCIÓN: Leemos directo, sin buscar dentro de 'curso'
    idCurso: m.idCurso,
    nombreCurso: m.nombreCurso,
    
    cupoMaximo: m.cupoMaximo, 
    inscritosActuales: m.inscritosActuales || 0,
    
    // Estos campos no vienen en este endpoint específico según la foto,
    // así que los dejamos vacíos o calculados si los necesitas.
    monto: 0, 
    transaccion: 'N/A'
  }));

  // 6. LÓGICA DE FILTRADO (Sobre la data mapeada)
  const filteredMatriculas = matriculasMapeadas.filter(m => {
    const matchStatus = statusFilter === 'todos' ? true : m.Estado === statusFilter;
    const matchCourse = courseFilter === 'todos' ? true : m.idCurso === Number(courseFilter);
    const searchLower = searchTerm.toLowerCase();
    
    const matchSearch = 
      m.nombreAlumno.toLowerCase().includes(searchLower) || 
      m.apellidoAlumno.toLowerCase().includes(searchLower) || 
      m.dniAlumno.includes(searchLower);
      
    return matchStatus && matchCourse && matchSearch;
  });

  // 7. HANDLERS REALES (Conexión a API)
  const handleValidate = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: '¿Aprobar matrícula?',
        text: "El alumno tendrá acceso inmediato al curso.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Sí, aprobar'
      });

      if (result.isConfirmed) {
        await validateMatriculaRequest(id);
        await Swal.fire('¡Aprobado!', 'La matrícula ha sido validada.', 'success');
        getMatriculasRevision(); // 🔄 Recargamos la tabla
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'No se pudo validar la matrícula', 'error');
    }
  };

  const handleReject = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: '¿Rechazar matrícula?',
        text: "Se marcará como rechazada.",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Sí, rechazar'
      });

      if (result.isConfirmed) {
        await rejectMatriculaRequest(id);
        await Swal.fire('Rechazada', 'La matrícula ha sido rechazada.', 'success');
        getMatriculasRevision(); // 🔄 Recargamos la tabla
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'No se pudo rechazar la matrícula', 'error');
    }
  };

  // 8. RENDERIZADO
  return (
    <main className='w-full p-6 space-y-6'>
      
      {/* Componente Hero: Controla los filtros */}
      <HeroSection 
        statusFilter={statusFilter as any} // Cast si los tipos difieren ligeramente
        setStatusFilter={setStatusFilter}
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        matriculas={matriculasMapeadas} // Pasamos la data real mapeada para contadores
        cursosDisponibles={cursos.map(c => ({ id: c.idCurso, nombre: c.nombreCurso }))} // Adaptamos cursos
      />

      {/* Componente Lista */}
      <MatriculasSection 
         matriculas={filteredMatriculas}
         loading={loadingMatriculas}
         onValidate={handleValidate}
         onReject={handleReject}
      />

    </main>
  );
}

export default EstudiantesAdmin;