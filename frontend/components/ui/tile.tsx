import { IconComponent } from '@/types';
import clsx from 'clsx';
import React from 'react';

interface TileProps {
  label: string;
  Icon?: IconComponent;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

const Tile = ({ label, Icon, className, active, onClick }: TileProps) => {
  return (
    <div
      className={clsx(
        'group grid place-items-center gap-3 rounded-md px-4 py-4 shadow-lg transition-colors duration-300 hover:bg-blue active:bg-blue',
        className,
        {
          'bg-blue text-white': active,
        },
      )}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={clsx(
            'text-4xl text-blue group-hover:text-white group-active:text-white',
            {
              'text-white': active,
            },
          )}
        />
      )}
      <span
        className={clsx(
          'text-blue group-hover:text-white group-active:text-white',
          {
            'text-white': active,
          },
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default Tile;
