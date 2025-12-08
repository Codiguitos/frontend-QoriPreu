import CursoCard from '../../molecules/dashboard/CursoCard'
import { BookOpen, Video, FileText, Calendar, Bell, User, LogOut, Home, BarChart, Settings, Download, Clock, ChevronRight, PlayCircle, Award, TrendingUp } from 'lucide-react';
import Text from '../../atoms/Text';
const CursosSection = () => {
    const cursos =[
        {
            name:"Matematica",
            techer:"Juan Perez",
            icon:<BookOpen className='text-white'/>
        },
        {
            name:"Comunicacion",
            techer:"Juan Perez",
            icon:<Video className='text-white'/>
        },
        {
            name:"Matematica",
            techer:"Juan Perez",
            icon:<BookOpen className='text-white'/>
        },
        {
            name:"Comunicacion",
            techer:"Juan Perez",
            icon:<Video className='text-white'/>
        }
    ]
    return (
        <section>
            <Text size='h5' className='text-white mb-3'>Mis Cursos</Text> 
            <div className='grid  md:grid-cols-2 gap-5'>
                {cursos.map(e=>
                    (<CursoCard name={e.name} icon={e.icon} teacher={e.techer} 
                    progreso={90} tareas={5} siguienteClase='24 nov 4pm'/>

                ))}
            </div>
        </section>
    )
}

export default CursosSection