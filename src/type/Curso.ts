import type { Alumno } from "./Alumno";
//Curso para admin
// El horario define la REPETICIÓN (El patrón)
export type Horario = {
    dia: string;        // "Lunes"
    horaInicio: string; // "08:00"
    horaFinal: string;    // "10:00"
}

// CursoInput (Lo que envías al crear)
export type CursoInput = {
    nombre: string;
    descripcion: string;
    precio: number;
    cupoMaximo: number; // ¡Te faltaba este campo en el input!
    estado: 'activo' | 'inactivo';
    fechaInicio: string; // YYYY-MM-DD
    fechaFin: string;    // YYYY-MM-DD
    schedules: Horario[];
    idDocente: number; 
}
export type CursoUpdate = {
    idCurso: number;
    nombre: string;
    descripcion: string;
    precio: number;
    cupoMaximo: number; // ¡Te faltaba este campo en el input!
    estado: 'activo' | 'inactivo';
    fechaInicio: string; // YYYY-MM-DD
    fechaFin: string;    // YYYY-MM-DD
    schedules: Horario[];
    idDocente: number; 
}
type Docente={
    codigoDocente:number,
    apellido?:string,
    nombre?:string,
    dni?:string,
}
export type Curso2={
    idCurso: number;
  nombreCurso: string;  // . resto de campos
  Descripcion: string;
  Precio: number; 
  cupoMaximo: number;
  Estado: 'activo' | 'inactivo';
  inscritos?:number
  fechaInicio: string;
  fechaFin: string;
  horarios: Horario[] ;
  docente?: Docente;
  estudiantes?: Alumno[];
}
export type Curso = {
  idCurso: number;
  nombreCurso: string;  // . resto de campos
  Descripcion: string;
  Precio: number; 
  cupoMaximo: number;
  Estado: 'activo' | 'inactivo';
  inscritos?:number
  fechaInicio: string;
  fechaFin: string;
  horarios: Horario[];
  docenteAsignado: Docente;
  estudiantes?: Alumno[];}
// 