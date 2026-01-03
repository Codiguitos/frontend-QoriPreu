import Logo from '../../atoms/Logo'
import logo from "../../../assets/logo.png"
import Text from '../../atoms/Text'
import PlanItem from '../../atoms/PlanItem'
const DescriptionSection = () => {
    const list=["Acceso 24/7 a la plataforma","Clases en vivo y grabadas","Material didactico completo"
               ,"Simulacros tipo examen","Soporte personalizado"
    ]
    return (
        <section className='hidden md:flex bg-[linear-gradient(135deg,#006B4B_0%,#00A676_100%)] rounded-bl-3xl
              flex-col gap-10 p-10 items-center'>
            <Logo imagen={logo}></Logo>
            <div>
                <Text size='h3' className='text-white text-center'>Tu camino hacia el éxito universitario</Text>
                <Text size='p'>Unete a ciento de Estudiantes que ya lograron su ingreso a la UNSAAC</Text>
            </div>
            <div className='grid gap-5 mr-auto'>
                {
                    list.map(e=>(
                        <PlanItem key={e}text={e}></PlanItem>
                    ))
                }
            </div>
        </section>
    )
}

export default DescriptionSection