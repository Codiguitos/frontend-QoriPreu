import axiosClient from "./axiosClient";

// ==========================================
// 1. GESTIÓN DE CURSOS
// ==========================================

// Obtener la lista de cursos asignados al docente
export const getDocenteCursosRequest = () => {
  return axiosClient.get('/docente/mis-cursos');
};

// Obtener el detalle de un curso específico (Materiales, Alumnos, Info)
export const getDocenteCursoDetailRequest = (idCurso: number) => {
  return axiosClient.get(`/docente/curso/${idCurso}`);
};

// ==========================================
// 2. GESTIÓN DE CONTENIDO (Materiales)
// ==========================================

// Subir archivo (PDF, PPT, Video). Requiere FormData.
export const uploadMaterialRequest = (idCurso: number, formData: FormData) => {
  return axiosClient.post(`/docente/curso/${idCurso}/material`, formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Importante para subir archivos
    },
  });
};

// ==========================================
// 3. CONFIGURACIÓN DE CLASE (Zoom/Meet)
// ==========================================

// Actualizar el enlace de la clase en vivo
export const updateLinkClaseRequest = (idCurso: number, link: string) => {
  return axiosClient.put(`/docente/curso/${idCurso}/link`, { link });
};

// ==========================================
// 4. EXTRAS (Futuras implementaciones)
// ==========================================

// Aquí podrías agregar funciones para llamar lista, subir notas, etc.
// export const tomarAsistenciaRequest = (idCurso: number, data: any) => ...