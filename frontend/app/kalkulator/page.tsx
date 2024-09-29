import React from 'react';
import { CategoriesGrid } from './categories-grid';
import Image from 'next/image';

const CalculatorPage = () => {
  return (
    <main className='mb-16'>
        <CategoriesGrid />

      <h2 className='text-blue-700 text-center text-2xl font-bold block mt-8 py-4'>
        Brak dzisiejszych danych
      </h2>

      <Image
        src='/calculator-blank.png'
        alt='costam'
        width={480}
        height={300}
        className='h-auto w-screen'
      />
    </main>
  );
};

export default CalculatorPage;
