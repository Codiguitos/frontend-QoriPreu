import Text from "../../atoms/Text"
import Button from "../../atoms/Button"
import Img from "../../atoms/Img"
import PersonaHero from "../../../assets/persona-hero.png"
import Caracteristica from "../../molecules/inicio/Caracteristica"
const HeroSection = () => {
  const caracteristicas=[
    {
      textoPrincipal:"95%",
      textoSecundario:"Tasa de Ingreso"
    },
    {
      textoPrincipal:"500+",
      textoSecundario:"Alumnos Activos"
    },
    {
      textoPrincipal:"15",
      textoSecundario:"Años de Experiencia"
    }
  ]
  return (
    <main className='h-dvh grid md:grid-cols-2 '>
      <div className="flex flex-col gap-10 justify-center items-start px-10 md:px-20 md:pl-40">
        <Text size="h1">Quieres Ingresar a la univeridad?</Text>
        <Text size="p">Prepárate con los mejores docentes y alcanza tu objetivo de ingresar a la UNSAAC. Metodología probada, horarios flexibles y acompañamiento personalizado.</Text>
        <div className="flex gap-5">
          <Button variant="primary" >Comienza Aqui</Button>
          <Button variant="secondary">Ver Planes</Button>
        </div>
        <div className="flex  w-full justify-between">
          {
            caracteristicas.map(e=>(
              <Caracteristica
                textPrincipal={e.textoPrincipal}
                textSecundario={e.textoSecundario} 
              />
            ))
          }
        </div>
      </div>
      <div className=" hidden  md:flex md:justify-center md:items-center ">
        <Img src={PersonaHero}/>      
      </div>
    </main>
  )
}

export default HeroSection
