import { Crop, Product, Video, Scheme, WeatherData } from '@/types';

export const mockWeather: WeatherData = {
  temperature: 28,
  condition: 'Partly Cloudy',
  conditionHindi: 'आंशिक बादल',
  humidity: 65,
  rainfall: 2.3
};

export const mockCrops: Crop[] = [
  {
    id: '1',
    name: 'Wheat',
    nameHindi: 'गेहूं',
    estimatedYield: 25,
    marketPrice: 2100,
    totalProfit: 52500,
    image: 'https://images.pexels.com/photos/326022/pexels-photo-326022.jpeg'
  },
  {
    id: '2',
    name: 'Rice',
    nameHindi: 'चावल',
    estimatedYield: 30,
    marketPrice: 1800,
    totalProfit: 54000,
    image: 'https://images.pexels.com/photos/33239/rice-field-agriculture-vietnam-landscape.jpg'
  },
  {
    id: '3',
    name: 'Sugarcane',
    nameHindi: 'गन्ना',
    estimatedYield: 400,
    marketPrice: 280,
    totalProfit: 112000,
    image: 'https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wheat Seeds',
    nameHindi: 'गेहूं के बीज',
    price: 25,
    image: 'https://images.pexels.com/photos/416607/pexels-photo-416607.jpeg',
    category: 'seeds'
  },
  {
    id: '2',
    name: 'Organic Fertilizer',
    nameHindi: 'जैविक उर्वरक',
    price: 350,
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    category: 'fertilizers'
  },
  {
    id: '3',
    name: 'Neem Pesticide',
    nameHindi: 'नीम कीटनाशक',
    price: 180,
    image: 'https://images.pexels.com/photos/4750309/pexels-photo-4750309.jpeg',
    category: 'pesticides'
  },
  {
    id: '4',
    name: 'Hand Tractor',
    nameHindi: 'हैंड ट्रैक्टर',
    price: 15000,
    image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
    category: 'tools'
  }
];

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'How to Grow Dragon Fruit',
    titleHindi: 'ड्रैगन फ्रूट कैसे उगाएं',
    duration: '12:30',
    thumbnail: 'https://images.pexels.com/photos/4750309/pexels-photo-4750309.jpeg',
    coinsReward: 50,
    watched: false
  },
  {
    id: '2',
    title: 'Organic Farming Techniques',
    titleHindi: 'जैविक खेती की तकनीकें',
    duration: '18:45',
    thumbnail: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    coinsReward: 75,
    watched: true
  },
  {
    id: '3',
    title: 'Solar Panel Installation Guide',
    titleHindi: 'सोलर पैनल स्थापना गाइड',
    duration: '25:15',
    thumbnail: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
    coinsReward: 100,
    watched: false
  }
];

export const mockSchemes: Scheme[] = [
  {
    id: '1',
    name: 'PM-KUSUM Scheme',
    nameHindi: 'पीएम-कुसुम योजना',
    description: 'Solar pump subsidy scheme for farmers',
    descriptionHindi: 'किसानों के लिए सोलर पंप सब्सिडी योजना',
    eligibility: 'All farmers with irrigation needs',
    eligibilityHindi: 'सिंचाई की आवश्यकता वाले सभी किसान'
  },
  {
    id: '2',
    name: 'PM-Kisan Scheme',
    nameHindi: 'पीएम-किसान योजना',
    description: 'Direct income support to farmers',
    descriptionHindi: 'किसानों को प्रत्यक्ष आय सहायता',
    eligibility: 'Small and marginal farmers',
    eligibilityHindi: 'छोटे और सीमांत किसान'
  }
];