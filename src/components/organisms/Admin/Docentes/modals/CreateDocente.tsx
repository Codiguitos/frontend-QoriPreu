import { useState } from 'react';
import { Modal } from '../../../../molecules/Modal';
import InputLabel from '../../../../molecules/InputLabel';
import { useCreateDocente } from '../../../../../hook/Admin/useCreateDocente';
import Button from '../../../../atoms/Button';

// 1. Definimos la interfaz para las props
interface CreateDocenteProps {
  onClose: () => void;
}

const initialForm = {
  dni: '',
  nombre: '',
  apellido: '',
  correo: '',
  telefono: '',
};

// 2. Desestructuramos las props correctamente ({ onClose })
const CreateDocente = ({ onClose }: CreateDocenteProps) => {
  const { createDocente, loading, error } = useCreateDocente();
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Asumiendo que createDocente devuelve true/false o lanza error
    // Si tu hook no devuelve nada, tendrás que manejarlo diferente
    const success = await createDocente(formData);
    
    // Si no hubo error, cerramos el modal
    if (!error && success !== false) { 
        handleClose();
    }
  };

  const handleClose = () => {
    setFormData(initialForm);
    onClose(); // 3. IMPORTANTE: Llamar a la función del padre para cerrar el modal
  };

  return (
    <Modal
      title="Agregar Docente"
      isOpen={true}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}
        <InputLabel
          required
          label="DNI"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
        />
        <InputLabel
          required
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <InputLabel
          required
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <InputLabel
          required
          label="Correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
        <InputLabel
          label="Teléfono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />

        <div className="flex gap-2 justify-end">
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Guardando...' : 'Agregar'}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={handleClose}
            disabled={loading}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateDocente;