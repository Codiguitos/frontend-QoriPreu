// src/type/CourseContent.ts

export interface MaterialBackend {
    idMaterial: number;
    Tipo: 'pdf' | 'ppt' | 'otro';
    url: string;
    etiqueta: string; // "Documento PDF", "Clase Grabada", etc.
}

export interface CursoDetalle {
    Nombre: string;
    Descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    
    // 👇 Agrega estos dos:
    nombreDocente?: string; 
    linkReunion?: string;
}

export interface CourseContentResponse {
    curso: CursoDetalle;
    materiales: MaterialBackend[];
}