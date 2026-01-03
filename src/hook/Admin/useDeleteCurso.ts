// hooks/useDeleteDocente.ts
import { useState } from 'react';
import { deleteCursoRequest } from '../../api/adminApi';
import { useAdminStore } from '../../store/useAdminStore';
import axios from 'axios';

export const useDeleteCurso = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getCursos } = useAdminStore();

  const deleteCurso = async (id: number): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      await deleteCursoRequest(id);
      await getCursos();
      return true;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al eliminar docente");
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

  return { deleteCurso, loading, error, clearError };
};