import { cn } from '@/lib/utils';
import Image from 'next/image';
import Statistic, { StatisticProps } from './statistic';

interface SectionProps {
  label: string;
  value: string;
  description: string;
  imageSrc: string;
  statistics: StatisticProps[];
  color: 'blue' | 'green';
  withCO2?: boolean;
}

function Section({
  label,
  value,
  description,
  imageSrc,
  statistics,
  color,
  withCO2 = true,
}: SectionProps) {
  return (
    <section
      className={cn('relative rounded-xl px-4 pb-2 pt-4', {
        'bg-blue-100': color === 'blue',
        'bg-green-100': color === 'green',
      })}
    >
      <Image
        src={imageSrc}
        alt='costam'
        width={180}
        height={80}
        className='absolute right-0 top-0 -translate-y-10 translate-x-8'
      />
      <h3
        className={cn('text-2xl font-bold', {
          'text-green': color === 'green',
          'text-blue': color === 'blue',
        })}
      >
        {label}
      </h3>
      <div className='relative z-10 mt-3 flex gap-2 rounded-xl bg-white p-2'>
        <div className='w-[60%]'>
          <p
            className={cn('mb-1 text-3xl font-[900]', {
              'text-red': color === 'blue',
              'text-green': color === 'green',
            })}
          >
            {value}{' '}
            {withCO2 && (
              <span className='text-lg font-normal'>
                CO<sub>2</sub>
              </span>
            )}
          </p>
          <p className='text-xs text-gray'>{description}</p>
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
