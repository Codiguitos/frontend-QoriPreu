import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import AuthLayout from '../components/templates/AuthLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardAlumno from '../pages/Dashboard'
import DashboardLayout from '../components/templates/DashboardLayout'
import Inicio from '../pages/Dashboard/Inicio/Inicio'
import MisCursos from '../pages/Dashboard/MisCursos/MisCursos'
import Calendario from '../pages/Dashboard/Calendario/Calendario'
import MisNotas from '../pages/Dashboard/MisNotas/MisNotas'
import Configuracion from '../pages/Dashboard/Configuracion/Configuracion'
import CursoId from '../pages/Dashboard/CursoId/CursoId'
import DashboardDocenteLayout from '../components/templates/DashboardDocenteLayout'
import InicioDocente from '../pages/DashboardDocente/Inicio/Inicio'
import MisCursosDocente from '../pages/DashboardDocente/MisCursos/MisCursos'
import Estudiantes from '../pages/DashboardDocente/Estudiantes/Estudiantes'
import Asistencia from '../pages/DashboardDocente/Asistencia/Asistencia'
import ConfiguracionDocente from '../pages/DashboardDocente/Configuracion/Configuracion'
import CursoIdDocente from '../pages/DashboardDocente/CursoId/CursoId'
import DashboardAdminLayout from '../components/templates/DashboardAdminLayout'
import ResumenAdmin from '../pages/DashboardAdmin/Resumen/Resumen'
import UsuariosAdmin from '../pages/DashboardAdmin/Usuarios/Usuarios'
import CursosAdmin from '../pages/DashboardAdmin/Cursos/Cursos'
import ConfiguracionAdmin from '../pages/DashboardAdmin/Configuracion/Configuracion'
import Pagos from '../pages/Pagos/Pagos'
const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pagos",
      element: <Pagos />,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
      
    },
    {
      path: "/dashboard",
      element: <DashboardAlumno />,
      
    },
    {
      path:"/das",
      element:<DashboardLayout/>,
      children:[
        {
          index:true,
          element:<Inicio/>
        },
        {
          path:"Mis-cursos",
          element:<MisCursos/>
        },
        {
          path:"Calendario",
          element:<Calendario/>
        },
        {
          path:"Mis-notas",
          element:<MisNotas/>
        },
        {
          path:"Configuracion",
          element:<Configuracion/>
        },
        {
          path:`:slug`,
          element:<CursoId/>
        }
      ]
    },
    {
      path:"/docente",
      element:<DashboardDocenteLayout/>,
      children:[
        {
          index:true,
          element:<InicioDocente/>
        },
        {
          path:"mis-cursos",
          element:<MisCursosDocente/>
        },
        {
          path:"estudiantes",
          element:<Estudiantes/>
        },
        {
          path:"asistencia",
          element:<Asistencia/>
        },
        {
          path:"configuracion",
          element:<ConfiguracionDocente/>
        },
        {
          path:":slug",
          element:<CursoIdDocente/>
        }
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
