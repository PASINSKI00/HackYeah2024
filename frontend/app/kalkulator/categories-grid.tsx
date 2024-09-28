import React from 'react';
import Category from './category';

export const CategoriesGrid = () => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <Category name='Transport' />
      <Category name='Jedzenie' />
      <Category name='Zakupy' />
      <Category name='Prąd' />
      <Category name='Ogrzewanie' />
      <Category name='Internet' />
    </div>
  )
}
