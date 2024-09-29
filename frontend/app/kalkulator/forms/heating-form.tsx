'use client';

import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import ButtonToggleGroup from '@/components/forms/button-toggle-group';
import TransportCalculated from './transport-calculated';
import {HeatingFormData, heatingFormInitials} from './constants';
import SliderWithValue from '@/components/forms/slider-with-value';
import Chips from '@/components/ui/chips';
import Image from 'next/image';
import {DialogClose} from "@/components/ui/dialog";


export const heatingTypes = [
    {label: 'Ogrzewanie gazowe', value: 'gas'},
    {label: 'Ogrzewanie na węgiel', value: 'coal'},
];

export const isolationTypes = [
    {label: 'Bardzo dobra', value: 'veryGood'},
    {label: 'Dobra', value: 'good'},
    {label: 'Przeciętna', value: 'average'},
];

export const greenEnergy = [
    {label: 'Tak', value: 'yes'},
    {label: 'Nie', value: 'no'},
];

const HeatingForm = () => {
    const form = useForm<HeatingFormData>({
        defaultValues: heatingFormInitials,
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
                <ButtonToggleGroup name='heatingType' label='Rodzaj systemu grzewczego' data={heatingTypes}/>

                <SliderWithValue
                    name='powerConsumption'
                    label='Zużycie prądu'
                    step={1}
                    min={1}
                    max={500}
                    unit='kWh'
                />

                <SliderWithValue
                    name='areaOfHeating'
                    label='Powierzchnia ogrzewania'
                    step={1}
                    min={1}
                    max={100}
                    unit='m2'
                />

                <ButtonToggleGroup name='isolation' label='Izolacja budynku' data={isolationTypes}/>

                <ButtonToggleGroup name='frequency' label='Odnawialne źródła energii' data={greenEnergy}/>

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

export default HeatingForm;
