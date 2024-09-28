import React from 'react';
import Category from './category';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import NetworkWifi3BarOutlinedIcon from '@mui/icons-material/NetworkWifi3BarOutlined';

export const CategoriesGrid = () => {
  return (
    <div className='bg-blue-100 mt-2 grid grid-cols-3 gap-3 px-6 py-8'>
      <Category name='Transport' Icon={BikeScooterIcon} />
      <Category name='Jedzenie' Icon={FastfoodOutlinedIcon} />
      <Category name='Zakupy' Icon={ShoppingCartOutlinedIcon} />
      <Category name='Prąd' Icon={EnergySavingsLeafOutlinedIcon} />
      <Category name='Ogrzewanie' Icon={DeviceThermostatOutlinedIcon} />
      <Category name='Internet' Icon={NetworkWifi3BarOutlinedIcon} />
    </div>
  );
};
