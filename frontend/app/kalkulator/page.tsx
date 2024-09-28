import React from 'react';
import { CategoriesGrid } from './categories-grid';
import Image from 'next/image';

export const CalculatorPage = () => {
  return (
    <>
      <div className='bg-blue-100 px-6 pb-8 mt-4'>
        <CategoriesGrid />
      </div>

      <h2 className='text-blue-700 text-center text-2xl font-bold block py-4'>
        Brak dzisiejszych danych
      </h2>
      <Image
        src='/calculator-blank.png'
        alt='costam'
        width={480}
        height={300}
        className='h-auto w-screen'
      />
    </>
  );
};

export default CalculatorPage;
