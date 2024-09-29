import Section from '@/components/ui/section';
import { HackYeahStatistics, KosciuszkonStatistics } from './constants';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function Page() {
  return (
    <main className='mb-24 mt-4 grid gap-12 px-6'>
      <Section
        centerLabel
        color='darkBlue'
        label='HackYeah'
        value='4409 kg'
        description='HackYeah to największy stacjonarny hackathon w Europie skupiający się na tworzeniu innowacyjnych rozwiązań istotnych problemów dzisiejszego świata.'
        statistics={HackYeahStatistics}
        location={{
          label: 'Lokalizacja',
          value: 'Stanisława Lema 7',
          Icon: LocationOnOutlinedIcon,
        }}
        date={{
          value: '28.10.2024',
          Icon: CalendarTodayOutlinedIcon,
        }}
        moreInfo='Dodatkowe informacje'
      />

      <Section
      centerLabel
        color='blue'
        label='Kosciuszkon'
        value='2197 kg'
        description='Sektor usługowy generuje miesięcznie 2000g co2. Statystyki uzwględniają gastronomię, hotelarstwo oraz handel.'
        statistics={KosciuszkonStatistics}
        location={{
          label: 'Lokalizacja',
          value: 'Stanisława Lema 7',
          Icon: LocationOnOutlinedIcon,
        }}
        date={{
          value: '28.10.2024',
          Icon: CalendarTodayOutlinedIcon,
        }}
        moreInfo='Dodatkowe informacje'
      />
    </main>
  );
}
