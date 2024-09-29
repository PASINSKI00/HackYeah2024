import { StatisticProps } from '@/components/ui/statistic';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';

export const HackYeahStatistics: StatisticProps[] = [
  {
    label: 'Prąd',
    value: 37.5,
    unit: '%',
    Icon: ElectricBoltOutlinedIcon,
  },
  {
    label: 'Transport',
    value: 28.4,
    unit: '%',
    Icon: BikeScooterIcon,
  },
  {
    label: 'Katering',
    value: 34,
    unit: '%',
    Icon: FastfoodOutlinedIcon,
  },
];

export const KosciuszkonStatistics: StatisticProps[] = [
  {
    label: 'Prąd',
    value: 22.6,
    unit: '%',
    Icon: ElectricBoltOutlinedIcon,
  },
  {
    label: 'Transport',
    value: 56.9,
    unit: '%',
    Icon: BikeScooterIcon,
  },
  {
    label: 'Katering',
    value: 20.5,
    unit: '%',
    Icon: FastfoodOutlinedIcon,
  },
];