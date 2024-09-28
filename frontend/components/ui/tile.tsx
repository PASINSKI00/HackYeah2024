import React from 'react';

interface TileProps {
  label: string;
  icon?: React.ReactNode;
}

const Tile = ({ label, icon }: TileProps) => {
  return (
    <div className='rounded-md px-4 py-4 text-blue shadow-lg active:bg-blue active:text-white'>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Tile;
