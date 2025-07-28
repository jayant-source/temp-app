import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Language = 'hindi' | 'english';

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

  const toggleLanguage = async () => {
    const newLanguage = language === 'hindi' ? 'english' : 'hindi';
    setLanguage(newLanguage);
    try {
      await AsyncStorage.setItem('language', newLanguage);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  return { language, toggleLanguage };
}