// Molecule: Card de Docente para Admin
import { X } from 'lucide-react';

// Importar tus atoms existentes (simulados aquí, en tu proyecto los importarías normalmente)

import Text from '../atoms/Text';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div className='bg-[#0a0e0d] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800'>
        <div className='sticky top-0 bg-[#0a0e0d] border-b border-gray-800 p-6 flex justify-between items-center'>
          <Text size='h5' className='text-white'>{title}</Text>
          <button onClick={onClose} className='p-2 cursor-pointer hover:bg-red-600/50 rounded-lg transition-all'>
            <X className='text-gray-400' />
          </button>
        </div>
        <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  );}