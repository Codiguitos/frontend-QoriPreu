// hooks/useUpdateDocente.ts
import { useState } from 'react';
import { useAdminStore } from '../../store/useAdminStore';
import { updateCursoRequest } from '../../api/adminApi';
import type { CursoInput } from '../../type/Curso';
import axios from 'axios';

export const useUpdateCurso = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getCursos } = useAdminStore();

  const updateCurso = async (
    id: number, 
    data: CursoInput
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      await updateCursoRequest(id, data);
      await getCursos();
      return true;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al actualizar docente");
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

  return { updateCurso, loading, error, clearError };
};