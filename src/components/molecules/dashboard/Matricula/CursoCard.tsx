import { Check,Clock, User,BookOpen,Calendar } from 'lucide-react'
import type { Curso2 as Curso } from '../../../../type/Curso'
import Text from '../../../atoms/Text'
type Props = {
    course:Curso,
    isSelected:boolean,
    toggleCourse:(id:number)=>void

}
const CursoCard = ({course, isSelected, toggleCourse}:Props) => {
  return (
    <div
        onClick={() => toggleCourse(course.idCurso)}
        className={`relative
            bg-[linear-gradient(135deg,rgba(0,107,75,0.1),rgba(0,166,118,0.05))] 
            rounded-xl p-6 
            border 
            transition-all duration-300 cursor-pointer 
            hover:-translate-y-[5px]
            hover:shadow-[0_20px_40px_rgba(0,107,75,0.2)] ${
        isSelected 
            ? 'border-[#00A676] shadow-lg shadow-green-500/20' 
            : 'border-[rgba(0,107,75,0.5)]'
        }`}>
        {/* Selection Indicator */}
        <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
        isSelected ? 'bg-[#00A676]' : 'bg-gray-800'
        }`}>
        {isSelected && <Check size={18} />}
        </div>

        {/* Course Header */}
        <div className="mb-4">
            <Text size='h5' className="text-white">{course.nombreCurso || "Sin nombre"}</Text>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
                <User size={16} />
                <span className="text-sm">Prof. {course.docente?.nombre +" "+ course.docente?.apellido||"Sin docente"}</span>
        </div>
        </div>
        {/* Course Info */}
        <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
                <div className="text-sm">
                {course.horarios.map((slot, idx) => (
                    <div key={idx} className="text-gray-300">
                    {slot.dia}: {slot.horaInicio} - {slot.horaFinal}
                    </div>
                ))}
            </div>
        </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar size={16} className="text-green-400" />
                <span>Duración: 8 Semanas</span>
            </div>

            <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">{course.Precio}</span>
                    <span className="text-xs text-gray-400">por ciclo</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CursoCard