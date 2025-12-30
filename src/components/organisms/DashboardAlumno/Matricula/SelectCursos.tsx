import React from 'react';
import type { Curso } from '../../../../type/Curso';
import CursoCard from '../../../molecules/dashboard/Matricula/CursoCard';

type Props = {
  courses: Curso[];
  selectedCourses: number[];
  toggleCourse: (idCurso: number) => void;
};

const SelectCursos: React.FC<Props> = ({ courses=[], selectedCourses, toggleCourse }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map(course => (
        <CursoCard
          key={course.idCurso}
          course={course}
          isSelected={selectedCourses.includes(course.idCurso)}
          toggleCourse={() => toggleCourse(course.idCurso)}
        />
      ))}
    </section>
  );
};

export default SelectCursos;
