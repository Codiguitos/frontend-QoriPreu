import Text from '../../atoms/Text'
type CaracteristicaProps={
    textPrincipal:string,
    textSecundario:string
}
const Caracteristica = (props:CaracteristicaProps) => {
  return (
    <div className='text-center'>
        <Text size='h2' className='text-[#00A676] font-bold ' >{props.textPrincipal}</Text>
        <Text size='p' >{props.textSecundario}</Text>    
    </div>
  )
}

export default Caracteristica