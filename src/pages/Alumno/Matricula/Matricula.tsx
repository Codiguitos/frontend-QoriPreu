import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../../config/stripe";

import { useAlumnoStore } from "../../../store/useAlumnoStore";
import type { Curso } from "../../../type/Curso";

import Horario from "../../../components/organisms/DashboardAlumno/Matricula/Horario";
import SelectCursos from "../../../components/organisms/DashboardAlumno/Matricula/SelectCursos";
import Summary from "../../../components/molecules/dashboard/Matricula/Summary";
import PaymentSystem from "../../../components/organisms/DashboardAlumno/Matricula/PaymentSystem";

import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";

const Matricula = () => {
  const { getCatalogo, catalogo } = useAlumnoStore();

  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [showSchedule, setShowSchedule] = useState(false);

  useEffect(() => {
    getCatalogo();
  }, []);

  // Días y horarios visibles
  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const timeSlots = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
  ];

  // Seleccionar / quitar curso
  const toggleCourse = (idCurso: number) => {
    setSelectedCourses((prev) =>
      prev.includes(idCurso)
        ? prev.filter((id) => id !== idCurso)
        : [...prev, idCurso]
    );
  };

  // Cursos completos seleccionados
  const selectedCoursesFull: Curso[] = selectedCourses
    .map((id) => catalogo.find((c) => c.idCurso === id))
    .filter((c): c is Curso => Boolean(c));

  // Construir grilla del horario
  const getScheduleGrid = () => {
    const grid: Record<string, Curso[]> = {};

    selectedCoursesFull.forEach((course) => {
      course.horarios.forEach((slot) => {
        const formattedTime = `${slot.horaInicio.slice(
          0,
          5
        )} - ${slot.horaFinal.slice(0, 5)}`;

        const key = `${slot.dia}-${formattedTime}`;

        if (!grid[key]) grid[key] = [];
        grid[key].push(course);
      });
    });

    return grid;
  };

  // Total a pagar
  const totalPrice = selectedCoursesFull.reduce(
    (sum, course) => sum + Number(course.Precio),
    0
  );

  return (
    <div className="w-full space-y-6 p-8">
      {/* Título */}
      <div className="grid gap-2">
        <Text size="h3" className="text-white">
          Matrícula de Cursos
        </Text>
        <Text size="p">
          Selecciona tus cursos, revisa tu horario y realiza el pago
        </Text>
      </div>

      {/* Resumen */}
      <Summary
        nroCursos={selectedCoursesFull.length}
        totalPrice={totalPrice}
      />

      {/* Selección de cursos */}
      <SelectCursos
        courses={catalogo}
        selectedCourses={selectedCourses}
        toggleCourse={toggleCourse}
      />

      {/* Botón horario */}
      {selectedCoursesFull.length > 0 && (
        <Button variant="primary" onClick={() => setShowSchedule((p) => !p)}>
          {showSchedule ? "Ocultar Horario" : "Ver Horario"}
        </Button>
      )}

      {/* Horario */}
      {showSchedule && selectedCoursesFull.length > 0 && (
        <Horario
          selectedCourses={selectedCoursesFull}
          days={days}
          timeSlots={timeSlots}
          getScheduleGrid={getScheduleGrid}
        />
      )}

 

      {/* Pago con Stripe */}
      {selectedCoursesFull.length > 0 && (
        <div className="mt-6">
          <Elements stripe={stripePromise}>
            <PaymentSystem selectedCursos={selectedCoursesFull} />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Matricula;
