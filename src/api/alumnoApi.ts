import axiosClient from "./axiosClient";

// 1. PERFIL
export const getProfileRequest = () => {
  return axiosClient.get('/alumno/perfil');
};

export const updateProfileRequest = (data: any) => {
  return axiosClient.put('/alumno/perfil', data);
};
// ... (tus otros imports y funciones)

// 5. CONTENIDO DEL CURSO (Aula Virtual: Links, PDFs, Grabaciones)
// Esta función llama a la ruta: GET /api/alumno/curso/:id/contenido
export const getCourseContentRequest = (idCurso: number) => {
  return axiosClient.get(`/alumno/curso/${idCurso}/contenido`);
};
// 2. ACADÉMICO (Catálogo y Mis Cursos)
export const getCatalogoRequest = () => {
  return axiosClient.get('/alumno/catalogo');
};

export const getMyCoursesRequest = () => {
  return axiosClient.get('/alumno/mis-cursos');
};

export const getAcademicRecordsRequest = () => {
  return axiosClient.get('/alumno/records');
};

export const getWeeklyGradesRequest = () => {
  return axiosClient.get('/alumno/notas-semanales');
};

export const getAcademicPerformanceRequest = () => {
  return axiosClient.get('/alumno/rendimiento');
};

// 3. MATRÍCULA Y PAGOS
// Paso 1: Matricularse (Genera estado 'pendiente_pago')
export const matriculaRequest = (idCurso: number) => {
  return axiosClient.post('/alumno/matricula', { idCurso });
};

// Paso 2: Pagar (Stripe o Simulado)
export const initiatePaymentRequest = (data: { idMatricula: number, amount: number, currency: string, description: string }) => {
  return axiosClient.post('/alumno/pagos/iniciar', data);
};

export const getPaymentHistoryRequest = () => {
  return axiosClient.get('/alumno/pagos/historial');
};

export const getFinancialRecordsRequest = () => {
  return axiosClient.get('/alumno/finanzas');
};

export const desmatricularRequest = (idMatricula: number) => {
  return axiosClient.delete(`/alumno/matricula/${idMatricula}`);
};

// 4. NOTIFICACIONES
export const getNotificationsRequest = () => {
  return axiosClient.get('/alumno/notificaciones');
};

export const markNotificationReadRequest = (id: number) => {
  return axiosClient.put(`/alumno/notificaciones/${id}/leer`);
};