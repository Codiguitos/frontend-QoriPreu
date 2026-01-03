import Text from '../../atoms/Text'
import { FaBook ,FaClock,FaTrophy,FaChalkboardTeacher,FaLaptop} from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import FeatureCard from '../../molecules/inicio/FeatureCard';
const FeaturesSection = () => {
    const listF=[
        {
            icon:<FaBook/>,
            title:"Cursos Espeficializados",
            text:"Álgebra, Aritmética, Física, Química y más. Todos los cursos necesarios para tu preparación académica con contenido actualizado."
        },
        {
            icon:<FaClock/>,
            title:"Horario Flexible",
            text:"Clases matutinas, vespertinas y sabatinas. Tú decides cuándo estudiar y te adaptamos a tu tiempo disponible."
        },
        {
            icon:<FaTrophy/>,
            title:"Alto Índice de Ingreso",
            text:"95% de nuestros estudiantes logran ingresar a la universidad. Nuestros métodos están comprobados y son efectivos."
        },
        {
            icon:<FaChalkboardTeacher/>,
            title:"Plataforma Virtual",
            text:"Accede a material didáctico, clases grabadas y recursos complementarios 24/7 desde cualquier dispositivo."
        },
        {
            icon:<FaLaptop/>,
            title:"Plataforma Virtual",
            text:"Accede a material didáctico, clases grabadas y recursos complementarios 24/7 desde cualquier dispositivo."
        },
        {
            icon:<VscGraph/>,
            title:"Simulacros Constantes",
            text:"Evaluaciones periódicas tipo examen de admisión para medir tu avance y prepararte bajo presión real."
        },
    ]
    return (
        <section className='mt-5'>
            <div className='text-center '>
                <Text size='h3' className='text-white pb-10'>¿Por que elegir nuestra Academia?</Text>
                <Text size='p' className=''>Te brindamos todo lo que necesitas para lograr tu Ingreso</Text>
            </div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 py-20">
                {
                    listF.map(e=>(
                        <FeatureCard icon={e.icon} title={e.title} text={e.text}/>
                    ))
                }
            </div>
            
        </section>
)
}

export default FeaturesSection