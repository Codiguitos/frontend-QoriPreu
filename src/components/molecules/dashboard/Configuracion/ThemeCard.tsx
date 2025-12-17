// src/components/molecules/configuracion/ThemeCard.tsx
import React from 'react';
import Text from '../../../atoms/Text';

type ThemeCardProps = {
  icon: React.ReactNode;
  name: string;
  selected: boolean;
  onClick: () => void;
};

const ThemeCard = ({ icon, name, selected, onClick }: ThemeCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-xl border-2 transition-all ${
        selected
          ? 'border-[#00A676] bg-[#00A676]/10'
          : 'border-gray-800 bg-[#0a0e0d]'
      }`}
    >
      <div className="flex justify-center mb-3">{icon}</div>
      <Text size="p" className="font-semibold text-gray-100 text-center">
        {name}
      </Text>
    </button>
  );
};

export default ThemeCard;