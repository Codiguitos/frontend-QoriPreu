import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import AuthLayout from '../components/templates/AuthLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardAlumno from '../pages/Dashboard'
//Rutas del Alumno 
import DashboardLayout from '../components/templates/DashboardLayout'
import Inicio from '../pages/Alumno/Inicio/Inicio'
import MisCursos from '../pages/Alumno/MisCursos/MisCursos'
import Calendario from '../pages/Alumno/Calendario/Calendario'
import MisNotas from '../pages/Alumno/MisNotas/MisNotas'
import Configuracion from '../pages/Alumno/Configuracion/Configuracion'
import CursoId from '../pages/Alumno/CursoId/CursoId'
import Matricula from '../pages/Alumno/Matricula/Matricula'

//Rutas del Docente
import DashboardDocenteLayout from '../components/templates/DashboardDocenteLayout'
import InicioDocente from '../pages/Docente/Inicio/Inicio'
import MisCursosDocente from '../pages/Docente/MisCursos/MisCursos'
import Estudiantes from '../pages/Docente/Estudiantes/Estudiantes'
import Asistencia from '../pages/Docente/Asistencia/Asistencia'
import ConfiguracionDocente from '../pages/Docente/Configuracion/Configuracion'
import CursoIdDocente from '../pages/Docente/CursoId/CursoId'

import AdminDashboard from '../pages/Admin/DashboardAdmin'


//Rutas Admin
import AdminLayout from '../components/templates/AdminLayout'
import InicioAdmin from '../pages/Admin/Inicio/InicioAdmin'
import EstudiantesAdmin from '../pages/Admin/Estudiante/EstudiantesAdmin'
import CursosAdmin from '../pages/Admin/Cursos/CursosAdmin'
import DocentesAdmin from '../pages/Admin/Docente/DocentesAdmin'
import ConfiguracionAdmin from '../pages/Admin/Configuracion/ConfiguracionAdmin'
import CalendarioAdmin from '../pages/Admin/Calendario/CalendarioAdmin'

import ProtectedRoute from '../components/organisms/auth/ProtectedRoute'
const AppRoutes = () => {
  const routes = createBrowserRouter([
    {path: "/", element: <Home />,},
    {path:"/adminb",element:<AdminDashboard/>},
    
    { path: "/auth", element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },], },
    
    {path: "/das", element: <DashboardAlumno />,},
    {  path: "/alumno",
      // Envolvemos el Layout con el Guardia
      element: (
        <ProtectedRoute allowedRoles={['alumno']}>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Inicio /> },
        { path: "Mis-cursos", element: <MisCursos /> },
        { path: "Calendario", element: <Calendario /> },
        { path: "Mis-notas", element: <MisNotas /> },
        { path: "Matricula", element: <Matricula /> },
        { path: "Configuracion", element: <Configuracion /> },
        { path: "curso/:slug", element: <CursoId /> }      ]
    },

    // --- RUTAS DOCENTE (PROTEGIDAS) ---
    {
      path: "/docente",
      element: (
        <ProtectedRoute allowedRoles={['docente']}>
          <DashboardDocenteLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <InicioDocente /> },
        { path: "mis-cursos", element: <MisCursosDocente /> },
        { path: "estudiantes", element: <Estudiantes /> },
        { path: "asistencia", element: <Asistencia /> },
        { path: "configuracion", element: <ConfiguracionDocente /> },
        { path: ":slug", element: <CursoIdDocente /> }
      ]
    },

    // --- RUTAS ADMIN (PROTEGIDAS) ---
    {
      path: "/admin",
      element: (
        <ProtectedRoute allowedRoles={['administrador']}>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <EstudiantesAdmin /> },
        { path: "estudiantes", element: <EstudiantesAdmin /> },
        { path: "cursos", element: <CursosAdmin /> },
        { path: "docentes", element: <DocentesAdmin /> },
      ]
    },
    {
      path:"/admin",
      element:<DashboardAdminLayout/>,
      children:[
        {
          index:true,
          element:<ResumenAdmin/>
        },
        {
          path:"usuarios",
          element:<UsuariosAdmin/>
        },
        {
          path:"cursos",
          element:<CursosAdmin/>
        },
        {
          path:"configuracion",
          element:<ConfiguracionAdmin/>
        }
      ]
    }
  ]);

  return <RouterProvider router={routes} />;
}


export default AppRoutes;
