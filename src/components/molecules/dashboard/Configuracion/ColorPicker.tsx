// src/components/molecules/configuracion/ColorPicker.tsx
import React from 'react';
import { Check } from 'lucide-react';
import Text from '../../../atoms/Text';

type ColorOption = {
  nombre: string;
  color: string;
};

type ColorPickerProps = {
  colors: ColorOption[];
  selected: string;
  onSelect: (color: string) => void;
};

const ColorPicker = ({ colors, selected, onSelect }: ColorPickerProps) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {colors.map((item) => (
        <button
          key={item.color}
          onClick={() => onSelect(item.color)}
          className={`p-4 rounded-xl border-2 transition-all ${
            selected === item.color ? 'border-white' : 'border-gray-800'
          }`}
          style={{ backgroundColor: item.color }}
        >
          <div className="h-12 flex items-center justify-center">
            {selected === item.color && <Check className="text-white" size={24} />}
          </div>
          <Text size="small" className="text-white text-center mt-2">
            {item.nombre}
          </Text>
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;