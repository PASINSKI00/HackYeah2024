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

export const foodFormInitials: TransportFormData = {
  diet: 'meat',
  local: 'yes',
  frequency: 'everyday',
  meatConsumption: 20,
  dairyConsumption: 20,
  dairyConsumption: 20,
  veggieAndFruitConsumption: 20,
  wheatConsumption: 20,
  processedFoodConsumption: 20,
};

export const powerFormInitials: TransportFormData = {
  powerConsumption: 10,
  inhabitantCount: 1,
  powerSource: 'net',
  houseType: 'aparment',
};

export const shoppingFormInitials: TransportFormData = {
  shoppingType: 'clothes',
  shoppingFrequency: 'everyday',
  costs: '500',
  local: 'yes',
};

export const heatingFormInitials: TransportFormData = {
  heatingType: 'gas',
  powerConsumption: 250,
  areaOfHeating: 20,
  isolation: 'veryGood',
  frequency: 'yes',
};

export const internetFormInitials: TransportFormData = {
  deviceType: 'pc',
  time: 2,
  activityType: 'work',
  energyConsumption: 0.5,
};