'use client';

import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import ButtonToggleGroup from '@/components/forms/button-toggle-group';
import TransportCalculated from './transport-calculated';
import {FoodFormData, foodFormInitials} from './constants';
import SliderWithValue from '@/components/forms/slider-with-value';
import Chips from '@/components/ui/chips';
import Image from 'next/image';
import {calculateFoodEmission} from './helpers';
import {DialogClose} from "@/components/ui/dialog";


export const dietData = [
    {label: 'Mięsna', value: 'meat'},
    {label: 'Wegetarianska', value: 'vegetarian'},
    {label: 'Wegańska', value: 'vegan'},
];

export const localProducts = [
    {label: 'Tak', value: 'yes'},
    {label: 'Nie', value: 'no'},
];

export const frequencyOutside = [
    {label: 'Codzinnie', value: 'everyday'},
    {label: 'Kilka razy w miesiącu', value: 'fewTimesInWeek'},
];

const FoodForm = () => {
    const form = useForm<FoodFormData>({
        defaultValues: foodFormInitials,
    });

    const onConfirm = () => {
        const data = form.getValues();
        console.log(data);
        const calculated = calculateFoodEmission(data);
        localStorage.setItem('totalValue', calculated.toString());
    };

    return (
        <FormProvider {...form}>
            <div className='grid gap-6'>
                <ButtonToggleGroup name='diet' label='Rodzaj diety' data={dietData}/>

                <ButtonToggleGroup name='local' label='Wybór produktów lokalnych' data={localProducts}/>

                <ButtonToggleGroup name='frequency' label='Wybór produktów lokalnych' data={frequencyOutside}/>

                <SliderWithValue
                    name='meatConsumption'
                    label='Ilość spożywanego mięsa'
                    step={1}
                    min={1}
                    max={100}
                    unit='g'
                />

                <SliderWithValue
                    name='dairyConsumption'
                    label='Ilość spożywanego nabiału'
                    step={1}
                    min={1}
                    max={100}
                    unit='g'
                />

                <SliderWithValue
                    name='veggieAndFruitConsumption'
                    label='Ilość spożywanych warzyw i owoców'
                    step={1}
                    min={1}
                    max={100}
                    unit='g'
                />

                <SliderWithValue
                    name='wheatConsumption'
                    label='Ilość spożywanych produktów zbożowych'
                    step={1}
                    min={1}
                    max={100}
                    unit='g'
                />

                <SliderWithValue
                    name='processedFoodConsumption'
                    label='Ilość spożywanej przetwożonej żywności'
                    step={1}
                    min={1}
                    max={100}
                    unit='g'
                />


                <TransportCalculated/>

                <Image src='/trees.png' alt='drzewa' width={480} height={300} className='w-full h-auto'/>

                <DialogClose asChild>
                    <Chips onClick={onConfirm} label='Zapisz' className='bg-green w-32 mx-auto'/>
                </DialogClose>
            </div>
        </FormProvider>
    );
};

export default FoodForm;
