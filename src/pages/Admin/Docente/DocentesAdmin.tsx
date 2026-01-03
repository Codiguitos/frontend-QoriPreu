import { DocentesSection } from "../../../components/organisms/Admin/Docentes/DocentesSection"

import AddDocenteSection from "../../../components/organisms/Admin/Docentes/AddDocenteSection";
const DocentesAdmin = () => {

  return (
    <main className="w-full flex flex-col p-8 gap-8" >
     <AddDocenteSection/>
     <DocentesSection  />
    </main>
  )
}

export default DocentesAdmin