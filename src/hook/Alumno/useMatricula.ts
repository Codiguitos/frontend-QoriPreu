import { useState } from "react";
import { matriculaRequest } from "../../api/alumnoApi";
import { useAlumnoStore } from "../../store/useAlumnoStore";
import axios from "axios";

export const  useMatricula = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { getCursos } = useAlumnoStore();
    
    const matricula = async (idCurso: number): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try{
            await matriculaRequest(idCurso);
            await getCursos();
            return true;
         } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al matricularse");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido");
      }
      return false;
    } finally {
      setLoading(false);
    }}

    return { matricula, loading, error };
}