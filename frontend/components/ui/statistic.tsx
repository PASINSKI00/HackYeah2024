import { IconComponent } from '@/types';

export interface StatisticProps {
  label?: string;
  value: number | string;
  unit?: string;
  Icon: IconComponent;
  smallText?: boolean;
}

function Statistic({ label, value, unit, Icon, smallText }: StatisticProps) {
  return (
    <div className='flex flex-shrink-0 flex-grow-0 items-center gap-1 rounded-xl bg-blue-100 px-2'>
      <div>
        <Icon className='h-6 w-6 rounded-full bg-black p-1 text-sm text-white' />
      </div>
      <div className='flex flex-1 flex-col items-center justify-around'>
        {label && <span className='text-[0.5rem] font-bold'>{label}</span>}
        <span
          className={`text-nowrap font-[900] ${!smallText ? 'text-2xl' : ''}`}
        >
          {value}
          {unit === 'co2' ? (
            <span className='text-[80%]'>
              {' '}
              CO<sub>2</sub>
            </span>
          ) : (
            unit
          )}
        </span>
      </div>
    </div>
  );
}

export default Statistic;
