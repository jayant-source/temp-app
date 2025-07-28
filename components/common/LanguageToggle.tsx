import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <TouchableOpacity style={styles.container} onPress={toggleLanguage}>
      <Text style={styles.text}>
        {language === 'hindi' ? 'English' : 'हिंदी'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 16,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});