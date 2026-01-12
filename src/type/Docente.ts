export type Docente={
    codigoDocente:number,
    Apellido:string,
    Correo:string,
    DNI:string,
    Nombre:string,
    Telefono:string
  }
export type DocenteInput={
    Apellido:string,
    Correo:string,
    DNI:string,
    Nombre:string,
    Telefono:string
    
}
export interface CreateDocentePayload {
  dni: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono?: string;
}
export interface UpdateDocentePayload {
  dni: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono?: string;
}
// src/type/Docente.ts

// 1. MATERIAL (Basado en la tabla 'Material')
export interface Material {
  idMaterial: number;
  idCurso: number;
  // En tu BD definiste enum('pdf','ppt','otro'), pero en el controller
  // a veces mapeamos video u otros, así que lo dejamos flexible:
  Tipo: 'pdf' | 'ppt' | 'video' | 'otro'; 
  url: string;           // Ej: "/uploads/material-123.pdf"
  NombreArchivo: string; // Ej: "Diapositivas Semana 1"
}

// 2. ALUMNO (Datos que devolvemos en el JOIN con 'Usuario')
export interface AlumnoInscrito {
  codigoAlumno: number;
  Nombre: string;
  Apellido: string;
  Correo: string;
  // Podrías agregar 'imgPerfil' si Usuario lo tuviera
}

// 3. CURSO COMPLETO (Reflejo exacto de la tabla 'Curso' en tu BD academiadb)
export interface CursoData {
  idCurso: number;
  Nombre: string;
  Descripcion: string;
  cupoMaximo: number;
  
  // Estos campos los agregamos con ALTER TABLE:
  Precio: number;        // DECIMAL en BD, suele llegar como number o string
  fechaInicio: string;   // DATE en BD llega como string ISO (2025-01-20T00:00:00.000Z)
  fechaFin: string;
  Estado: 'activo' | 'inactivo'; 
  linkReunion: string | null; // Puede ser NULL si el profe no lo puso
  img?: string;          // Opcional, si tienes imagen de portada
}

// 4. RESPUESTA PARA "MIS CURSOS" (Lista resumen)
// Usualmente es lo mismo que CursoData, pero a veces trae menos campos.
// Para simplificar, podemos reutilizar CursoData o hacer un Pick.
export type CursoResumen = CursoData; 

// 5. RESPUESTA PARA "DETALLE DEL CURSO"
// Esta es la estructura que devuelve tu controlador: getCursoDocenteById
export interface CursoDetalleFull {
  curso: CursoData;          // Objeto con toda la info del curso
  materiales: Material[];    // Array de materiales
  alumnos: AlumnoInscrito[]; // Array de alumnos matriculados
}