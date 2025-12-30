import Nav from '../molecules/dashboard/Nav'
import { Outlet } from "react-router";
import { TrendingUp,BookOpen ,Users, UserCheck, Settings,LogOut} from "lucide-react";
import CerrarSesion from '../molecules/dashboard/CerrarSesion';
import { useAuthStore } from '../../store/useAuthStore';
const AdminLayout = () => {
  const {logout,user}=useAuthStore()
  const menuItems = [
    // { name: 'inicio', to: '/admin', icon: <TrendingUp/> },
    { name: 'cursos', to: '/admin/cursos', icon: <BookOpen/> },
    { name: 'docentes', to: '/admin/docentes', icon: <UserCheck/> },
    { name: 'estudiantes', to: '/admin/estudiantes', icon: <Users/> },
    // { name: 'configuracion', to: '/admin/configuracion', icon: <Settings/> },
    // { name: 'calendario', to: '/admin/Calendario', icon: <Calendar/> }
  ];
  return (
    <div className='| min-h-screen bg-linear-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] flex  '>
        <div className='hidden sm:block border-r border-gray-800'>
          <div className="p-6 bg-linear-to-r from-[#006B4B] to-[#00A676]">
            <h1 className="text-2xl font-bold text-white">Qori<span className="text-[#FFB800]">Preu</span></h1>
            <p className="text-sm text-white/80 mt-1">Academia Cusco</p>
          </div>
          <Nav items={menuItems}/>
          <CerrarSesion 
            name={user?.nombre || ""} 
            apellido={user?.apellido || ""} 
            rol={user?.rol || ""} 
            Logout={logout}
          />
        </div>
        <Outlet/>
    </div>
  );
};

export default AdminLayout;