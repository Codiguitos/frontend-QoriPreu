import React from 'react'
import FormSection from '../../components/organisms/Login/FormSection'
import DescriptionSection from '../../components/organisms/Login/DescriptionSection'
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router';
type LoginFormValues = {
  correo: string;
  password: string;
};

const Login = () => {
  const {loginUser}=useAuthStore()
  const navigate = useNavigate();

  const handleLogin = async (data: LoginFormValues) => {
    try {
      await loginUser("alumno", data); // espera que termine login
      navigate("/das"); // solo navegar si login fue exitoso
      console.log("Login exitoso");
    } catch (error) {
      alert("Error en login: revisa tus credenciales");
    }
  };

  return (
    <main className=" ">
        <FormSection onSubmit={handleLogin} />
    </main>
  )
}

export default Login