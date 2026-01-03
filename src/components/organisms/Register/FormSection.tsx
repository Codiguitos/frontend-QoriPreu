import InputLabel from '../../molecules/InputLabel'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import { useNavigate } from 'react-router'
import {useForm} from 'react-hook-form'
import { useAuthStore } from '../../../store/useAuthStore'
import type {SubmitHandler} from 'react-hook-form'
type RegisterFormValues = {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  dni: string;
  password: string;
  rol: string;
};


const FormSection = () => {
  const navigate=useNavigate()
  const {registerUser}=useAuthStore()
  const {register,handleSubmit,formState: { errors },} = useForm<RegisterFormValues>();
  const onSubmit: SubmitHandler<RegisterFormValues> = async (data: RegisterFormValues) => {
    console.log(data);
    try {
      data.rol="alumno"
      await registerUser(data);
      navigate("/auth/login");
      console.log("Registro exitoso");
    } catch (error) {
      alert("Error en registro: intenta nuevamente");
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 px-10 py-10'>
        <div className='flex gap-2'>
            <InputLabel label='Nombre' placeholder='messi@gmail.com' register={register('nombre',{required:'Este campo es obligatorio'})}/>
            <InputLabel label='Apellido' placeholder='*********' register={register('apellido',{required:'Este campo es obligatorio'})}/>
        </div>
        <InputLabel label='Correo Electronico' placeholder='*********' register={register('correo',{required:'Este campo es obligatorio'})}/> 
        <div className='flex gap-2'>
            <InputLabel label='Telefono' placeholder='903' register={register('telefono',{required:'Este campo es obligatorio'})}/>
            <InputLabel label='DNI' placeholder='332323232' register={register('dni',{required:'Este campo es obligatorio'})}/>
        </div> 
        <InputLabel label='Contraseña' placeholder='Minimo 8 caracteres' register={register('password',{required:'Este campo es obligatorio'})}/>  
        <InputLabel label='Confirmar contraseña' placeholder='Repite tu contraseña' />  
        <Button type='submit' variant='primary' className='mt-2'>Registrarse</Button>
        <Text size='small' className='text-white text-center '>Ya tienes cuenta? <a onClick={()=>navigate("/auth/login")} className='text-[#006B4B] cursor-pointer hover:text-yellow-400'>Inicia Sesion aqui</a></Text>
    </form>
  )
}

export default FormSection