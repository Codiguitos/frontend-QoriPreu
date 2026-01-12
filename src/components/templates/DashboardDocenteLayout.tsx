import { useEffect } from 'react';
import { Outlet } from 'react-router';
import Nav from '../molecules/dashboard/Nav';
import { 
    Book, 
    BookOpen, 
    Home, 
    Users, 
    CheckSquare 
} from 'lucide-react';
import CerrarSesion from '../molecules/dashboard/CerrarSesion';
import { useAuthStore } from '../../store/useAuthStore';
import { useDocenteStore } from '../../store/useDocenteStore';

const DashboardDocenteLayout = () => {
    const { logout, user } = useAuthStore();
    
    // 1. Traemos los cursos del store docente
    const { getMisCursos, cursos } = useDocenteStore();

    // 2. Cargamos los cursos al entrar
    useEffect(() => {
        getMisCursos();
    }, []);

    // 3. TRANSFORMACIÓN DE DATOS (Backend -> Menu)
    // Aseguramos que solo mapéamos lo que existe.
    const cursosMenu = (cursos || []).map((curso) => ({
        name: curso.Nombre, // ⚠️ OJO: Tu backend docente devuelve "Nombre", no "nombreCurso"
        to: `/docente/curso/${curso.idCurso}`, 
        icon: <BookOpen size={18} /> 
    }));

    // 4. Construcción del Menú
    const items = [
        { name: "Inicio", to: "/docente", icon: <Home /> },
        
        // --- SECCIÓN MIS CURSOS ---
        // Solo se muestra si el docente tiene cursos asignados.
        // Dentro, solo aparecerán los nombres de sus cursos (Matemática, Álgebra, etc.)
        ...(cursosMenu.length > 0 ? [{
            name: "Mis Cursos",
            to: "#", 
            icon: <Book />, 
            cursos: cursosMenu // ✅ Aquí inyectamos SOLO la lista de cursos
        }] : []),

        // Otras opciones del docente (puedes quitarlas si solo quieres ver cursos)
        // { name: "Estudiantes", to: "/docente/estudiantes", icon: <Users /> },
        // { name: "Asistencia", to: "/docente/asistencia", icon: <CheckSquare /> },
    ];

  return (
    <div className='min-h-screen bg-linear-to-br from-[#0a0e0d] via-[#0d1512] to-[#0a0e0d] flex'>
        <div className='hidden sm:block border-r border-gray-800 h-screen sticky top-0 overflow-y-auto w-64'>
          {/* Header del Menú */}
          <div className="p-6 bg-gradient-to-r from-[#004b6b] to-[#007da6]">
            <h1 className="text-2xl font-bold text-white">Qori<span className="text-[#FFB800]">Preu</span></h1>
            <p className="text-sm text-white/80 mt-1">Panel Docente</p>
          </div>
          
          {/* Navegación */}
          <Nav items={items}/>
          
          {/* Footer del Menú */}
            <div className="mt-auto">
              <CerrarSesion 
                name={user?.nombre || "Docente"} 
                apellido={user?.apellido || ""} 
                rol={user?.rol || "docente"} 
                Logout={logout}
              />
            </div>
        </div>
        
        {/* Contenido Principal */}
        <div className="flex-1 overflow-y-auto h-screen">
             <Outlet/>
        </div>
    </div>
  )
}

export default DashboardDocenteLayout