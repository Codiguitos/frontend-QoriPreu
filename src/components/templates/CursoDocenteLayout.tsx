import React, { useState } from 'react'
import { Video, Upload, FileText, Link as LinkIcon, Download } from 'lucide-react'
import type { CursoDetalleFull } from '../../type/Docente'

interface Props {
  data: CursoDetalleFull;
  onUpload: (file: File, nombre: string) => void;
  onUpdateLink: (link: string) => void;
}

const CursoDocenteLayout = ({ data, onUpload, onUpdateLink }: Props) => {
  const { curso, materiales } = data;

  // Estados locales para los inputs del formulario
  const [linkInput, setLinkInput] = useState(curso.linkReunion || "");
  const [nombreArchivo, setNombreArchivo] = useState("");
  const [archivo, setArchivo] = useState<File | null>(null);

  const handleSubmitArchivo = (e: React.FormEvent) => {
    e.preventDefault();
    if (archivo && nombreArchivo) {
      onUpload(archivo, nombreArchivo);
      // Limpiar campos
      setNombreArchivo("");
      setArchivo(null);
    }
  };

  return (
    <div className='w-full p-6 md:p-10 grid gap-8 bg-[#0a0e0d] min-h-screen'>
      
      {/* 1. ENCABEZADO */}
      <header>
        <h1 className='text-3xl font-bold text-white mb-2'>{curso.Nombre}</h1>
        <p className='text-gray-400'>{curso.Descripcion}</p>
      </header>

      <div className='grid lg:grid-cols-[1fr_1fr] gap-8'>
        
        {/* 2. PANEL IZQUIERDO: GESTIÓN */}
        <div className='grid gap-8 content-start'>
            
            {/* A. CONFIGURAR LINK ZOOM/MEET */}
            <section className='bg-[#0d1512] border border-gray-800 rounded-xl p-6'>
                <div className='flex items-center gap-3 mb-4 text-blue-400'>
                    <Video size={24} />
                    <h3 className='text-xl font-semibold text-white'>Enlace de Clase en Vivo</h3>
                </div>
                <div className='flex gap-3'>
                    <input 
                        type="text" 
                        placeholder="Pegar enlace de Zoom / Meet aquí..." 
                        className="flex-1 bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        value={linkInput}
                        onChange={(e) => setLinkInput(e.target.value)}
                    />
                    <button 
                        onClick={() => onUpdateLink(linkInput)}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors flex items-center gap-2'
                    >
                        <LinkIcon size={18}/> Guardar
                    </button>
                </div>
                <p className='text-xs text-gray-500 mt-2 ml-1'>
                    Este enlace aparecerá automáticamente en el calendario de tus alumnos.
                </p>
            </section>

            {/* B. SUBIR MATERIAL (PDF) */}
            <section className='bg-[#0d1512] border border-gray-800 rounded-xl p-6'>
                <div className='flex items-center gap-3 mb-4 text-green-400'>
                    <Upload size={24} />
                    <h3 className='text-xl font-semibold text-white'>Subir Nuevo Material</h3>
                </div>
                <form onSubmit={handleSubmitArchivo} className='grid gap-4'>
                    <div>
                        <label className='block text-sm text-gray-400 mb-1'>Nombre del Material</label>
                        <input 
                            type="text" 
                            placeholder="Ej: Diapositivas Semana 1" 
                            className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                            value={nombreArchivo}
                            onChange={(e) => setNombreArchivo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm text-gray-400 mb-1'>Archivo (PDF)</label>
                        <input 
                            type="file" 
                            accept=".pdf, .ppt, .pptx"
                            className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700 cursor-pointer"
                            onChange={(e) => setArchivo(e.target.files ? e.target.files[0] : null)}
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className='bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg font-bold transition-colors mt-2'
                    >
                        Publicar Material
                    </button>
                </form>
            </section>
        </div>

        {/* 3. PANEL DERECHO: LISTA DE MATERIALES */}
        <section className='bg-[#0d1512] border border-gray-800 rounded-xl p-6 h-fit'>
            <div className='flex items-center gap-3 mb-6 text-yellow-400'>
                <FileText size={24} />
                <h3 className='text-xl font-semibold text-white'>Materiales Publicados</h3>
            </div>
            
            {materiales.length === 0 ? (
                <p className='text-gray-500 text-center py-10'>Aún no has subido materiales.</p>
            ) : (
                <div className='grid gap-3'>
                    {materiales.map((item) => (
                        <div key={item.idMaterial} className='flex items-center justify-between bg-black/20 p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-red-500/20 p-2 rounded text-red-400'>
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <p className='text-white font-medium'>{item.NombreArchivo}</p>
                                    <p className='text-xs text-gray-500 uppercase'>{item.Tipo}</p>
                                </div>
                            </div>
                            <a 
                                href={`${import.meta.env.VITE_API_URL}${item.url}`} 
                                target="_blank" 
                                rel="noreferrer"
                                className='text-gray-400 hover:text-white transition p-2'
                                title="Descargar / Ver"
                            >
                                <Download size={20} />
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </section>

      </div>
    </div>
  )
}

export default CursoDocenteLayout