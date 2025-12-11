  import InputLabel from '../../molecules/InputLabel'
  import Button from '../../atoms/Button'
  import Text from '../../atoms/Text'
  import { useNavigate } from 'react-router'
  import {useForm} from 'react-hook-form'
  import type {SubmitHandler} from 'react-hook-form'
  type LoginFormValues = {
  correo: string;
  password: string;
  };
  interface Props {
  onSubmit: (data: LoginFormValues) => void;
  loading?: boolean;
}
  const FormSection: React.FC<Props> = ({ onSubmit, loading })  => {
    const navigate=useNavigate()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginFormValues>();
    return (
    <section className="px-10 py-10 flex flex-col justify-center ">
        <div className='flex flex-col gap-2'>
          <Text size='h3' className='text-[#006B4B]'>Bienvenido de vuelta</Text>
          <Text size='p'>Ingresa tus credenciales para continuar</Text>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-5'>
            <InputLabel 
                label='Correo Electronico' 
                placeholder='messi@gmail.com'
                register={register('correo',{required:'Este campo es obligatorio'})}
            />
            <InputLabel 
                label='contraseña' 
                placeholder='*********'
                register={register('password',{required:'Este campo es obligatorio'})}
            />
            <Button type='submit' variant='primary'>Iniciar Sesion</Button>
        </form>
        <Text size='small' className='text-white text-center mt-10'>¿No tienes cuenta? <a onClick={()=>navigate("/auth/register")} className='text-[#006B4B] cursor-pointer hover:text-yellow-400'>Registrate aqui</a></Text>
      </section>
    )
  }

  export default FormSection