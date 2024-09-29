'use client';

import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import ButtonToggleGroup from '@/components/forms/button-toggle-group';
import TransportCalculated from './transport-calculated';
import {internetFormInitials, TransportFormData} from './constants';
import SliderWithValue from '@/components/forms/slider-with-value';
import Chips from '@/components/ui/chips';
import Image from 'next/image';
import {calculateEmission} from './helpers';
import {DialogClose} from "@/components/ui/dialog";


export const deviceTypes = [
    {label: 'Komputer stacjonarny', value: 'pc'},
    {label: 'Laptop', value: 'laptop'},
    {label: 'Tablet', value: 'tablet'},
];

export const activitiesType = [
    {label: 'Praca', value: 'work'},
    {label: 'Rozrywka', value: 'entertainment'},
    {label: 'Media społecznościowe', value: 'socialMedia'},
];

const InternetForm = () => {
    const form = useForm<TransportFormData>({
        defaultValues: internetFormInitials,
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

                <ButtonToggleGroup name='deviceType' label='Rodzaj urządzenia' data={deviceTypes}/>

                <SliderWithValue
                    name='time'
                    label='Czas korzystania z internetu'
                    step={1}
                    min={1}
                    max={5}
                    unit='h'
                />

                <ButtonToggleGroup name='activityType' label='Rodzaj aktywności' data={activitiesType}/>

                <SliderWithValue
                    name='energyConsumption'
                    label='Średnie zużycie energii'
                    step={1}
                    min={1}
                    max={5}
                    unit='kWh'
                />

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

export default InternetForm;
