// Convierte "08:30:00" a minutos (ej: 510) para poder comparar números
const timeToMinutes = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

// Verifica si dos rangos de horas se superponen
const isOverlapping = (startA: string, endA: string, startB: string, endB: string) => {
  const aStart = timeToMinutes(startA);
  const aEnd = timeToMinutes(endA);
  const bStart = timeToMinutes(startB);
  const bEnd = timeToMinutes(endB);
  
  // Fórmula clásica de superposición: (StartA < EndB) y (EndA > StartB)
  return aStart < bEnd && aEnd > bStart;
};

// Función principal: Revisa si el curso nuevo choca con los que ya elegiste
export const findConflict = (newCourse: any, currentSelection: any[]) => {
  if (!newCourse.horarios) return null;

  for (const existing of currentSelection) {
    if (!existing.horarios) continue;

    // Comparamos cada horario del nuevo curso con cada horario de los existentes
    for (const hNew of newCourse.horarios) {
      for (const hExist of existing.horarios) {
        
        // 1. Si es el mismo día...
        if (hNew.dia === hExist.dia) {
          // 2. ...y las horas se cruzan
          if (isOverlapping(hNew.horaInicio, hNew.horaFinal, hExist.horaInicio, hExist.horaFinal)) {
            return {
              courseName: existing.nombreCurso, // Devolvemos el nombre del culpable
              day: hNew.dia,
              time: `${hExist.horaInicio.slice(0,5)} - ${hExist.horaFinal.slice(0,5)}`
            };
          }
        }
      }
    }
  }
  return null; // Todo limpio
};