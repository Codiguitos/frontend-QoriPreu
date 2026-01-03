// src/type/Matricula.ts

export type EstadoMatricula = 
  | 'pendiente' 
  | 'confirmada' 
  | 'cancelada' 
  | 'rechazada' 
  | 'pendiente_pago' 
  | 'pendiente_validacion_admin';

// Definimos la estructura PLANA que viene del backend
export interface MatriculaValidacion {
  idMatricula: number;
  fechaMatricula: string;
  Estado: EstadoMatricula;
  
  // Datos directos (SIN anidar)
  dniAlumno: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  
  idCurso: number;
  nombreCurso: string;
  cupoMaximo: number;
  inscritosActuales?: number;
}