import axiosClient from "./axiosClient";

//       ---CRUD DOCENTES---
//Para crear docentes
export const createDocenteRequest = (data: any) => {
  return axiosClient.post(`/admin/docentes`, data);};

//para acualizar Docentes
export const updateDocenteRequest = (id:string,data: any) => {
  return axiosClient.put(`/admin/docentes/${id}`, data);};

//para eliminar Docentes
export const deleteDocenteRequest = (id:string) => {
  return axiosClient.delete(`/admin/docentes/${id}`);};

//para conseguir la lista de Docentes
export const getDocenteRequest = () => {
  return axiosClient.get(`/admin/docentes`);};

//       ---CRUD CURSOS---
//actualizar cursos
export const updateCursoRequest = (id:string,data: any) => {
  return axiosClient.post(`/admin/cursos/${id}`, data);};
//Crear cursos 
  export const createCursoRequest = (data: any) => {
  return axiosClient.post(`/admin/cursos`, data);};
//para conseguir la lista de cursos
export const getCursoRequest = () => {
  return axiosClient.get(`/admin/cursos`)};


