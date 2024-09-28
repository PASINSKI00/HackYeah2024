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
import TransportCalculated from './transport-calculated';
import { TransportFormData, transportFormInitials } from './constants';

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

  return (
    <FormProvider {...form}>
      <div className='grid gap-6'>
        <TileToggleGroup
          name='meanOfTransport'
          label='Rodzaj transportu'
          data={transportData}
        />
        <ButtonToggleGroup name='fuel' label="Rodzaj paliwa" data={fuelData} />
        <TransportCalculated />
      </div>
    </FormProvider>
  );
};

export default TransportForm;
