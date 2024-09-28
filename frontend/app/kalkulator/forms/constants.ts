export interface TransportFormData {
  meanOfTransport: 'car' | 'bus' | 'train';
  distance: number;
  people: number;
  fuel: 'petrol' | 'diesel' | 'electric';
  averageConsumption: number;
}

export const transportFormInitials: TransportFormData = {
  meanOfTransport: 'car',
  distance: 20,
  people: 1,
  fuel: 'petrol',
  averageConsumption: 7,
};