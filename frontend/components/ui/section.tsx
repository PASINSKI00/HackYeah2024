import { cn } from '@/lib/utils';
import Image from 'next/image';
import Statistic, { StatisticProps } from './statistic';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
interface SectionProps {
  label: string;
  value: string;
  description: string;
  imageSrc?: string;
  statistics: StatisticProps[];
  color: 'blue' | 'green' | 'darkBlue';
  withCO2?: boolean;
  imageOnTop?: boolean;
  className?: string;
  location?: StatisticProps;
  date?: StatisticProps;
  moreInfo: string;
}

function Section({
  label,
  value,
  description,
  imageSrc,
  statistics,
  color,
  className,
  imageOnTop = false,
  withCO2 = true,
  location,
  date,
  moreInfo,
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative rounded-xl px-4 pb-2 pt-4',
        {
          'bg-blue-100': color === 'blue',
          'bg-green-100': color === 'green',
          'bg-blue': color === 'darkBlue',
        },
        className,
      )}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt='costam'
          width={180}
          height={80}
          className={cn(
            'absolute right-0 top-0 -translate-y-10 translate-x-8',
            {
              'z-[11]': imageOnTop,
            },
          )}
        />
      )}
      <div>
        <h3
          className={cn('w-[60%] text-2xl font-bold', {
            'text-green': color === 'green',
            'text-blue': color === 'blue',
            'text-white': color === 'darkBlue',
          })}
        >
          {label}
        </h3>
        {location && <Statistic key={location.label} {...location} />}
      </div>
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
      {date && (
        <div className='mt-4 flex justify-between gap-1 rounded-xl'>
          {date && <Statistic {...date} smallText />}
          {moreInfo && (
            <div
              className={cn('text-[14px]', {
                'text-white': color === 'darkBlue',
              })}
            >
              Dodatkowe informacje <ArrowRightAltIcon />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Section;
