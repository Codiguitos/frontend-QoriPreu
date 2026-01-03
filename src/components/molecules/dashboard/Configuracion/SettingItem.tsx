// src/components/molecules/configuracion/SettingItem.tsx
import React from 'react';
import Text from '../../../atoms/Text';
import Toggle from '../../../atoms/Toggle';

type SettingItemProps = {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const SettingItem = ({ title, description, checked, onChange }: SettingItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#0a0e0d] rounded-xl">
      <div className="flex-1">
        <Text size="p" className="font-semibold text-gray-100">{title}</Text>
        <Text size="small" className="text-gray-400">{description}</Text>
      </div>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
};

export default SettingItem;