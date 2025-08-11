import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';
import { WeatherCard } from '@/components/home/WeatherCard';
import { mockWeather } from '@/data/mockData';

export default function HomeScreen() {
  const { language } = useLanguage();
  const userName = 'Suresh Kumar'; // Mock user name

  const handleVoiceCommand = () => {
    console.log('Voice command activated');
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          {translate('welcomeUser', language, { name: userName })}
        </Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={handleVoiceCommand} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <WeatherCard weather={mockWeather} />
        
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            {translate('moreFeaturesComing', language)}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 50,
  },
  placeholderText: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
  },
});