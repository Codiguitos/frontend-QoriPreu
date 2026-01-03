import { useState, useEffect } from "react";
import { Modal } from "../../../../molecules/Modal";
import InputLabel from "../../../../molecules/InputLabel";
import Button from "../../../../atoms/Button"; 
import { Plus, Trash2, Save, X } from "lucide-react";
import type { CursoInput, Horario } from "../../../../../type/Curso";
import { useCreateCurso } from "../../../../../hook/Admin/useCreateCurso";
import { useAdminStore } from "../../../../../store/useAdminStore";
import Label from "../../../../atoms/Label";
interface CreateCursoProps {
  onClose: () => void;
}

const initialForm: CursoInput = {
  nombre: "",
  descripcion: "",
  precio: 0,
  cupoMaximo: 0, // Esto debe tener un input en el formulario
  estado: "activo",
  fechaInicio: "",
  fechaFin: "",
  schedules: [],
  idDocente: 0 // Corregido: Inicializado en 0 (number) para evitar errores de tipo
};

const CreateCurso = ({ onClose }: CreateCursoProps) => {
  const { createCurso, loading, error } = useCreateCurso();
  const { docentes, getDocentes } = useAdminStore();
  const [formData, setFormData] = useState<CursoInput>(initialForm);

  useEffect(() => {
    getDocentes();
  }, []);

  // 1. Manejo de campos simples (Texto, Fechas, Selects)
  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isNumeric = ["precio", "idDocente", "cupoMaximo"].includes(name);
    setFormData({...formData,[name]: isNumeric ? Number(value) : value,});
  };

  // Agregar una nueva fila de horario
  const addSchedule = () => {
    setFormData({...formData,
      schedules: [ ...formData.schedules,
        { dia: "Lunes", horaInicio: "", horaFinal: "" },
      ],
    });
  };

  // Eliminar una fila de horario
  const removeSchedule = (index: number) => {
    const newSchedules = formData.schedules.filter((_, i) => i !== index);
    setFormData({ ...formData, schedules: newSchedules });
  };

  const handleScheduleChange = (  index: number,field: keyof Horario,value: string ) => {
    const newSchedules = [...formData.schedules];
    newSchedules[index] = {...newSchedules[index],[field]: value,};
    setFormData({ ...formData, schedules: newSchedules });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await createCurso(formData);
     if (!error && success !== false) { 
        handleClose();
    }
    
  };

 const handleClose = () => {
    setFormData(initialForm);
    onClose(); 
  };

  return (
    <Modal title="Agregar Nuevo Curso" isOpen={true} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 max-h-[80vh]  pr-2">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-200 text-sm">
            <p>{error}</p>
          </div>
        )}

        {/* --- DATOS GENERALES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center self-center">
          <InputLabel
            label="Título del Curso"
            name="nombre" 
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Ej: Álgebra Lineal"
          />
          <div className="flex flex-col gap-1">
            <Label>Estado</Label>
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full bg-[#0d1512] border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                      focus:outline-none focus:ring-2 focus:ring-[#00A676] focus:border-[#00A676]
                      transition-all duration-300"
            >
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Label>Descripcion</Label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows={3}
            className="w-full bg-[#0d1512] border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                      focus:outline-none focus:ring-2 focus:ring-[#00A676] focus:border-[#00A676]
                      transition-all duration-300"
            placeholder="Breve descripción del curso..."
          />
        </div>

        {/* --- PRECIO Y CUPO (Nuevo) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputLabel
            label="Precio (S/.)"
            name="precio"
            type="number"
            value={formData.precio}
            onChange={handleChange}
            required
            min={0}
            step="0.01"
          />
          <InputLabel
            label="Cupo Máximo"
            name="cupoMaximo"
            type="number"
            value={formData.cupoMaximo}
            onChange={handleChange}
            required
            min={1}
          />
        </div>

        {/* --- DOCENTE --- */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-300">
              Docente Asignado
            </label>
            <select
              name="idDocente"
              value={formData.idDocente}
              onChange={handleChange}
              className="w-full bg-[#0d1512] border border-gray-700 rounded-lg px-4 py-3 text-gray-200
                      focus:outline-none focus:ring-2 focus:ring-[#00A676] focus:border-[#00A676]
                      transition-all duration-300"
              required
            >
              <option value={0}>Seleccione un docente...</option>
              {docentes?.map((doc) => (
                <option key={doc.codigoDocente} value={doc.codigoDocente || doc.codigoDocente}> 
                  {/* Nota: Asegúrate de usar el ID numérico del docente aquí si tu backend espera ID numérico */}
                  {doc.Nombre} {doc.Apellido}
                </option>
              ))}
            </select>
        </div>

        {/* --- FECHAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputLabel
            label="Fecha Inicio"
            name="fechaInicio"
            type="date"
            value={formData.fechaInicio}
            onChange={handleChange}
            required
          />
          <InputLabel
            label="Fecha Fin"
            name="fechaFin"
            type="date"
            value={formData.fechaFin}
            onChange={handleChange}
            required
          />
        </div>

        {/* --- SECCIÓN HORARIOS --- */}
        <div className="border-t border-slate-700 pt-4 mt-4">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-blue-400">
              Horarios de Clase
            </label>
            <button
              type="button"
              onClick={addSchedule}
              className="text-xs flex items-center gap-1 bg-blue-600/20 text-blue-400 px-2 py-1 rounded hover:bg-blue-600/40 transition-colors"
            >
              <Plus size={14} /> Agregar Día
            </button>
          </div>

          {formData.schedules.length === 0 && (
            <p className="text-xs text-gray-500 italic">
              No hay horarios definidos. Pulsa "Agregar Día".
            </p>
          )}

          <div className="space-y-2">
            {formData.schedules.map((horario, index) => (
              <div key={index} className="flex gap-2 items-end bg-slate-800/50 p-2 rounded-lg border border-slate-700">
                <div className="flex-1">
                  <label className="text-xs text-gray-400 block mb-1">Día</label>
                  <select
                    value={horario.dia}
                    onChange={(e) => handleScheduleChange(index, "dia", e.target.value)}
                    className="w-full p-1 text-sm bg-slate-900 border border-slate-600 rounded text-white"
                  >
                    {['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'].map(d => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                
                <div className="w-24">
                  <label className="text-xs text-gray-400 block mb-1">Inicio</label>
                  <input
                    type="time"
                    value={horario.horaInicio}
                    onChange={(e) => handleScheduleChange(index, "horaInicio", e.target.value)}
                    className="w-full p-1 text-sm bg-slate-900 border border-slate-600 rounded text-white"
                    required
                  />
                </div>

                <div className="w-24">
                  <label className="text-xs text-gray-400 block mb-1">Fin</label>
                  <input
                    type="time"
                    value={horario.horaFinal}
                    onChange={(e) => handleScheduleChange(index, "horaFinal", e.target.value)}
                    className="w-full p-1 text-sm bg-slate-900 border border-slate-600 rounded text-white"
                    required
                  />
                </div>

                <button type="button" onClick={() => removeSchedule(index)} title="Eliminar horario"
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded mb-px">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTONES DE ACCIÓN --- */}
        <div className="flex gap-3 justify-end pt-4 border-t border-slate-700">
          <Button type="button" variant="secondary" onClick={onClose} disabled={loading}>
            <div className="flex items-center gap-2">
              <X size={18} /> Cancelar
            </div>
          </Button>
          <Button type="submit"  variant="primary" disabled={loading}>
            <div className="flex items-center gap-2">
              <Save size={18} /> {loading ? "Guardando..." : "Guardar Curso"}
            </div>
          </Button>
        </div>

      </form>
    </Modal>
  );
};

export default CreateCurso;