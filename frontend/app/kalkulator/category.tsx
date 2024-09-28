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

interface CategoryProps {
  name: string;
}

const Category = ({ name }: CategoryProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Tile label={name} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            Uzupełnij poniższy formularz, aby obliczyć emisję CO<sub>2</sub> generowaną przez Twoją podróż.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Category;
