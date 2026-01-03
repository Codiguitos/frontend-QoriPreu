type LogoProps ={
    imagen:string
}
const Logo = ({imagen}:LogoProps) => {
  return (
    <img className='w-20 md:w-30' src={imagen} alt='Logo'/>
  )
}

export default Logo