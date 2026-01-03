// hooks/useUpdateDocente.ts
import { useState } from 'react';
import { useAdminStore } from '../../store/useAdminStore';
import { updateDocenteRequest } from '../../api/adminApi';
import type { UpdateDocentePayload } from '../../type/Docente';
import axios from 'axios';

export const useUpdateDocente = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getDocentes } = useAdminStore();

  const updateDocente = async (
    id: string, 
    data: UpdateDocentePayload
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      await updateDocenteRequest(id, data);
      await getDocentes();
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

  return { updateDocente, loading, error, clearError };
};