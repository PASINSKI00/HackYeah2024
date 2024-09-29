import Image from 'next/image';
import Link from 'next/link';

// CO2UNTER logo at the top left of the page
export default function Logo() {
  return (
    <div className='ml-10 mt-10 flex items-center'>
      <Link href='/'>
        <Image
          src='/logo.png'
          width={300}
          height={60}
          alt='logo'
          className='h-auto w-32'
        />
      </Link>
    </div>
  );
}
