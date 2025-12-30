import axiosClient from "./axiosClient";

// ==========================================
// 👨‍🏫 CRUD DOCENTES
// ==========================================
export const createDocenteRequest = (data: any) => {
  return axiosClient.post(`/admin/docentes`, data);
};

export const updateDocenteRequest = (dni: string, data: any) => {
  return axiosClient.put(`/admin/docentes/${dni}`, data);
};

export const deleteDocenteRequest = (dni: string) => {
  return axiosClient.delete(`/admin/docentes/${dni}`);
};

export const getDocentesRequest = () => {
  return axiosClient.get(`/admin/docentes`);
};

export const getDocenteByDniRequest = (dni: string) => {
  return axiosClient.get(`/admin/docentes/${dni}`);
};

// ==========================================
// 🎓 CRUD ALUMNOS (¡Te faltaba todo esto!)
// ==========================================
export const createAlumnoRequest = (data: any) => {
  return axiosClient.post(`/admin/alumnos`, data);
};

export const getAlumnosRequest = () => {
  return axiosClient.get(`/admin/alumnos`);
};

export const getAlumnoByDniRequest = (dni: string) => {
  return axiosClient.get(`/admin/alumnos/${dni}`);
};

export const updateAlumnoRequest = (dni: string, data: any) => {
  return axiosClient.put(`/admin/alumnos/${dni}`, data);
};

export const deleteAlumnoRequest = (dni: string) => {
  return axiosClient.delete(`/admin/alumnos/${dni}`);
};

// ==========================================
// 📚 CRUD CURSOS
// ==========================================
export const createCursoRequest = (data: any) => {
  return axiosClient.post(`/admin/cursos`, data);
};

export const getCursosRequest = () => {
  return axiosClient.get(`/admin/cursos`);
};

export const getCursoByIdRequest = (id: number) => {
  return axiosClient.get(`/admin/cursos/${id}`);
};

export const updateCursoRequest = (id: number, data: any) => {
  return axiosClient.put(`/admin/cursos/${id}`, data);
};

export const deleteCursoRequest = (id: number) => {
  return axiosClient.delete(`/admin/cursos/${id}`);
};

// ==========================================
// 🔗 ASIGNACIONES (Docente -> Curso)
// ==========================================
export const assignDocenteToCursoRequest = (idCurso: number, idDocente: number) => {
  return axiosClient.put(`/admin/cursos/${idCurso}/asignar-docente/${idDocente}`);
};

export const unassignDocenteFromCursoRequest = (idCurso: number, idDocente: number) => {
  return axiosClient.delete(`/admin/cursos/${idCurso}/desasignar-docente/${idDocente}`);
};

// ==========================================
// 📝 GESTIÓN DE MATRÍCULAS (Validar Pagos)
// ==========================================
export const getMatriculasReviewRequest = () => {
  return axiosClient.get(`/admin/matriculas`);
};

export const validateMatriculaRequest = (idMatricula: number) => {
  return axiosClient.put(`/admin/matriculas/${idMatricula}/validar`);
};

export const rejectMatriculaRequest = (idMatricula: number) => {
  return axiosClient.put(`/admin/matriculas/${idMatricula}/rechazar`);
};

// ==========================================
// 📊 REPORTES
// ==========================================
export const getReporteMatriculasRequest = () => {
  return axiosClient.get(`/admin/reportes/matriculas`, { responseType: 'blob' }); // blob es importante para descargar archivos
};

export const getReportePagosRequest = () => {
  return axiosClient.get(`/admin/reportes/pagos`, { responseType: 'blob' });
};

export const getReporteAsistenciasRequest = () => {
  return axiosClient.get(`/admin/reportes/asistencias`, { responseType: 'blob' });
};

// ==========================================
// 🛡️ ROLES Y PERMISOS (Opcional, si vas a hacer UI para esto)
// ==========================================
export const getRolesRequest = () => {
  return axiosClient.get(`/admin/roles`);
};

export const assignRoleToUserRequest = (data: { dni: string, idRol: number }) => {
  return axiosClient.post(`/admin/usuarios/rol`, data);
};