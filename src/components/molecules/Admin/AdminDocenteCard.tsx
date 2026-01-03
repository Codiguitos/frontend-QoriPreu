// Molecule: Card de Docente para Admin
import { Edit, Trash2, Mail, Phone } from 'lucide-react';
import Text from '../../atoms/Text';
import Avatar from '../../atoms/Avatar';
import  type { Docente}  from '../../../type/Docente';
type AdminDocenteCardProps = {
    docente: Docente
    onEdit: (docente: any) => void;
    onDelete: (docente: any) => void;

}
export const AdminDocenteCard = ({ docente, onEdit, onDelete }: AdminDocenteCardProps) => (
  <article className='bg-[#0d1512] rounded-xl p-5 border border-gray-800 hover:border-[#006B4B] transition-all group'>
    <div className='flex justify-between items-start mb-4'>
      <div className='flex gap-3 items-center'>
        <Avatar initials={docente.Nombre[0] + docente.Apellido[0]} size='sm' />
        <div>
          <Text size='h6' className='text-white group-hover:text-[#00A676]'>{docente.Nombre}</Text>
          <Text size='small'>{docente.Apellido}</Text>
        </div>
      </div>
      <div className='flex gap-2'>
        <button onClick={() => onEdit(docente)} className='p-2 cursor-pointer hover:bg-gray-800 rounded-lg transition-all'>
          <Edit size={18} className='text-gray-400 hover:text-blue-500' />
        </button>
        <button onClick={() => onDelete(docente)} className='p-2 cursor-pointer hover:bg-gray-800 rounded-lg transition-all'>
          <Trash2 size={18} className='text-gray-400 hover:text-red-500' />
        </button>
      </div>
    </div>

    <div className='space-y-2 mb-3'>
      <Text size='small' className='flex items-center gap-2'>
        <Mail size={16} />
        {docente.Correo}
      </Text>
      <Text size='small' className='flex items-center gap-2'>
        <Phone size={16} />
        {docente.Telefono}
      </Text>
    </div>

  </article>
);