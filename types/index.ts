export interface User {
  id: string;
  name: string;
  phone: string;
  state: string;
  district: string;
  language: 'hindi' | 'english';
}

export interface Crop {
  id: string;
  name: string;
  nameHindi: string;
  estimatedYield: number;
  marketPrice: number;
  totalProfit: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  nameHindi: string;
  price: number;
  image: string;
  category: 'seeds' | 'fertilizers' | 'pesticides' | 'tools';
}

export interface Video {
  id: string;
  title: string;
  titleHindi: string;
  duration: string;
  thumbnail: string;
  coinsReward: number;
  watched: boolean;
}

export interface Scheme {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  descriptionHindi: string;
  eligibility: string;
  eligibilityHindi: string;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  conditionHindi: string;
  humidity: number;
  rainfall: number;
}