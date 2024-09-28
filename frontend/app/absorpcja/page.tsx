import Section from '@/components/ui/section';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Page() {
  return (
    <main className='mb-12 mt-4 grid gap-12 px-6'>
      <Section
        color='green'
        label='Zieleń miejska'
        value='350g co2'
        description='350 CO2 zostanie pochłonięte po 20 dniach przez małe sadzonki lub 2 dni przez 100-letnie drzewo.'
        imageSrc='/outdoor.png'
        statistics={[]}
      />

      <Section
        color='green'
        label='100 letnie drzewo'
        value='2 dni'
        description=''
        imageSrc='/outdoor.png'
        statistics={[
          { label: 'Dziennie', value: 175, unit: 'co2', Icon: CalendarTodayIcon },
        ]}
      />
    </main>
  );
}
