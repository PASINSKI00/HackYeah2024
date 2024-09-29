import Section from '@/components/ui/section';
import { servicesStatistics, transportStatistics } from './constants';


export default function Page() {
  return (
    <main className='px-6 grid gap-12 mt-4 mb-24'>
      <Section
        color='blue'
        label='Transport'
        value='1150024t'
        description='Transport generuje miesięcznie 1150024t CO2. Statystyki uzwględniają
            samochody oraz komunikację miejską.'
        imageSrc='/electric-car.png'
        statistics={transportStatistics}
      />

      <Section
        color='blue'
        label='Sektor usługowy'
        value="383341t"
        description='Sektor usługowy generuje miesięcznie 383341t CO2. Statystyki uzwględniają gastronomię, hotelarstwo oraz handel.'
        imageSrc='/dinner.png'
        statistics={servicesStatistics}
       />
    </main>
  );
}
