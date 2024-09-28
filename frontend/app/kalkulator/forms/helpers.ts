import { TransportFormData } from './constants';

export function calculateEmission(formData: TransportFormData) {
  return formData.distance * formData.people * formData.averageConsumption;
}
