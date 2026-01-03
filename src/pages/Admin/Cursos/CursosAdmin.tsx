import HeroSection from "../../../components/organisms/Admin/Cursos/HeroSection"
import { CursosSection } from "../../../components/organisms/Admin/Cursos/CursosSection"

const AdminCursos = () => {
  return (
    <div className="w-full flex flex-col gap-8 p-8"> 
      <HeroSection/>
      <CursosSection/>
    </div>
  )
}

export default AdminCursos