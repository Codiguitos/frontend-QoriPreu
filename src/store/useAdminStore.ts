// store/useAdminStore.ts
import { create } from "zustand";
import { getDocenteRequest ,getCursoRequest} from "../api/adminApi";
import { useAuthStore } from "./useAuthStore";
import type { Docente } from "../type/Docente";
import type { Curso } from "../type/Curso";
// import type { Estudiante } from "../type/Estudiante";

interface AdminState {
  // 📊 DATOS COMPARTIDOS (cache)
  docentes: Docente[];
  // estudiantes: Estudiante[];
  cursos: Curso[];
  
  // ⏳ ESTADOS DE CARGA (solo para GETs)
  loadingDocentes: boolean;
  loadingEstudiantes: boolean;
  loadingCursos: boolean;
  
  // ❌ ERRORES (solo para GETs críticos)
  errorDocentes: string | null;
  errorEstudiantes: string | null;
  errorCursos: string | null;
  
  // 🔄 MÉTODOS DE LECTURA (GET)
  getDocentes: () => Promise<void>;
  // getEstudiantes: () => Promise<void>;
  getCursos: () => Promise<void>;
  
  // 🔍 FILTROS/BÚSQUEDA (estado compartido)
  // searchTerm: string;
  // setSearchTerm: (term: string) => void;
  // filteredDocentes: () => Docente[];
  
  // 🧹 UTILIDADES
  clearCache: () => void;
}

export const useAdminStore = create<AdminState>((set, get) => ({
  // Estado inicial
  docentes: [],
  // estudiantes: [],
  cursos: [],
  loadingDocentes: false,
  loadingEstudiantes: false,
  loadingCursos: false,
  errorDocentes: null,
  errorEstudiantes: null,
  errorCursos: null,
  searchTerm: '',

  // GET Docentes
  getDocentes: async () => {
    set({ loadingDocentes: true, errorDocentes: null });
    try {
      const token = useAuthStore.getState().token;
      if (!token) throw new Error("No autenticado");

      const res = await getDocenteRequest();
      set({ docentes: res.data.data });
    } catch (error) {
      set({
        errorDocentes:
          error instanceof Error ? error.message : "Error al obtener docentes",
      });
    } finally {
      set({ loadingDocentes: false });
    }
  },
  
  getCursos: async () => {
    set({ loadingCursos: true, errorCursos: null });
    try {
      const token = useAuthStore.getState().token;
      if (!token) throw new Error("No autenticado");

      const res = await getCursoRequest();
      set({ cursos: res.data.data });
    } catch (error) {
      set({
        errorCursos:
          error instanceof Error ? error.message : "Error al obtener docentes",
      });
    } finally {
      set({ loadingCursos: false });
    }
  },

  // // GET Estudiantes
  // getEstudiantes: async () => {
  //   set({ loadingEstudiantes: true, errorEstudiantes: null });
  //   try {
  //     const token = useAuthStore.getState().token;
  //     if (!token) throw new Error("No autenticado");

  //     const res = await getEstudiantesRequest();
  //     set({ estudiantes: res.data.data });
  //   } catch (error) {
  //     set({
  //       errorEstudiantes:
  //         error instanceof Error ? error.message : "Error al obtener estudiantes",
  //     });
  //   } finally {
  //     set({ loadingEstudiantes: false });
  //   }
  // },

  // Búsqueda/Filtros
  // setSearchTerm: (term) => set({ searchTerm: term }),
  
  // filteredDocentes: () => {
  //   const { docentes, searchTerm } = get();
  //   if (!searchTerm) return docentes;
    
  //   return docentes.filter(d => 
  //     d.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     d.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     d.dni.includes(searchTerm)
  //   );
  // },

  // Limpiar cache
  clearCache: () => set({ 
    docentes: [], 
    // estudiantes: [], 
    // cursos: [] 
  }),
}));