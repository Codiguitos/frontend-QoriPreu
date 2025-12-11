import axiosClient from "./axiosClient";

export const profilRequest = (id: string) => {
  return axiosClient.get(`/alumno/${id}`);
};

export const cursosRequest = (id: string) => {
  return axiosClient.get(`/alumno/${id}/cursos`);
};
