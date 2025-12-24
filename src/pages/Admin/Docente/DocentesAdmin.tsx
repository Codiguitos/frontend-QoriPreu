import { DocentesSection } from "../../../components/organisms/Admin/Docentes/DocentesSection"
import { useAdminStore } from "../../../store/useAdminStore"
import { useEffect } from "react";
import AddDocenteSection from "../../../components/organisms/Admin/Docentes/AddDocenteSection";
const DocentesAdmin = () => {
  const { getDocentes, docentes,loadingDocentes } = useAdminStore();
  useEffect(() => {
    getDocentes();
  }, []);
  if (loadingDocentes) return <p>Cargando...</p>;
  // console.log('lista Docente',docentes);
  return (
    <main className="w-full flex flex-col p-8">
     <AddDocenteSection/>
     <DocentesSection docentes={docentes} />
    </main>
  )
}

export default DocentesAdmin