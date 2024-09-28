import React from 'react';
import { IconComponent } from '@/types';
import Tile from '../ui/tile';
import { useController } from 'react-hook-form';

export type ToggleGroupData = {
  value: string;
  label: string;
  Icon: IconComponent;
};

interface ToggleGroupTileProps {
  name: string;
  label: string;
  data: ToggleGroupData[];
}

function TileToggleGroup({ name, label, data }: ToggleGroupTileProps) {
  const { field } = useController({ name });

  return (
    <div>
      <label className='text-blue-700 mb-2 block text-lg font-bold'>
        {label}
      </label>
      <div className='flex gap-4'>
        {data.map((item) => (
          <Tile
            key={item.value}
            label={item.label}
            Icon={item.Icon}
            className='cursor-pointer flex-1'
            active={field.value === item.value}
            onClick={() => field.onChange(item.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default TileToggleGroup;
