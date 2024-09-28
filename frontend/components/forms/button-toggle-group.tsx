import clsx from 'clsx';
import React from 'react';
import { useController } from 'react-hook-form';

export type ToggleGroupData = {
  value: string;
  label: string;
};

interface ButtonToggleGroupProps {
  name: string;
  data: ToggleGroupData[];
}

const ButtonToggleGroup = ({ name, data }: ButtonToggleGroupProps) => {
  const { field } = useController({ name });

  return (
    <div className='flex gap-4'>
      {data.map((item) => (
        <button
         key={item.value}
          className={clsx('bg-white', {
            'bg-blue': field.value === item.value,
          })}
          onClick={() => field.onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonToggleGroup;
