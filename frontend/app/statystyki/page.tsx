import Section from '@/components/ui/section';
import { servicesStatistics, transportStatistics } from './constants';


export default function Page() {
  return (
    <main className='px-6 grid gap-12 mt-4 mb-24'>
      <Section
        label='Transport'
        value='3000g co2'
        description='Transport generuje miesięcznie 3000g co2. Statystyki uzwględniają
            samochody oraz komunikację miejską.'
        imageSrc='/electric-car.png'
        statistics={transportStatistics}
      />

      <Section
        label='Sektor usługowy'
        value="2000g co2"
        description='Sektor usługowy generuje miesięcznie 2000g co2. Statystyki uzwględniają gastronomię, hotelarstwo oraz handel.'
        imageSrc='/dinner.png'
        statistics={servicesStatistics}
       />
    </main>
  );
}
