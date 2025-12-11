import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Tipos del login
export type LoginPayload = {
  correo: string;
  password: string;
}

// Tipo de registro
export type RegisterPayload = {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  dni: string;
  password: string;
  rol:string
}

// Login por rol
export const loginRequest = (rol: string, data: LoginPayload) => {
  return axios.post(`${API_URL}/login/${rol}`, data);
};

// Registro
export const registerRequest = (data: RegisterPayload) => {
  return axios.post(`${API_URL}/registro`, data);
};
