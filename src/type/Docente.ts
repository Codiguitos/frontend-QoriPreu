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