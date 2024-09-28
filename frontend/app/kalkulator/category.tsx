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
}

const Category = ({ name, Icon }: CategoryProps) => {
  return (
    <Dialog>
      <DialogTrigger className='bg-white rounded-md'>
        <Tile label={name} Icon={Icon} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            Uzupełnij poniższy formularz, aby obliczyć emisję CO<sub>2</sub>{' '}
            generowaną przez Twoją podróż.
          </DialogDescription>
        </DialogHeader>

        <TransportForm />
      </DialogContent>
    </Dialog>
  );
};

export default Category;
