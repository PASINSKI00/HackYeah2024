'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ButtonToggleGroup from '@/components/forms/button-toggle-group';
import EmissionsCalculated from './emissions-calculated';
import { InternetFormData, internetFormInitials } from './constants';
import SliderWithValue from '@/components/forms/slider-with-value';
import Chips from '@/components/ui/chips';
import Image from 'next/image';
import { DialogClose } from '@/components/ui/dialog';

export const deviceTypes = [
  { label: 'Komputer stacjonarny', value: 'pc' },
  { label: 'Laptop', value: 'laptop' },
  { label: 'Tablet', value: 'tablet' },
];

export const activitiesType = [
  { label: 'Praca', value: 'work' },
  { label: 'Rozrywka', value: 'entertainment' },
  { label: 'Media społecznościowe', value: 'socialMedia' },
];

const InternetForm = () => {
  const form = useForm<InternetFormData>({
    defaultValues: internetFormInitials,
  });

  const onConfirm = () => {
    const data = form.getValues();
    console.log(data);
    // const calculated = calculateEmission(data);
    const calculated = 350;
    localStorage.setItem('totalValue', calculated.toString());
  };

  return (
    <FormProvider {...form}>
      <div className='grid gap-6'>
        <ButtonToggleGroup
          name='deviceType'
          label='Rodzaj urządzenia'
          data={deviceTypes}
        />

        <SliderWithValue
          name='time'
          label='Czas korzystania z internetu'
          step={1}
          min={1}
          max={5}
          unit='h'
        />

        <ButtonToggleGroup
          name='activityType'
          label='Rodzaj aktywności'
          data={activitiesType}
        />

        <SliderWithValue
          name='energyConsumption'
          label='Średnie zużycie energii'
          step={1}
          min={1}
          max={5}
          unit='kWh'
        />

        <EmissionsCalculated />

        <Image
          src='/trees.png'
          alt='drzewa'
          width={480}
          height={300}
          className='h-auto w-full'
        />

        <DialogClose asChild>
          <Chips
            onClick={onConfirm}
            label='Zapisz'
            className='mx-auto w-32 bg-green'
          />
        </DialogClose>
      </div>
    </FormProvider>
  );
};

export default InternetForm;
