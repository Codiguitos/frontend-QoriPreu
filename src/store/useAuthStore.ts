import { create } from "zustand";
import { loginRequest, registerRequest } from "../api/authApi"; 
import type { LoginPayload, RegisterPayload } from "../api/authApi";

// Definimos la interfaz básica del usuario
interface User {
  id: string;
  nombre: string;
  apellido: string;
  rol: 'alumno' | 'docente' | 'administrador'; // Ajusta los roles exactos que usas
  // otros campos...
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null; // <--- NUEVO: Agregamos el usuario al estado
  loading: boolean;
  // loginUser ahora devuelve una promesa con el rol (string) para usarlo en la redirección
  loginUser: (data: LoginPayload) => Promise<string>; 
  registerUser: (data: RegisterPayload) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  user: {id:'',nombre:'',rol:'alumno',apellido:''}, // <--- Inicialmente null
  loading: false,

  loginUser: async (data) => {
    set({ loading: true });
    try {
      const res = await loginRequest(data);
      // Asumiendo que tu backend devuelve: { token: "...", usuario: { rol: "...", ... } }
      const { token, usuario } = res.data; 

      set({ token, user: usuario, isAuthenticated: true });
      
      // Guardamos en localStorage para persistencia
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(usuario)); // <--- Guardamos datos del usuario

      return usuario.rol; // <--- Retornamos el rol para que el componente lo use
    } catch (error) {
        throw error; // Re-lanzamos el error para que el componente lo capture
    } finally {
      set({ loading: false });
    }
  },

  registerUser: async (data) => {
    set({ loading: true });
    try {
      await registerRequest(data);
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    set({ token: null, user: null, isAuthenticated: false });
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // <--- Limpiamos usuario
  },
}));

// Recuperar sesión al recargar la página
if (typeof window !== "undefined") {
  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (storedToken && storedUser) {
    useAuthStore.setState({ 
        token: storedToken, 
        user: JSON.parse(storedUser), 
        isAuthenticated: true 
    });
  }
}