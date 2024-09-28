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
  data: ToggleGroupData[];
}

const TileToggleGroup = ({ name, data }: ToggleGroupTileProps) => {
  const { field } = useController({ name });

  return (
    <div className='flex gap-4'>
      {data.map((item) => (
        <Tile
          key={item.value}
          label={item.label}
          Icon={item.Icon}
          active={field.value === item.value}
          onClick={() => field.onChange(item.value)}
        />
      ))}
    </div>
  );
};

export default TileToggleGroup;
