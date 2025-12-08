import InputLabel from '../../molecules/InputLabel'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import { useNavigate } from 'react-router'
const FormSection = () => {
  const navigate=useNavigate()
  return (
    <form className='flex flex-col gap-3 px-10 py-10'>
        <div className='flex gap-2'>
            <InputLabel label='Nombre' placeholder='messi@gmail.com'/>
            <InputLabel label='Apellido' placeholder='*********'/>
        </div>
        <InputLabel label='Correo Electronico' placeholder='*********'/> 
        <div className='flex gap-2'>
            <InputLabel label='Telefono' placeholder='903'/>
            <InputLabel label='DNI' placeholder='332323232'/>
        </div> 
        <InputLabel label='Contraseña' placeholder='Minimo 8 caracteres'/>  
        <InputLabel label='Confirmar contraseña' placeholder='Repite tu contraseña'/>  
        <Button variant='primary' className='mt-2'>Registrarse</Button>
        <Text size='small' className='text-white text-center '>Ya tienes cuenta? <a onClick={()=>navigate("/auth/login")} className='text-[#006B4B] cursor-pointer hover:text-yellow-400'>Inicia Sesion aqui</a></Text>
    </form>
  )
}

export default FormSection