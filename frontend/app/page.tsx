import CircularChart from '@/components/circular-chart';
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
        <div className='flex items-center gap-4'>
          <h2 className='text-2xl font-bold text-blue-700'>Dzienna emisja</h2>
          <Chips label='1000g' className='text-lg' />
        </div>

        <CircularChart />
      </section>

      <div className='relative mt-16 px-6'>
        <Section
          imageOnTop
          label='Zieleń miejska'
          description='350 CO2 zostanie pochłonięte po 20 dniach przez małe sadzonki lub 2 dni przez 100-letnie drzewo.'
          value='350g'
          imageSrc='/outdoor.png'
          color='green'
          statistics={[]}
          className='pb-3'
        />

        <div className='relative z-10 -mt-4 flex w-full'>
          <Link className='mx-auto inline-block' href='/kalkulator'>
            <Chips
              label='Oblicz swoje emisje'
              className='mx-auto bg-green text-lg'
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
