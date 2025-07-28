import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cloud, Droplets, Thermometer } from 'lucide-react-native';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { WeatherData } from '@/types';
import { SpeakerButton } from '@/components/common/SpeakerButton';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  const { language } = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{translate('weather', language)}</Text>
        <SpeakerButton text={`${translate('weather', language)}: ${weather.temperature}°C, ${language === 'hindi' ? weather.conditionHindi : weather.condition}`} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.mainTemp}>
          <Thermometer size={32} color="#EAB308" />
          <Text style={styles.temperature}>{weather.temperature}°C</Text>
        </View>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Cloud size={20} color="#6B7280" />
            <Text style={styles.detailText}>
              {language === 'hindi' ? weather.conditionHindi : weather.condition}
            </Text>
          </View>
          
          <View style={styles.detailItem}>
            <Droplets size={20} color="#3B82F6" />
            <Text style={styles.detailText}>{weather.rainfall}mm</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTemp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EAB308',
    marginLeft: 8,
  },
  details: {
    alignItems: 'flex-end',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 6,
  },
});