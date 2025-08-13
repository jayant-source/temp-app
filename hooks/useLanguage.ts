import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

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
    const previousLanguage = language;
    setLanguage(newLanguage);
    try {
      await AsyncStorage.setItem('language', newLanguage);
      
      // Reload the current route if language actually changed
      if (previousLanguage !== newLanguage) {
        // Small delay to ensure state is updated
        setTimeout(() => {
          router.replace(router.pathname || '/');
        }, 100);
      }
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  return { language, setLanguage: setSelectedLanguage };
}