import Section from '@/components/ui/section';
import { HackYeahStatistics, KosciuszkonStatistics } from './constants';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';

export default function Page() {
  return (
    <main className='mb-24 mt-4 grid gap-12 px-6'>
      <Section
        color='darkBlue'
        label='HackYeah'
        value='4409 kg'
        description='HackYeah to największy stacjonarny hackathon w Europie skupiający się na tworzeniu innowacyjnych rozwiązań istotnych problemów dzisiejszego świata.'
        statistics={HackYeahStatistics}
        location={{
          label: 'Lokalizacja',
          value: 'Stanisława Lema 7',
          Icon: BikeScooterIcon,
        }}
        date={{
          value: '28.10.2024',
          Icon: BikeScooterIcon,
        }}
        moreInfo='Dodatkowe informacje'
      />

      <Section
        color='blue'
        label='Kosciuszkon'
        value='2197 kg'
        description='Sektor usługowy generuje miesięcznie 2000g co2. Statystyki uzwględniają gastronomię, hotelarstwo oraz handel.'
        statistics={KosciuszkonStatistics}
        location={{
          label: 'Lokalizacja',
          value: 'Stanisława Lema 7',
          Icon: BikeScooterIcon,
        }}
        date={{
          value: '28.10.2024',
          Icon: BikeScooterIcon,
        }}
        moreInfo='Dodatkowe informacje'
      />
    </main>
  );
}
