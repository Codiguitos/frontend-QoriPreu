// src/store/authStore.ts
import { create } from "zustand";
import { loginRequest, registerRequest} from "../api/authApi"; 
import type {LoginPayload, RegisterPayload } from "../api/authApi";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  loginUser: (rol: string, data: LoginPayload) => Promise<void>;
  registerUser: (data: RegisterPayload) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  loading: false,

  loginUser: async (rol, data) => {
    set({ loading: true });
    try {
      const res = await loginRequest(rol, data);
      const token = res.data.token;
      set({ token, isAuthenticated: true });
      localStorage.setItem("token", token);
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
    set({ token: null, isAuthenticated: false });
    localStorage.removeItem("token");
  },
}));

// Recuperar token al iniciar la app
// esto se asegura de que el estado persista entre recargas de página
if (typeof window !== "undefined") {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    useAuthStore.setState({ token: storedToken, isAuthenticated: true });
  }
}
