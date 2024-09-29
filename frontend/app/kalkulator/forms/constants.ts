export interface TransportFormData {
  meanOfTransport: 'car' | 'bus' | 'train';
  distance: number;
  people: number;
  fuel: 'petrol' | 'diesel' | 'electric';
  averageConsumption: number;
}

export interface FoodFormData {
  diet: 'meat' | 'vegetarian' | 'vegan';
  local: 'yes' | 'no';
  frequency: 'everyday' | 'often' | 'rarely';
  meatConsumption: number;
  dairyConsumption: number;
  veggieAndFruitConsumption: number;
  wheatConsumption: number;
  processedFoodConsumption: number;
}

export interface PowerFormData {
  powerConsumption: number;
  inhabitantCount: number;
  powerSource: 'net' | 'solar' | 'wind';
  houseType: 'apartment' | 'house';
}

export interface ShoppingFormData {
  shoppingType: 'clothes' | 'electronics' | 'groceries';
  shoppingFrequency: 'everyday' | 'weekly' | 'monthly';
  costs: number;
  local: 'yes' | 'no';
}

export const transportFormInitials: TransportFormData = {
  meanOfTransport: 'car',
  distance: 20,
  people: 1,
  fuel: 'petrol',
  averageConsumption: 7,
};

export const foodFormInitials: FoodFormData = {
  diet: 'meat',
  local: 'yes',
  frequency: 'everyday',
  meatConsumption: 20,
  dairyConsumption: 20,
  veggieAndFruitConsumption: 20,
  wheatConsumption: 20,
  processedFoodConsumption: 20,
};

export const powerFormInitials: PowerFormData = {
  powerConsumption: 10,
  inhabitantCount: 1,
  powerSource: 'net',
  houseType: 'apartment',
};

export const shoppingFormInitials: ShoppingFormData = {
  shoppingType: 'clothes',
  shoppingFrequency: 'everyday',
  costs: 500,
  local: 'yes',
};



export interface HeatingFormData {
  heatingType: string;
  powerConsumption: number;
  areaOfHeating: number;
  isolation: string;
  frequency: string;
}

export const heatingFormInitials: HeatingFormData = {
  heatingType: 'gas',
  powerConsumption: 0,
  areaOfHeating: 0,
  isolation: 'veryGood',
  frequency: 'yes',
};


export interface InternetFormData {
  deviceType: string;
  time: number;
  activityType: string;
  energyConsumption: number;
}
export const internetFormInitials: InternetFormData = {
  deviceType: 'pc',
  time: 2,
  activityType: 'work',
  energyConsumption: 0.5,
};