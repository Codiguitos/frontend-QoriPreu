import { AdminCursoCard } from "../../../molecules/Admin/AdminCursoCard";
import { useAdminStore } from "../../../../store/useAdminStore";
import { useEffect,useState } from "react";
import type { Curso } from "../../../../type/Curso";
import UpdateCurso from "./modals/UpdateCurso";
import DeleteCurso from "./modals/DeleteCurso";
import {FullScreenLoader} from "../../../molecules/Loading";
const inicionalForm:Curso = {
      idCurso: 0,
      nombreCurso: "",
      Descripcion: "",
      Precio: 0,
      cupoMaximo: 0, // ¡Te faltaba este campo en el input!
      Estado: 'activo',
      fechaInicio: "", // YYYY-MM-DD
      fechaFin: "",    // YYYY-MM-DD
      horarios: [],
      docenteAsignado:{
        codigoDocente: 0,
      }, 

}
export const CursosSection = () => {  
  const[openEdit,setOpenEdit]=useState(false);
  const[openDelete,setOpenDelete]=useState(false);
  const[selectCurso,setSelectCurso]=useState<Curso>(inicionalForm)
  const { cursos,getCursos,loadingCursos} = useAdminStore();
  useEffect(() => {
    getCursos();
  }, []);
  const handleEdit=(curso:Curso)=>{
      setSelectCurso(curso)
      setOpenEdit(true)
    }
    const handleDelete=(curso:Curso)=>{
      setSelectCurso(curso)
      setOpenDelete(true)
    }
  return (
    <div className='space-y-6'>
      {loadingCursos && <FullScreenLoader/>}
      {/* Aca se puede añadir un buscador o filtros para filtrar dependiendo */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cursos.map((curso) => (
          <AdminCursoCard
            key={curso.idCurso}
            curso={curso}
            onEdit={(c) =>handleEdit(c) }
            onDelete={(c) => handleDelete(c)}
          />
        ))}
        {openEdit && <UpdateCurso isOpen={openEdit} onClose={() => setOpenEdit(false)} cursoToEdit={selectCurso}/>}
        {openDelete && <DeleteCurso  onClose={() => setOpenDelete(false)} curso={selectCurso}/>}
      </div>
    </div>
  );
};
