import Image from 'next/image';

export default function Page() {
  return (
    <Image
      src='/page-not-found.png'
      alt='costam'
      width={480}
      height={300}
      className='h-auto w-screen mt-[10rem]'
    />
  );
}
