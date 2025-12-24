import { Outlet } from 'react-router'
import Nav from '../molecules/dashboard/Nav'
import { 
    BookOpen, 
    Video, 
    FileText, 
    Calendar, 
    Home, 
    Settings, 
    TrendingUp 
} from 'lucide-react';
const DashboardLayout = () => {
  
  const cursos = [
        { name: "Matematica", to: "/das/Matematica", icon: <BookOpen /> },
        { name: "Quimica", to: "/das/Quimica", icon: <Video /> },
        { name: "Algebra", to: "/das/Algebra", icon: <FileText /> },
    ];
    const items = [
        { name: "Inicio", to: "/das", icon: <Home /> },
        { name: "Cursos",to:location.pathname, icon: <BookOpen />, cursos },
        { name: "Calendario", to: "/das/Calendario", icon: <Calendar /> },
        { name: "Mis Notas", to: "/das/mis-notas", icon: <TrendingUp /> },
        { name: "Configuracion", to: "/das/Configuracion", icon: <Settings /> }
    ];
  return (
    <div className='| min-h-screen bg-linear-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] flex  '>
        <div className='hidden sm:block border-r border-gray-800'>
          <div className="p-6 bg-linear-to-r from-[#006B4B] to-[#00A676]">
            <h1 className="text-2xl font-bold text-white">Qori<span className="text-[#FFB800]">Preu</span></h1>
            <p className="text-sm text-white/80 mt-1">Academia Cusco</p>
          </div>
          <Nav items={items}/>
        </div>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout