import { StatisticProps } from '@/components/ui/statistic';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const transportStatistics: StatisticProps[] = [
  {
    label: 'Samochody',
    value: 60,
    unit: '%',
    Icon: BikeScooterIcon,
  },
  {
    label: 'Komunikacja miejska',
    value: 40,
    unit: '%',
    Icon: DirectionsBusIcon,
  },
];

export const servicesStatistics: StatisticProps[] = [
  {
    label: 'Gastronomia',
    value: 50,
    unit: '%',
    Icon: FastfoodOutlinedIcon,
  },
  {
    label: 'Hotelarstwo',
    value: 30,
    unit: '%',
    Icon: LocalHotelOutlinedIcon,
  },
  {
    label: 'Handel',
    value: 30,
    unit: '%',
    Icon: ShoppingCartOutlinedIcon,
  },
];