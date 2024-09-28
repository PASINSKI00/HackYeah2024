import React from 'react';
import { CategoriesGrid } from './categories-grid';

export const CalculatorPage = () => {
  return (
    <div className='bg-blue-100 px-6 pb-8'>
      <h1>
        Oblicz emisję CO<sub>2</sub>
      </h1>
      <CategoriesGrid />
    </div>
  );
};

export default CalculatorPage;
