import { cn } from '@/lib/utils';
import Image from 'next/image';
import Statistic, { StatisticProps } from './statistic';

interface SectionProps {
  label: string;
  value: string;
  description: string;
  imageSrc: string;
  statistics: StatisticProps[];
}

function Section({
  label,
  value,
  description,
  imageSrc,
  statistics,
}: SectionProps) {
  return (
    <section className={cn('bg-blue-100 relative rounded-xl px-4 pb-2 pt-4')}>
      <Image
        src={imageSrc}
        alt='costam'
        width={180}
        height={80}
        className='absolute right-0 top-0 -translate-y-10 translate-x-8'
      />
      <h3 className='text-2xl font-bold text-blue'>{label}</h3>
      <div className='relative z-10 mt-3 flex gap-2 rounded-xl bg-white p-2'>
        <div className='w-[60%]'>
          <p className='text-red mb-1 text-3xl font-[900]'>{value}</p>
          <p className='text-gray text-xs'>{description}</p>
        </div>
        <div className='flex w-[40%] flex-col gap-2'>
          {statistics.map((statistic) => (
            <Statistic key={statistic.label} {...statistic} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;
