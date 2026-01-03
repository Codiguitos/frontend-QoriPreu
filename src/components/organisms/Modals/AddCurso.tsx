import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import Glass from "../../atoms/Glass";
import NavItem from "../../atoms/NavItem";
import {Modal} from "../../molecules/Modal";
import {Table} from "../../molecules/Table";
import {Plus,Filter } from 'lucide-react'

const AddCursoModal = () => {
  const [showModal, setShowModal] = useState(false);
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title='Crear Nuevo Curso'>
        <div className='space-y-4'>
          <InputLabel
            label='Nombre del Curso'
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            placeholder='Ej: Matemática Avanzada'
          />
          
          <Select
            // label='Profesor Asignado'
            value={formData.profesor}
            onChange={(e) => setFormData({ ...formData, profesor: e.target.value })}
            options={[
              { value: '', label: 'Seleccionar profesor' },
              { value: '1', label: 'Juan Pérez' },
              { value: '2', label: 'María García' },
              { value: '3', label: 'Carlos López' }
            ]}
          />

          <div className='grid grid-cols-2 gap-4'>
            <InputLabel
              label='Duración'
              value={formData.duracion}
              onChange={(e) => setFormData({ ...formData, duracion: e.target.value })}
              placeholder='Ej: 12 semanas'
            />
            
            <Select
            //   label='Nivel'
              value={formData.nivel}
              onChange={(e) => setFormData({ ...formData, nivel: e.target.value })}
              options={[
                { value: '', label: 'Seleccionar nivel' },
                { value: 'basico', label: 'Básico' },
                { value: 'intermedio', label: 'Intermedio' },
                { value: 'avanzado', label: 'Avanzado' }
              ]}
            />
          </div>

          <InputLabel
            label='Fecha de Inicio'
            type='date'
            value={formData.fechaInicio}
            onChange={(e) => setFormData({ ...formData, fechaInicio: e.target.value })}
          />

          <div className='flex flex-col'>
            <label className='text-white text-lg mb-2'>Descripción</label>
            <textarea
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              className='w-full bg-[#0d1512] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A676] focus:border-[#00A676] transition-all duration-300 min-h-[100px]'
              placeholder='Descripción del curso...'
            />
          </div>

          <div className='flex gap-3 pt-4'>
            <Button variant='primary' onClick={handleSubmit} className='flex-1'>
              Crear Curso
            </Button>
            <Button variant='secondary' onClick={() => setShowModal(false)} className='flex-1'>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
}      