
import { AdminDocenteCard } from "../../../molecules/Admin/AdminDocenteCard";
import type { Docente } from "../../../../type/Docente";
import { useState,useEffect } from "react";
import UpdateDocente from "./modals/UpdateDocente";
import DeleteDocente from "./modals/DeleteDocente";
import { useAdminStore } from "../../../../store/useAdminStore";
import {FullScreenLoader} from "../../../molecules/Loading";
const inicionalForm:Docente = {
  codigoDocente: 0,
  DNI: '',
  Nombre: '',
  Apellido: '',
  Correo: '',
  Telefono: '',
};

export const DocentesSection = () => {
    const { getDocentes, docentes,loadingDocentes } = useAdminStore();
  useEffect(() => {
    getDocentes();
  }, []);
  const [selectDocente,setSelectDocente]=useState<Docente>(inicionalForm)
  const [openEditModal,setOpenEditModal]=useState(false)
  const [openDeleteModal,setOpenDeleteModal]=useState(false)
  const handleEdit=(docente:Docente)=>{
    setSelectDocente(docente)
    setOpenEditModal(true)
  }
  const handleDelete=(docente:Docente)=>{
    setSelectDocente(docente)
    setOpenDeleteModal(true)
  }
  return (

    <div className='space-y-6  w-full'>
      {loadingDocentes && <FullScreenLoader/>}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {docentes.map((docente) => (
          <AdminDocenteCard
            key={docente.DNI}
            docente={docente}
            onEdit={(d) => handleEdit(d)}
            onDelete={(d) => handleDelete(d)}
          />
        ))}
        {openEditModal && <UpdateDocente onClose={() => setOpenEditModal(false)} docente={selectDocente}/>}
        {openDeleteModal && <DeleteDocente onClose={() => setOpenDeleteModal(false)} docente={selectDocente}/>}
      </div>
    </div>
  );
};