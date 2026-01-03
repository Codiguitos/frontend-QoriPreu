// Molecule: Tabla reutilizable

// Molecule: Card de Docente para Admin
import { Edit, Trash2} from 'lucide-react';

// Importar tus atoms existentes (simulados aquí, en tu proyecto los importarías normalmente)../atoms/Select';
import Text from '../atoms/Text';

type TableProps={
    columns: string[];
    data: any[];
    onEdit: (row: any) => void;
    onDelete: (row: any) => void;
}
export const Table = ({ columns, data, onEdit, onDelete }: TableProps) => (
  <div className='bg-[#0d1512] rounded-xl border border-gray-800 overflow-hidden'>
    <div className='overflow-x-auto'>
      <table className='w-full'>
        <thead className='bg-[#0a0e0d]'>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className='px-6 py-4 text-left'>
                <Text size='small' className='text-gray-400 font-semibold uppercase'>{col}</Text>
              </th>
            ))}
            <th className='px-6 py-4 text-right'>
              <Text size='small' className='text-gray-400 font-semibold uppercase'>Acciones</Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className='border-t border-gray-800 hover:bg-[#162019] transition-all'>
              {Object.values(row).slice(0, -1).map((cell, cellIdx) => (
                <td key={cellIdx} className='px-6 py-4'>
                  <Text size='p' className='text-white'>{cell}</Text>
                </td>
              ))}
              <td className='px-6 py-4'>
                <div className='flex gap-2 justify-end'>
                  <button onClick={() => onEdit(row)} className='p-2 hover:bg-gray-800 rounded-lg transition-all'>
                    <Edit size={16} className='text-blue-500' />
                  </button>
                  <button onClick={() => onDelete(row)} className='p-2 hover:bg-gray-800 rounded-lg transition-all'>
                    <Trash2 size={16} className='text-red-500' />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);