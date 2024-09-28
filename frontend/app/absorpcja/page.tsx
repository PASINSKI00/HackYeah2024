'use client';

import Section from '@/components/ui/section';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(350);

  useEffect(() => {
    if (localStorage) {
      setData(Number(localStorage.getItem('totalValue') ?? 350));
    }
  }, []);


  return (
    <main className='mb-12 mt-4 grid gap-12 px-6'>
      <Section
        color='green'
        label='Zieleń miejska'
        value={`${data}g`}
        description={`${data} CO2 zostanie pochłonięte po 20 dniach przez małe sadzonki lub 2 dni przez 100-letnie drzewo.`}
        imageSrc='/outdoor.png'
        statistics={[]}
      />

      <Section
        color='green'
        label='100 letnie drzewo'
        value='2 dni'
        description=''
        imageSrc='/outdoor.png'
        withCO2={false}
        statistics={[
          {
            label: 'Dziennie',
            value: 175,
            unit: ' co2',
            Icon: CalendarTodayIcon,
          },
        ]}
      />
    </main>
  );
}
