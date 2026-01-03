// hooks/useCreateDocente.ts
import { useState } from 'react';
import { createCursoRequest } from '../../api/adminApi';
import { useAdminStore } from '../../store/useAdminStore';
import type { CursoInput } from '../../type/Curso';
import axios from 'axios';

export const useCreateCurso = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getCursos } = useAdminStore();

  const createCurso = async (data: CursoInput): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      await createCursoRequest(data);
      await getCursos(); // Refresca cache
      return true;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al crear docente");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido");
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);
  return { createCurso, loading, error, clearError };
};