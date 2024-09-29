import { IconComponent } from '@/types';

export interface StatisticProps {
  label: string;
  value: number;
  unit: string;
  Icon: IconComponent;
}

function Statistic({ label, value, unit, Icon }: StatisticProps) {
  return (
    <div className='px-2 bg-blue-100 rounded-xl flex items-center gap-1 flex-shrink-0 flex-grow-0'>
      <div>
        <Icon className='rounded-full text-sm text-white p-1 w-6 h-6 bg-black' />
      </div>
      <div className='flex-1 flex flex-col items-center justify-around'>
        <span className='text-[0.5rem] font-bold'>{label}</span>
        <span className='font-[900] text-2xl text-nowrap'>
          {value}{unit === 'co2' ? <span className='text-[80%]'> CO<sub>2</sub></span> : unit}
        </span>
      </div>
    </div>
  );
}

export default Statistic;
