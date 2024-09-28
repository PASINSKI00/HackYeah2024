import { IconComponent } from '@/types';
import React from 'react';
interface TileProps {
  label: string;
  Icon?: IconComponent;
}

const Tile = ({ label, Icon }: TileProps) => {
  return (
    <div className='group grid place-items-center gap-3 rounded-md px-4 py-4 shadow-lg duration-300 transition-colors hover:bg-blue active:bg-blue'>
      {Icon && (
        <Icon className='text-4xl text-blue group-hover:text-white group-active:text-white' />
      )}
      <span className='text-blue group-hover:text-white group-active:text-white'>
        {label}
      </span>
    </div>
  );
};

export default Tile;
