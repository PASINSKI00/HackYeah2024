import React from 'react';
import { CategoriesGrid } from './categories-grid';
import Image from 'next/image';
import CircularChart from '@/components/circular-chart';

const CalculatorPage = () => {
  const data = true;

  return (
    <main className='mb-16'>
      <CategoriesGrid />

      {data ? (
        <div className='mx-auto w-full max-w-md p-6'>
          <span className='flex flex-row items-center gap-6 pb-4'>
            <h1 className='flex text-xl font-bold text-[#7093BB]'>
              Dzienna emisja
            </h1>
            <div className='flex items-center gap-5'>
              <span className='flex h-8 w-32 flex-row items-center justify-center rounded-full bg-blue px-2 text-xs text-white'>
                1000g
              </span>
            </div>
          </span>
          <CircularChart />
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
};

export default CalculatorPage;
