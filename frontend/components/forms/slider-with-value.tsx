'use client';

import { Slider } from '@/components/ui/slider';
import { useState, useEffect } from 'react';

export interface SliderWithValueProps {
  min: number;
  max: number;
  defaultValue: number;
  step: number;
  onChange: (value: number) => void;
  unit?: string;
}

export default function SliderWithValue({
  defaultValue = 0,
  max = 100,
  min = 0,
  onChange,
  step = 1,
  unit,
}: SliderWithValueProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (newValue: number[]) => {
    const updatedValue = newValue[0];
    setValue(updatedValue);
    onChange(updatedValue);
  };

  return (
    <div className='flex flex-row items-center gap-5'>
      <Slider
        className='max-w-52'
        step={step}
        onValueChange={handleChange}
        value={[value]}
        min={min}
        max={max}
      />
      <span className='flex h-8 w-12 flex-row items-center justify-center rounded-full bg-blue text-xs text-white'>
        {unit ? `${value} ${unit}` : value}
      </span>
    </div>
  );
}
