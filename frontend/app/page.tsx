import Chips from '@/components/ui/chips';
import Section from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='mb-32'>
      <section className='flex items-center justify-around'>
        <h1 className='text-3xl font-[900]'>Witaj, Jan!</h1>
        <Image
          src='/tree.png'
          alt='drzewo'
          width={300}
          height={300}
          className='h-auto w-32'
        />
      </section>

      <section className='bg-green-100 px-8 py-10'>
        <div className='flex gap-4'>
          <h2 className='text-xl font-bold text-blue-700'>Dzienna emisja</h2>
          <Chips label='1000g' />
        </div>

        <div className='mt-4 flex w-full flex-col items-center gap-4'>
          <div className='h-48 w-48 rounded-full bg-green' />
          <div>
            <span className='text-gray'>300g</span>
          </div>
        </div>
      </section>

      <div className='relative px-6 mt-16'>
        <Section
          label='Zieleń miejska'
          description='350 CO2 zostanie pochłonięte po 20 dniach przez małe sadzonki lub 2 dni przez 100-letnie drzewo.'
          value='350g'
          imageSrc='/trees.png'
          color='green'
          statistics={[]}
        />

        <div className='-mt-4 z-10 w-full relative'>
          <Link className='inline-block mx-auto' href='/kalkulator'>
            <Chips
              label='Oblicz swoje emisje'
              className='mx-auto text-lg bg-green'
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
