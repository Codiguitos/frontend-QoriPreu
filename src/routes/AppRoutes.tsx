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
const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default AppRoutes;
