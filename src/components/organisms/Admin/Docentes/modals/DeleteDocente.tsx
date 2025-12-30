import { Modal } from '../../../../molecules/Modal';
import Button from '../../../../atoms/Button';
import Text from '../../../../atoms/Text';
import type { Docente } from '../../../../../type/Docente';
import { useDeleteDocente } from '../../../../../hook/Admin/useDeleteDocente';
interface DeleteDocenteProps {
  onClose: () => void;
  docente: Docente ;
}

const DeleteDocente = ({ onClose, docente }: DeleteDocenteProps) => {
  const { deleteDocente, loading, error } = useDeleteDocente();

  const handleEliminar = async () => {
    const idDocente = docente.DNI || docente.DNI; 
    const success = await deleteDocente(idDocente);
    if (!error && success !== false) { 
        onClose();
    }
  };

  return (
    <Modal title="Eliminar Docente" isOpen={true} onClose={onClose}>
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
            <p className="text-red-500 text-sm">{error}</p>
            </div>
        )}
        <Text size='h5' className='text-red-800/90 mb-2'>Desea Eliminar a Este Docente</Text>
       <div>
            <Text size='p'>Nombre : {docente.Nombre}</Text>
            <Text size='p'>Apellido : {docente.Apellido}</Text>
            <Text size='p'>Correro : {docente.Correo}</Text>
            <Text size='p'>Telefono : {docente.Telefono}</Text>
       </div>
        <div className="flex gap-2 justify-end">
          <Button type="submit" variant="primary" onClick={handleEliminar} disabled={loading}>
            {loading ? 'Eliminando...' : 'Eliminar'}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            disabled={loading}
          >
            Cancelar
          </Button>
        </div>
    </Modal>
  );
};

export default DeleteDocente;