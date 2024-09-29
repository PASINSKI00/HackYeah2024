'use client';

import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import ButtonToggleGroup from '@/components/forms/button-toggle-group';
import TransportCalculated from './transport-calculated';
import {PowerFormData, powerFormInitials} from './constants';
import SliderWithValue from '@/components/forms/slider-with-value';
import Chips from '@/components/ui/chips';
import Image from 'next/image';
import {DialogClose} from "@/components/ui/dialog";


export const powerSources = [
    {label: 'Energia z sieci', value: 'net'},
    {label: 'Energia odnawialna', value: 'greenEnergy'},
];

export const houseType = [
    {label: 'Mieszkanie w bloku', value: 'aparment'},
    {label: 'Dom jednorodzinny', value: 'house'},
];


const PowerForm = () => {
    const form = useForm<PowerFormData>({
        defaultValues: powerFormInitials,
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

                <SliderWithValue
                    name='powerConsumption'
                    label='Zużycie prądu'
                    step={1}
                    min={1}
                    max={250}
                    unit='kWh'
                />

                <ButtonToggleGroup name='powerSource' label='Żródło energii' data={powerSources}/>

                <SliderWithValue
                    name='inhabitantCount'
                    label='Liczba mieszkańców'
                    step={1}
                    min={1}
                    max={10}
                    unit=' '
                />

                <ButtonToggleGroup name='houseType' label='Typ mieszkania/domu' data={houseType}/>

                <TransportCalculated/>

                <Image src='/trees.png' alt='drzewa' width={480} height={300} className='w-full h-auto'/>

                {/* TODO: powinno to zamykać modal */}
                <DialogClose asChild>
                    <Chips onClick={onConfirm} label='Zapisz' className='bg-green w-32 mx-auto'/>
                </DialogClose>
            </div>
        </FormProvider>
    );
};

export default PowerForm;
