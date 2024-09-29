'use client';

import Link from 'next/link';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='fixed bottom-0 flex w-full justify-around bg-white shadow-lg z-20'>
      <Link className='p-4' href='/kalkulator'>
        <CalculateOutlinedIcon
          className={clsx('w-[18px]', {
            'text-blue': pathname === '/kalkulator',
          })}
        />
      </Link>
      <Link className='p-4' href='/statystyki'>
        <QueryStatsOutlinedIcon
          className={clsx('w-[18px]', {
            'text-blue': pathname === '/statystyki',
          })}
        />
      </Link>
      <Link className='p-4' href='/wydarzenia'>
        <InsertInvitationOutlinedIcon
          className={clsx('w-[18px]', {
            'text-blue': pathname === '/wydarzenia',
          })}
        />
      </Link>
      <Link className='p-4' href='/absorpcja'>
        <GrassOutlinedIcon
          className={clsx('w-[18px]', {
            'text-blue': pathname === '/absorpcja',
          })}
        />
      </Link>
      <Link className='p-4' href='/uzytkownik'>
        <SupervisedUserCircleOutlinedIcon
          className={clsx('w-[18px]', {
            'text-blue': pathname === '/uzytkownik',
          })}
        />
      </Link>
    </nav>
  );
}
