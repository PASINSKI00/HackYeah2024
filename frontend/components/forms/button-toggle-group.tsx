import React from 'react';
import { useController } from 'react-hook-form';
import Chips from '../ui/chips';

export type ToggleGroupData = {
  value: string;
  label: string;
};

interface ButtonToggleGroupProps {
  name: string;
  label: string;
  data: ToggleGroupData[];
}

function ButtonToggleGroup({ name, label, data }: ButtonToggleGroupProps) {
  const { field } = useController({ name });

  return (
    <div>
      <label className='text-blue-700 mb-2 block text-lg font-bold'>
        {label}
      </label>
      <div className='flex gap-4'>
        {data.map((item) => (
          <Chips
            key={item.value}
            label={item.label}
            inactive={field.value !== item.value}
            onClick={() => field.onChange(item.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default ButtonToggleGroup;
