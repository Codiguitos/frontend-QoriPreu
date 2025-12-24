// AddDocenteSection.tsx

import Button from '../../../atoms/Button';
import Text from "../../../atoms/Text";
import { Plus } from 'lucide-react';
import { useState } from 'react';
import CreateDocente from './modals/CreateDocente';
export const AddDocenteSection = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
 

  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <Text size="h2" className="mb-2 text-white">
            Gestión de Docentes
          </Text>
          <Text size="p">Administra el equipo docente</Text>
        </div>

        <Button
          variant="primary"
          className="flex justify-center items-center gap-2"
          onClick={handleOpenModal}
        >
          <Plus size={20} /> Nuevo Docente
        </Button>
      </div>
      
      {showModal && <CreateDocente onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default AddDocenteSection;