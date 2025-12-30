import { Modal } from '../../../../molecules/Modal';
import Button from '../../../../atoms/Button';
import Text from '../../../../atoms/Text';
import type { Curso } from '../../../../../type/Curso';
import { useDeleteCurso } from '../../../../../hook/Admin/useDeleteCurso';
interface DeleteCursoProps {
  onClose: () => void;
  curso: Curso ;
}

const DeleteCurso = ({ onClose, curso }: DeleteCursoProps) => {
  const { deleteCurso, loading, error } = useDeleteCurso();
  const handleEliminar = async () => {
    const idCurso = curso.idCurso ;
    const success = await deleteCurso(idCurso);
    if (!error && success !== false) { 
        onClose();
    }
  };

  return (
    <Modal title="Eliminar Curso" isOpen={true} onClose={onClose}>
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
            <p className="text-red-500 text-sm">{error}</p>
            </div>
        )}
        <Text size='h5' className='text-red-800/90 mb-2'>Desea Eliminar a Este Docente</Text>
       <div>
            <Text size='p'>Nombre : {curso.nombreCurso || ""}</Text>
            <Text size='p'>Prof : {curso.docenteAsignado.nombre || ""} {curso.docenteAsignado.apellido || ""}</Text>
            <Text size='p'>Inicio : {curso.fechaInicio || "SF"}</Text>
            <Text size='p'>Fin : {curso.fechaFin || "SF"}</Text>
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

export default DeleteCurso;