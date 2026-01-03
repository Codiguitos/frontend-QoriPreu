// src/components/organisms/configuracion/PerfilSection.tsx
import React from 'react';
import Text from '../../../atoms/Text';
import Input from '../../../atoms/Input';
import Label from '../../../atoms/Label';
import Avatar from '../../../atoms/Avatar';

type PerfilData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  dni: string;
  direccion: string;
  ciudad: string;
};
type PerfilSectionProps = {
  perfil: PerfilData;
  onChange: (field: keyof PerfilData, value: string) => void;
};

const PerfilSection = ({ perfil, onChange }: PerfilSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0d1512] rounded-2xl p-6 border border-gray-800">
        <Text size="h3" className="text-gray-100 mb-6">Información Personal</Text>

        {/* Avatar Section */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-800">
          <Avatar initials="JD" editable />
          <div>
            <Text size="h4" className="text-gray-100">{perfil.nombre} {perfil.apellido}</Text>
            <Text size="p" className="text-gray-400 mb-3">Estudiante • Plan Ordinario</Text>
            <button className="text-[#00A676] hover:text-[#00d494] font-semibold text-sm">
              Cambiar foto de perfil
            </button>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label>Nombres</Label>
            <Input
              value={perfil.nombre}
              onChange={(e) => onChange('nombre', e.target.value)}
            />
          </div>
          <div>
            <Label>Apellidos</Label>
            <Input
              value={perfil.apellido}
              onChange={(e) => onChange('apellido', e.target.value)}
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={perfil.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
          </div>
          <div>
            <Label>Teléfono</Label>
            <Input
              type="tel"
              value={perfil.telefono}
              onChange={(e) => onChange('telefono', e.target.value)}
            />
          </div>
          <div>
            <Label>DNI</Label>
            <Input
              value={perfil.dni}
              onChange={(e) => onChange('dni', e.target.value)}
            />
          </div>
          <div>
            <Label>Ciudad</Label>
            <Input
              value={perfil.ciudad}
              onChange={(e) => onChange('ciudad', e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <Label>Dirección</Label>
            <Input
              value={perfil.direccion}
              onChange={(e) => onChange('direccion', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilSection;