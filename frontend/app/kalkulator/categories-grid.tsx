import React from 'react';
import Category from './category';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import NetworkWifi3BarOutlinedIcon from '@mui/icons-material/NetworkWifi3BarOutlined';
import TransportForm from "@/app/kalkulator/forms/transport-form";
import FoodForm from "@/app/kalkulator/forms/food-form";
import PowerForm from "@/app/kalkulator/forms/power-form";
import ShoppingForm from "@/app/kalkulator/forms/shopping-form";
import HeatingForm from "@/app/kalkulator/forms/heating-form";
import InternetForm from "@/app/kalkulator/forms/internet-form";

export const CategoriesGrid = () => {
    return (
        <div className='bg-blue-100 mt-2 grid grid-cols-3 gap-3 px-6 py-8'>
            <Category name='Transport' Icon={BikeScooterIcon} desc="Uzupełnij poniższy formularz, aby obliczyć emisję CO2
            generowaną przez Twoją podróż.">
                <TransportForm/>
            </Category>
            <Category name='Jedzenie' Icon={FastfoodOutlinedIcon}
                      desc="Uzupełnij poniższy formularz, aby obliczyć emisję CO2 generowaną przez jedzenie, które spożywałeś">
                <FoodForm/>
            </Category>
            <Category name='Zakupy' Icon={ShoppingCartOutlinedIcon} desc="Uzupełnij poniższy formularz, aby obliczyć emisję CO2 twoich zakupów">
                <ShoppingForm/>
            </Category>
            <Category name='Prąd' Icon={EnergySavingsLeafOutlinedIcon} desc="Uzupełnij poniższy formularz, aby obliczyć emisję CO2 użytego prądu">
                <PowerForm/>
            </Category>
            <Category name='Ogrzewanie' Icon={DeviceThermostatOutlinedIcon} desc="Uzupełnij poniższy formularz, aby obliczyć emisję CO2 ogrzewania">
                <HeatingForm/>
            </Category>
            <Category name='Internet' Icon={NetworkWifi3BarOutlinedIcon} desc="Uzupełnij poniższy formularz, aby obliczyć emisję CO2 internetu">
                <InternetForm/>
            </Category>
        </div>
    );
};
