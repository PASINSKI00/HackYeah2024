import {FoodFormData, TransportFormData} from './constants';

export function calculateEmission(formData: TransportFormData) {
  const baseEmission = formData.distance * formData.averageConsumption / formData.people;
  let totalEmission;

  switch (formData.meanOfTransport) {
    case 'car':
      totalEmission = baseEmission * 1.0; // Example multiplier for car
      break;
    case 'bus':
      totalEmission = baseEmission * 0.7; // Example multiplier for bus
      break;
    case 'train':
      totalEmission = baseEmission * 0.1; // Example multiplier for train
      break;
    default:
      totalEmission = baseEmission;
  }

  switch (formData.fuel) {
    case 'petrol':
      totalEmission *= 1.0; // Example multiplier for petrol
      break;
    case 'diesel':
      totalEmission *= 1.2; // Example multiplier for diesel
      break;
    case 'electric':
      totalEmission *= 0.1; // Example multiplier for electric
      break;
    default:
      totalEmission = baseEmission;
  }

  return Math.round(totalEmission);
}

export function calculateFoodEmission(formData: FoodFormData) {
  const baseEmission = formData.wheatConsumption * formData.dairyConsumption * formData.meatConsumption;
  console.log(baseEmission);
  
  return Math.round(baseEmission);
}
