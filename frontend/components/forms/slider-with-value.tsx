'use client';

import { Slider } from '@/components/ui/slider';
import { useController } from 'react-hook-form';

export interface SliderWithValueProps {
  name: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}

export default function SliderWithValue({
  name,
  label,
  unit,
  max = 100,
  min = 0,
  step = 1,
}: SliderWithValueProps) {
  const { field } = useController({ name });

  const handleChange = (newValue: number[]) => {
    const updatedValue = newValue[0];
    field.onChange(updatedValue);
  };

  return (
    <div>
      <label className='mb-2 block text-lg font-bold text-blue-700'>
        {label}
      </label>

      <div className='flex items-center gap-5'>
        <Slider
          step={step}
          onValueChange={handleChange}
          value={[field.value]}
          min={min}
          max={max}
        />
        <span className='flex h-8 w-32 flex-row items-center justify-center rounded-full bg-blue px-2 text-xs text-white'>
          {unit ? `${field.value} ${unit}` : field.value}
        </span>
      </div>
    </div>
  );
}
