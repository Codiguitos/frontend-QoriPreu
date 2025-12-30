import FormSection from '../../components/organisms/Login/FormSection'
import { useAuthStore } from '../../store/useAuthStore'; // Asegúrate que la ruta sea correcta (en tu código tenías useAuthStore repetido o mal importado)
import { useNavigate } from 'react-router';

type LoginFormValues = {
  correo: string;
  password: string;
};

const Login = () => {
  const { loginUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormValues) => {
    try {
      // 1. Ejecutamos el login y capturamos el rol que nos devuelve el store
      const rol = await loginUser(data); 
      
      console.log("Login exitoso, Rol detectado:", rol);

      // 2. Redirección dinámica basada en el rol
      switch (rol) {
        case 'alumno':
          navigate("/alumno"); // Dashboard Alumno
          break;
        case 'docente':
          navigate("/docente"); // Dashboard Docente
          break;
        case 'administrador':
          navigate("/admin"); // Dashboard Admin
          break;
        default:
          navigate("/"); // Ruta por defecto si el rol no coincide
          break;
      }

    } catch (error) {
      console.log(error);
      alert("Error en login: revisa tus credenciales");
    }
  };

  return (
    <main className="">
        <FormSection onSubmit={handleLogin} />
    </main>
  )
}

export default Login;