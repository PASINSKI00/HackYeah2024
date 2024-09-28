'use client';

import TileToggleGroup, { ToggleGroupData } from '@/components/forms/tile-toggle-group';
import React from 'react';
import { useForm } from 'react-hook-form';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import ButtonToggleGroup from '@/components/forms/button-toggle-group';

const transportData: ToggleGroupData[] = [
   { label: 'Samochód', value: '', Icon: DirectionsCarFilledOutlinedIcon },
   { label: 'Autobus', value: '', Icon: DirectionsBusOutlinedIcon },
   { label: 'Pociąg', value: '', Icon: TrainOutlinedIcon },
]

const TransportForm = () => {
  const form = useForm();

  return (
    <div className='grid gap-4'>
      <TileToggleGroup data={transportData} />
      <ButtonToggleGroup />
    </div>
  );
};

export default TransportForm;
