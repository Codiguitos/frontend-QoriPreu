// store/useAdminStore.ts
import { create } from "zustand";
// Asegúrate de que adminApi exporte estas funciones (como hicimos en el paso anterior)
import { 
  getDocentesRequest, 
  getCursosRequest, 
  getAlumnosRequest, 
  getMatriculasReviewRequest 
} from "../api/adminApi";
import { useAuthStore } from "./useAuthStore";

// Tipos (Asegúrate de tener estos archivos en tu carpeta /type)
import type { Docente } from "../type/Docente";
import type { Curso } from "../type/Curso";
import type { Alumno } from "../type/Alumno"; // Asumo que tienes un tipo Alumno base
import type { MatriculaValidacion } from "../type/Matricula";
interface AdminState {
  // 📊 DATOS (Cache)
  docentes: Docente[];
  cursos: Curso[];
  estudiantes: Alumno[]; 
  matriculasPendientes: MatriculaValidacion[]; // <--- NUEVO: Para validar pagos

  // ⏳ ESTADOS DE CARGA
  loadingDocentes: boolean;
  loadingEstudiantes: boolean;
  loadingCursos: boolean;
  loadingMatriculas: boolean;

  // ❌ ERRORES
  errorDocentes: string | null;
  errorEstudiantes: string | null;
  errorCursos: string | null;
  errorMatriculas: string | null;

  // 🔄 ACCIONES (GETters)
  getDocentes: () => Promise<void>;
  getEstudiantes: () => Promise<void>;
  getCursos: () => Promise<void>;
  getMatriculasRevision: () => Promise<void>; // <--- NUEVO

  // 🧹 UTILIDADES
  clearCache: () => void;
}

export const useAdminStore = create<AdminState>((set, get) => ({
  // --- ESTADO INICIAL ---
  docentes: [],
  estudiantes: [],
  cursos: [],
  matriculasPendientes: [],
  
  loadingDocentes: false,
  loadingEstudiantes: false,
  loadingCursos: false,
  loadingMatriculas: false,

  errorDocentes: null,
  errorEstudiantes: null,
  errorCursos: null,
  errorMatriculas: null,

  // --- 1. GET DOCENTES ---
  getDocentes: async () => {
    set({ loadingDocentes: true, errorDocentes: null });
    try {
      // Verificación de token (opcional si axiosClient ya lo maneja, pero buena práctica)
      const token = useAuthStore.getState().token;
      if (!token) throw new Error("No autenticado");

      const res = await getDocentesRequest();
      set({ docentes: res.data.data }); // Asumiendo estructura { data: { data: [] } } o ajusta según backend
    } catch (error) {
      set({
        errorDocentes: error instanceof Error ? error.message : "Error al obtener docentes",
      });
    } finally {
      set({ loadingDocentes: false });
    }
  },

  // --- 2. GET CURSOS ---
  getCursos: async () => {
    set({ loadingCursos: true, errorCursos: null });
    try {
      const res = await getCursosRequest();
      set({ cursos: res.data.data });
    } catch (error) {
      set({
        errorCursos: error instanceof Error ? error.message : "Error al obtener cursos",
      });
    } finally {
      set({ loadingCursos: false });
    }
  },

  // --- 3. GET ESTUDIANTES (Alumnos) ---
  getEstudiantes: async () => {
    set({ loadingEstudiantes: true, errorEstudiantes: null });
    try {
      const res = await getAlumnosRequest();
      set({ estudiantes: res.data.data });
    } catch (error) {
      set({
        errorEstudiantes: error instanceof Error ? error.message : "Error al obtener estudiantes",
      });
    } finally {
      set({ loadingEstudiantes: false });
    }
  },

  // --- 4. GET MATRÍCULAS PARA REVISIÓN (Validar Pagos) ---
  getMatriculasRevision: async () => {
    set({ loadingMatriculas: true, errorMatriculas: null });
    try {
      const res = await getMatriculasReviewRequest();
      set({ matriculasPendientes: res.data.data });
    } catch (error) {
      set({
        errorMatriculas: error instanceof Error ? error.message : "Error al obtener matrículas",
      });
    } finally {
      set({ loadingMatriculas: false });
    }
  },

  // --- LIMPIEZA ---
  clearCache: () => set({ 
    docentes: [], 
    estudiantes: [], 
    cursos: [],
    matriculasPendientes: []
  }),
}));