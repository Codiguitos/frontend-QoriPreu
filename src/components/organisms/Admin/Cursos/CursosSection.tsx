
import { AdminCursoCard } from "../../../molecules/Admin/AdminCursoCard";
import { useAdminStore } from "../../../../store/useAdminStore";
import { useEffect } from "react";
export const CursosSection = () => {  
  const { cursos,getCursos,loadingCursos} = useAdminStore();
  useEffect(() => {
    getCursos();
  }, []);
  console.log('lista cursos',cursos);
  return (
    <div className='space-y-6'>
      {/* Aca se puede añadir un buscador o filtros para filtrar dependiendo */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cursos.map((curso) => (
          <AdminCursoCard
            key={curso.idCurso}
            curso={curso}
            onEdit={(c) => console.log('Editar:', c)}
            onDelete={(c) => console.log('Eliminar:', c)}
          />
        ))}
      </div>
    </div>
  );
};
