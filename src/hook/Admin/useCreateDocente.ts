// hooks/useCreateDocente.ts
import { useState } from 'react';
import { createDocenteRequest } from '../../api/adminApi';
import { useAdminStore } from '../../store/useAdminStore';
import type { CreateDocentePayload } from '../../type/Docente';
import axios from 'axios';

export const useCreateDocente = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getDocentes } = useAdminStore();

  const createDocente = async (data: CreateDocentePayload): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      await createDocenteRequest(data);
      await getDocentes(); // Refresca cache
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

  return { createDocente, loading, error, clearError };
};