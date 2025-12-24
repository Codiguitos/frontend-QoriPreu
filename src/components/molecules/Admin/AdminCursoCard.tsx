import { BookOpen, Edit, Trash2, Calendar } from 'lucide-react';
import type { Curso } from '../../../type/Curso';
import Text from '../../atoms/Text';

type AdminCursoCardProps = {
  curso: Curso;
  onEdit: (curso: Curso) => void;
  onDelete: (curso: Curso) => void;
}

// Helper simple para formatear fechas (puedes moverlo a un utils/date.ts)
const formatDate = (dateString: string) => {
  if (!dateString) return 'S/F';
  return new Date(dateString).toLocaleDateString('es-PE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

export const AdminCursoCard = ({ curso, onEdit, onDelete }: AdminCursoCardProps) => {
  
  // Lógica segura para mostrar el nombre del profe o un fallback
  // Nota: Asegúrate de que tu tipo 'Curso' use 'docente' (minúscula) como definimos antes
  const docenteNombre = curso.docenteAsignado 
    ? `Prof. ${curso.docenteAsignado.nombre} ${curso.docenteAsignado.apellido}` 
    : "Sin docente asignado";

  return (
    <article className='bg-[#0d1512] rounded-xl p-5 border border-gray-800 hover:border-[#006B4B] transition-all group shadow-lg hover:shadow-green-900/10'>
      
      {/* HEADER: Icono, Título y Profe */}
      <div className='flex justify-between items-start mb-4'>
        <div className='flex gap-3 overflow-hidden'>
          <div className='w-12 h-12 min-w-12 bg-linear-to-br from-green-900 to-slate-900 rounded-lg flex items-center justify-center border border-green-800/30'>
            <BookOpen className='text-[#00A676]' size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <Text size='h6' className='text-white group-hover:text-[#00A676] truncate font-bold leading-tight'>
              {curso.nombreCurso}
            </Text>
            <Text size='small' className='text-gray-400 truncate'>
              {docenteNombre}
            </Text>
          </div>
        </div>

        {/* BOTONES DE ACCIÓN */}
        <div className='flex gap-1'>
          <button 
            onClick={() => onEdit(curso)} 
            className='p-2 hover:bg-gray-800 rounded-lg transition-colors group/btn'
             title="Editar curso"
          >
            <Edit size={18} className='text-gray-500 group-hover/btn:text-blue-400' />
          </button>
          <button 
            onClick={() => onDelete(curso)} 
            className='p-2 hover:bg-gray-800 rounded-lg transition-colors group/btn'
             title="Eliminar curso"
          >
            <Trash2 size={18} className='text-gray-500 group-hover/btn:text-red-500' />
          </button>
        </div>
      </div>

      {/* STATS GRID */}
      {/* Corregido a grid-cols-2 porque solo hay 2 elementos */}
      <div className='grid grid-cols-2 gap-3 mb-4'>
        <div className='bg-[#0a0e0d] p-3 rounded-lg border border-gray-800/50'>
          <Text size='small' className='text-gray-500 mb-1'>Estudiantes</Text>
          {/* Asumiendo que tu backend devuelve la cuenta de inscritos, si no, usa estudiantes.length */}
          <Text size='p' className='text-white font-bold text-lg'>
             {/* @ts-ignore: Si tu tipo Curso aún no tiene inscritos en TS, usa estudiantes.length */}
            {curso.inscritos || curso.estudiantes?.length || 0}
          </Text>
        </div>
        <div className='bg-[#0a0e0d] p-3 rounded-lg border border-gray-800/50'>
          <Text size='small' className='text-gray-500 mb-1'>Fin del Ciclo</Text>
          <Text size='p' className='text-white font-bold text-lg'>
            {formatDate(curso.fechaFin)}
          </Text>
        </div>
      </div>

      {/* FOOTER: Fechas y Estado */}
      <div className='flex justify-between items-center pt-3 border-t border-gray-800'>
        <div className='flex flex-col'>
            <span className='text-[10px] text-gray-500 uppercase tracking-wide'>Fecha Inicio</span>
            <div className='flex items-center gap-2 text-gray-300 text-sm'>
                <Calendar size={14} className='text-[#00A676]'/>
                {formatDate(curso.fechaInicio)}
            </div>
        </div>
        
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          curso.Estado === 'activo' 
            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
            : 'bg-red-500/10 text-red-400 border-red-500/20'
        }`}>
          {curso.Estado === 'activo' ? 'Activo' : 'Inactivo'}
        </span>
      </div>
    </article>
  );
};