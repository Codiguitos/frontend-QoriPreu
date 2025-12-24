import { useState } from 'react';
import { Modal } from '../../../../molecules/Modal';
import InputLabel from '../../../../molecules/InputLabel';
import { useUpdateDocente } from '../../../../../hook/Admin/useUpdateDocente';
import Button from '../../../../atoms/Button';
import type { Docente } from '../../../../../type/Docente';

interface UpdateDocenteProps {
  onClose: () => void;
  docente: Docente ;
}

const UpdateDocente = ({ onClose, docente }: UpdateDocenteProps) => {
  const { updateDocente, loading, error } = useUpdateDocente();

  // 1. Inicializamos el estado mapeando el objeto docente
  // Usamos "|| ''" para evitar warnings de componentes no controlados si algún campo viene null
  const [formData, setFormData] = useState({
    dni: docente.DNI || docente.DNI || '', 
    nombre: docente.Nombre || docente.Nombre || '',
    apellido: docente.Apellido || docente.Apellido || '',
    correo: docente.Correo || docente.Correo || '',
    telefono: docente.Telefono || docente.Telefono || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Usamos el DNI original del objeto docente como identificador para la URL/API
    // y formData para los datos nuevos a enviar
    const idDocente = docente.DNI || docente.DNI; 
    
    const success = await updateDocente(idDocente, formData);
    
    if (!error && success !== false) { 
        onClose();
    }
  };

  return (
    <Modal
      title="Editar Docente" 
      isOpen={true}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}
        
        {/* El DNI suele ser no editable (readOnly) en actualizaciones, 
            pero depende de tu lógica de negocio. Lo dejo editable por ahora. */}
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
            {loading ? 'Actualizando...' : 'Actualizar'}
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
      </form>
    </Modal>
  );
};

export default UpdateDocente;