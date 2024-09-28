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

interface TransportFormData {
  meanOfTransport: 'car' | 'bus' | 'train';
  distance: number;
  people: number;
  fuel: 'petrol' | 'diesel' | 'electric';
  averageConsumption: number;
}

const initialValues: TransportFormData = {
  meanOfTransport: 'car',
  distance: 20,
  people: 1,
  fuel: 'petrol',
  averageConsumption: 7,
};

const TransportForm = () => {
  const form = useForm<TransportFormData>({
    defaultValues: initialValues,
  });

  return (
    <FormProvider {...form}>
      <div className='grid gap-4'>
        <TileToggleGroup name='meanOfTransport' data={transportData} />
        <ButtonToggleGroup name='fuel' data={fuelData} />
      </div>
    </FormProvider>
  );
};

export default TransportForm;
