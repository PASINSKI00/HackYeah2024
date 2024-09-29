import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Tile from '@/components/ui/tile';
import { IconComponent } from '@/types';

interface CategoryProps {
  name: string;
  Icon: IconComponent;
  children?: React.ReactNode;
  desc: string;
}

const Category = ({ name, Icon, children, desc }: CategoryProps) => {
  return (
    <Dialog>
      <DialogTrigger className='rounded-md bg-white'>
        <Tile label={name} Icon={Icon} />
      </DialogTrigger>
      <DialogContent className='w-full md:w-[100px]'>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Category;
