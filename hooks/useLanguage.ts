import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Language = 'hindi' | 'english' | 'bengali' | 'marathi' | 'punjabi';

export const languages = [
  { code: 'hindi', name: 'हिंदी', nativeName: 'हिंदी' },
  { code: 'english', name: 'English', nativeName: 'English' },
  { code: 'bengali', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'marathi', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'punjabi', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
] as const;

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('hindi');

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage as Language);
      }
    } catch (error) {
      console.error('Error loading language:', error);
    }
  };

  const setSelectedLanguage = async (newLanguage: Language) => {
    setLanguage(newLanguage);
    try {
      await AsyncStorage.setItem('language', newLanguage);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  return { language, setLanguage: setSelectedLanguage };
}