import { useEffect } from 'react'; // Importamos useEffect
import { Outlet, useLocation } from 'react-router'; // Importamos useLocation para rutas activas
import Nav from '../molecules/dashboard/Nav';
import { 
    Book, 
    BookOpen, 
    Video, 
    FileText, 
    Calendar, 
    Home, 
    Settings, 
    TrendingUp 
} from 'lucide-react';
import CerrarSesion from '../molecules/dashboard/CerrarSesion';
import { useAuthStore } from '../../store/useAuthStore';
import { useAlumnoStore } from '../../store/useAlumnoStore'; // 1. Importamos el store de alumno

const DashboardLayout = () => {
    const { logout, user } = useAuthStore();
    const location = useLocation();
   
    // 2. Traemos la función y el estado del store de alumno
    const { getCursos, cursos } = useAlumnoStore();

    // 3. Cargamos los cursos al montar el layout
    useEffect(() => {
        getCursos();
    }, []);
    console.log(cursos)
    // 4. Transformamos la data del backend al formato de tu menú
    // backend: { idCurso: 1, nombreCurso: "Matematica", ... }
    // frontend: { name: "Matematica", to: "...", icon: ... }
    // ✅ CÓDIGO CORREGIDO (Agregamos "|| []")
const cursosMenu = (cursos || []).map((curso) => ({
    name: curso.nombreCurso, 
    to: `/alumno/curso/${curso.idCurso}`, 
    icon: <BookOpen size={18} /> 
}));

    const items = [
        { name: "Inicio", to: "/alumno", icon: <Home /> },
        
        // 5. Lógica condicional: Solo mostramos la sección "Cursos" si hay cursos matriculados
        ...(cursosMenu.length > 0 ? [{
            name: "Mis Cursos",
            to: "#", // El padre no navega, solo despliega
            icon: <Book />, // Icono de la carpeta principal
            cursos: cursosMenu // Aquí van los hijos dinámicos
        }] : []),

        { name: "Calendario", to: "/alumno/Calendario", icon: <Calendar /> },
        // { name: "Mis Notas", to: "/alumno/mis-notas", icon: <TrendingUp /> },
        // { name: "Configuracion", to: "/alumno/Configuracion", icon: <Settings /> },
        { name: "Matricula", to: "/alumno/Matricula", icon: <FileText />} // Cambié icono para variar
    ];

  return (
    <div className='min-h-screen bg-linear-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] flex'>
        <div className='hidden sm:block border-r border-gray-800 h-screen sticky top-0 overflow-y-auto'>
          <div className="p-6 bg-linear-to-r from-[#006B4B] to-[#00A676]">
            <h1 className="text-2xl font-bold text-white">Qori<span className="text-[#FFB800]">Preu</span></h1>
            <p className="text-sm text-white/80 mt-1">Academia Cusco</p>
          </div>
          
          <Nav items={items}/>
          
           <div className="mt-auto">
             <CerrarSesion 
                name={user?.nombre || ""} 
                apellido={user?.apellido || ""} 
                rol={user?.rol || ""} 
                Logout={logout}
             />
           </div>
        </div>
        
        {/* Contenedor principal con scroll independiente */}
        <div className="flex-1 overflow-y-auto h-screen">
             <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout