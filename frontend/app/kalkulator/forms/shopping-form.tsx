'use client';

import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import ButtonToggleGroup from '@/components/forms/button-toggle-group';
import TransportCalculated from './transport-calculated';
import {ShoppingFormData, shoppingFormInitials} from './constants';
import SliderWithValue from '@/components/forms/slider-with-value';
import Chips from '@/components/ui/chips';
import Image from 'next/image';
import {DialogClose} from "@/components/ui/dialog";
import {localProducts} from "@/app/kalkulator/forms/food-form";


export const shoppingTypes = [
    {label: 'Odzież', value: 'clothes'},
    {label: 'Obuwie', value: 'shoes'},
    {label: 'Elektronika', value: 'electronics'},
];

export const shoppingFrequencies = [
    {label: 'Codziennie', value: 'everyday'},
    {label: 'Tygodniowo', value: 'weekly'},
    {label: 'Miesięcznie', value: 'monthly'},
];

export const houseType = [
    {label: 'Mieszkanie w bloku', value: 'aparment'},
    {label: 'Dom jednorodzinny', value: 'house'},
];


const ShoppingForm = () => {
    const form = useForm<ShoppingFormData>({
        defaultValues: shoppingFormInitials,
    });

    const onConfirm = () => {
        const data = form.getValues();
        console.log(data);
        //const calculated = calculateEmission(data);
        const calculated = 350;
        localStorage.setItem('totalValue', calculated.toString());
    };

    return (
        <FormProvider {...form}>
            <div className='grid gap-6'>

                <ButtonToggleGroup name='shoppingType' label='Rodzaj zakupów' data={shoppingTypes}/>

                <SliderWithValue
                    name='costs'
                    label='Kwota wydatków'
                    step={10}
                    min={1}
                    max={1000}
                    unit='zł'
                />

                <ButtonToggleGroup name='shoppingFrequency' label='Częstotliwość zakupów' data={shoppingFrequencies}/>


                <ButtonToggleGroup name='local' label='Wybór produktów lokalnych' data={localProducts}/>

                <TransportCalculated/>

                <Image src='/trees.png' alt='drzewa' width={480} height={300} className='w-full h-auto'/>

                <DialogClose asChild>
                    <Chips onClick={onConfirm} label='Zapisz' className='bg-green w-32 mx-auto'/>
                </DialogClose>
            </div>
        </FormProvider>
    );
};

export default ShoppingForm;
