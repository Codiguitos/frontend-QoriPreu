import { create } from "zustand";
import { 
  getDocenteCursosRequest, 
  getDocenteCursoDetailRequest, 
  uploadMaterialRequest, 
  updateLinkClaseRequest 
} from "../api/docenteApi"; // Asegúrate que la ruta sea correcta
import type { CursoResumen, CursoDetalleFull } from "../type/Docente";

interface DocenteState {
  // --- ESTADO (Datos) ---
  cursos: CursoResumen[];            // Lista de mis cursos
  cursoActual: CursoDetalleFull | null; // Datos del curso que estoy viendo ahora
  loading: boolean;                  // Para mostrar spinners
  error: string | null;              // Para mostrar alertas de error

  // --- ACCIONES (Métodos) ---
  
  // 1. Obtener todos los cursos del docente
  getMisCursos: () => Promise<void>;

  // 2. Obtener detalle de un curso específico (ID)
  getCursoDetalle: (idCurso: number) => Promise<void>;

  // 3. Subir Material (PDF, PPT, etc)
  subirMaterial: (idCurso: number, file: File, nombre: string) => Promise<void>;

  // 4. Actualizar Link de la clase
  actualizarLink: (idCurso: number, link: string) => Promise<void>;

  // 5. Limpiar el curso actual (útil al salir de la pantalla de detalle)
  limpiarCursoActual: () => void;
}

export const useDocenteStore = create<DocenteState>((set, get) => ({
  // Estado Inicial
  cursos: [],
  cursoActual: null,
  loading: false,
  error: null,

  // --- IMPLEMENTACIÓN DE ACCIONES ---

  getMisCursos: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getDocenteCursosRequest();
      // Asumimos que el backend devuelve { success: true, data: [...] }
      set({ cursos: res.data.data });
    } catch (error: any) {
      console.error(error);
      set({ error: error.response?.data?.message || "Error al cargar cursos" });
    } finally {
      set({ loading: false });
    }
  },

  getCursoDetalle: async (idCurso) => {
    set({ loading: true, error: null });
    try {
      const res = await getDocenteCursoDetailRequest(idCurso);
      set({ cursoActual: res.data.data });
    } catch (error: any) {
      console.error(error);
      set({ error: error.response?.data?.message || "Error al cargar detalles del curso" });
    } finally {
      set({ loading: false });
    }
  },

  subirMaterial: async (idCurso, file, nombre) => {
    set({ loading: true, error: null });
    try {
      // Preparamos el FormData aquí para mantener limpio el componente
      const formData = new FormData();
      formData.append("archivo", file); // "archivo" debe coincidir con upload.single('archivo') del backend
      formData.append("nombre", nombre);

      await uploadMaterialRequest(idCurso, formData);

      // TRUCO: Volvemos a pedir los detalles para actualizar la lista de materiales en pantalla automáticamente
      await get().getCursoDetalle(idCurso); 
      
    } catch (error: any) {
      console.error(error);
      set({ error: error.response?.data?.message || "Error al subir material" });
      throw error; // Lanzamos error para que el componente muestre alerta (SweetAlert, etc)
    } finally {
      set({ loading: false });
    }
  },

  actualizarLink: async (idCurso, link) => {
    set({ loading: true, error: null });
    try {
      await updateLinkClaseRequest(idCurso, link);
      
      // Actualizamos el estado localmente para que se refleje rápido sin recargar todo
      const current = get().cursoActual;
      if (current) {
        set({
          cursoActual: {
            ...current,
            curso: { ...current.curso, linkReunion: link }
          }
        });
      }
    } catch (error: any) {
      console.error(error);
      set({ error: error.response?.data?.message || "Error al actualizar enlace" });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  limpiarCursoActual: () => {
    set({ cursoActual: null, error: null });
  }
}));