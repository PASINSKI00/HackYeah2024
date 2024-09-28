import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { IconComponent } from '@/types';
import Tile from '../ui/tile';

export type ToggleGroupData = {
  value: string;
  label: string;
  Icon: IconComponent;
};

interface ToggleGroupTileProps {
  // name: string;
  data: ToggleGroupData[];
}

const TileToggleGroup = ({ data }: ToggleGroupTileProps) => {
  return (
    <ToggleGroup type='single'>
      {data.map((item) => (
        <ToggleGroupItem value={item.value} key={item.value}>
        <Tile label={item.label} Icon={item.Icon} />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default TileToggleGroup;
