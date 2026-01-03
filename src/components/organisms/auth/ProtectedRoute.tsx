import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../../store/useAuthStore';
interface ProtectedRouteProps {
  allowedRoles: string[];
  children?: React.ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { isAuthenticated, user, loading } = useAuthStore();

  if (loading) {
    return <div>Cargando autenticación...</div>; // O tu componente de Spinner
  }

  // 1. Si no está autenticado, mandar al login
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  // 2. Si está autenticado pero el rol no coincide (ej: Alumno intentando entrar a Admin)
  // Usamos user?.rol asumiendo que tu objeto user tiene esa propiedad
  if (user && !allowedRoles.includes(user.rol)) {
    // Lo redirigimos a su dashboard correcto o al home
    return <Navigate to="/" replace />;
  }

  // 3. Si todo está bien, renderizamos el contenido
  // Si se pasa 'children' (como envoltorio) lo usa, si no, usa Outlet
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;