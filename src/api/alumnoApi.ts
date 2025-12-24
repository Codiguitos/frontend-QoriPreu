import axiosClient from "./axiosClient";
//Para conseguir los datos de un alumno por ID
export const profilRequest = (id: string) => {
  return axiosClient.get(`/alumno/${id}`);
};
//para conseguir los cursos de un alumno 
export const cursosRequest = (id: string) => {
  return axiosClient.get(`/alumno/${id}/cursos`);
};
