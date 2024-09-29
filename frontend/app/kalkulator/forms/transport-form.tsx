'use client';

import TileToggleGroup, {
  ToggleGroupData,
} from '@/components/forms/tile-toggle-group';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import ButtonToggleGroup from '@/components/forms/button-toggle-group';
import EmissionsCalculated from './emissions-calculated';
import { TransportFormData, transportFormInitials } from './constants';
import SliderWithValue from '@/components/forms/slider-with-value';
import Chips from '@/components/ui/chips';
import Image from 'next/image';
import { calculateEmission } from './helpers';
import { DialogClose } from '@/components/ui/dialog';

const transportData: ToggleGroupData[] = [
  { label: 'Samochód', value: 'car', Icon: DirectionsCarFilledOutlinedIcon },
  { label: 'Autobus', value: 'bus', Icon: DirectionsBusOutlinedIcon },
  { label: 'Pociąg', value: 'train', Icon: TrainOutlinedIcon },
];

export const fuelData = [
  { label: 'Benzyna', value: 'petrol' },
  { label: 'Diesel', value: 'diesel' },
  { label: 'Elektryczny', value: 'electric' },
];

const TransportForm = () => {
  const form = useForm<TransportFormData>({
    defaultValues: transportFormInitials,
  });

  const onConfirm = () => {
    const data = form.getValues();
    console.log(data);
    const calculated = calculateEmission(data);
    localStorage.setItem('totalValue', calculated.toString());
  };

  return (
    <FormProvider {...form}>
      <div className='grid gap-6'>
        <TileToggleGroup
          name='meanOfTransport'
          label='Rodzaj transportu'
          data={transportData}
        />

        <SliderWithValue
          name='distance'
          label='Odległość'
          step={1}
          min={1}
          max={100}
          unit='km'
        />

        <SliderWithValue
          name='people'
          label='Liczba osób'
          step={1}
          min={1}
          max={10}
        />

        <ButtonToggleGroup name='fuel' label='Rodzaj paliwa' data={fuelData} />

        <SliderWithValue
          name='averageConsumption'
          label='Średnie spalanie'
          step={0.5}
          min={1}
          max={20}
          unit='l/100km'
        />

        <EmissionsCalculated<TransportFormData>
          calculateEmission={calculateEmission}
        />

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

export default TransportForm;
