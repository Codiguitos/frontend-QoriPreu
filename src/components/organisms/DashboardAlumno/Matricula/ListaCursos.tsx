import type { Curso2 as Curso } from '../../../../type/Curso'
type type={
    selectedCursos:Curso[]
}
const ListaCursos = ({selectedCursos}:type) => {
  return (
      <div className="space-y-3 mb-6">
                  {selectedCursos.map(course => (
                    <div key={course.idCurso} className="bg-gray-900/50 p-3 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-sm">{course.nombreCurso}</h3>
                        <span className="text-green-400 font-bold">S/ {course.Precio}</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-1">{course.docente?.nombre +" "+ course.docente?.apellido|| "Sin docente asignado"}</p>
                      <p className="text-xs text-gray-500">{course.fechaInicio}</p>
                    </div>
                  ))}
        </div>
  )
}

export default ListaCursos