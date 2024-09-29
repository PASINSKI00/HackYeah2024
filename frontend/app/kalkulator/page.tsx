import React from 'react';
import { CategoriesGrid } from './categories-grid';
import Image from 'next/image';

const CalculatorPage = () => {
  return (
    <main className='mb-16'>
      <CategoriesGrid />

      <h2 className='mt-8 block py-4 text-center text-2xl font-bold text-blue-700'>
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
