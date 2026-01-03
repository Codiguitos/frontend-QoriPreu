import React from 'react';
import type { Curso2 as Curso } from '../../../../type/Curso';

type Props = {
  selectedCourses: Curso[];
};

const Legend: React.FC<Props> = ({ selectedCourses }) => {
  return (
    <div className="mt-6 pt-6 border-t border-gray-700">
      <h3 className="text-sm font-semibold mb-3 text-gray-400">
        CURSOS SELECCIONADOS:
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {selectedCourses.map(course => (
          <div
            key={course.idCurso}
            className="flex items-center gap-2 bg-gray-900 p-2 rounded-lg"
          >
            <div className="w-3 h-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex-shrink-0" />
            <span className="text-sm truncate">
              {course.nombreCurso ?? 'Sin nombre'} - {course.docente?.nombre ?? 'Sin docente'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
