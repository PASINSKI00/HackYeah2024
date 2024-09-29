import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import Tile from '@/components/ui/tile';
import { IconComponent } from '@/types';
import TransportForm from './forms/transport-form';

interface CategoryProps {
  name: string;
  Icon: IconComponent;
  children?: React.ReactNode;
}

const Category = ({ name, Icon, children, desc }: CategoryProps) => {
  return (
    <Dialog>
      <DialogTrigger className='bg-white rounded-md'>
        <Tile label={name} Icon={Icon}/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            {desc}
          </DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );


};

export default Category;
