// page header component that is on top of the page, shows the current page and on the left has arrow that navigates to previous page
'use client';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// jeśli pathname to kalkulator, tytuł to Oblicz emisję CO2, jeśli statystyki to Statystyki Krakowa

const pageConfig = {
  '/': 'CO2UNTER',
  '/kalkulator': 'Oblicz emisję CO2',
  '/statystyki': 'Statystyki Krakowa',
  '/wydarzenia': 'Wydarzenia',
  '/absorpcja': 'Pochłanianie CO2',
  '/uzytkownik': 'Profil użytkownika',
};

export default function PageHeader() {
  const pathname: keyof typeof pageConfig =
    usePathname() as keyof typeof pageConfig;

  if (pathname === '/') {
    return null;
  }

  return (
    <Link href='/' className='z-10 ml-7 mt-8 flex flex-row items-center'>
      <ArrowBackOutlinedIcon className='mr-3 h-4 w-4' />
      <h1 className='text-xl font-bold'>
        {pageConfig[pathname] ?? 'Unknown Page'}
      </h1>
    </Link>
  );
}
