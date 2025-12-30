export type Alumno={
    Apellido:string,
    Correo:string,
    DNI:string,
    Nombre:string,
    Telefono:string
}
export type AlumnoValidacion={
    idMatricula:number,
    fechaMatricula:string,
    Estado:string,
    dniAlumno:string,
    nombreAlumno:string,
    apellidoAlumno:string,
    idCurso:number,
    nombreCurso:string,
    cupoMaximo:number,
    inscritosActuales:number
}
