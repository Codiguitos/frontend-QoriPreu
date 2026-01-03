// hooks/useDeleteDocente.ts
import { useState } from 'react';
import { deleteDocenteRequest } from '../../api/adminApi';
import { useAdminStore } from '../../store/useAdminStore';
import axios from 'axios';

export const useDeleteDocente = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getDocentes } = useAdminStore();

  const deleteDocente = async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      await deleteDocenteRequest(id);
      await getDocentes();
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

  return { deleteDocente, loading, error, clearError };
};