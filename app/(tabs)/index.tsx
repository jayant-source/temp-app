import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Sprout, Sun, TrendingUp, Bug } from 'lucide-react-native';
import { router } from 'expo-router';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';
import { WeatherCard } from '@/components/home/WeatherCard';
import { FeatureButton } from '@/components/home/FeatureButton';
import { mockWeather } from '@/data/mockData';

export default function HomeScreen() {
  const { language } = useLanguage();
  const userName = 'Suresh Kumar'; // Mock user name

  const handleVoiceCommand = () => {
    console.log('Voice command activated');
  };

  const navigateToFeature = (feature: string) => {
    router.push(`/features/${feature}` as any);
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
        
        <View style={styles.featuresGrid}>
          <View style={styles.row}>
            <FeatureButton
              title={translate('cropRecommendation', language)}
              icon={Sprout}
              color="#22C55E"
              onPress={() => navigateToFeature('crop-recommendation')}
            />
            <FeatureButton
              title={translate('solarPlanner', language)}
              icon={Sun}
              color="#EAB308"
              onPress={() => navigateToFeature('solar-planner')}
            />
          </View>
          
          <View style={styles.row}>
            <FeatureButton
              title={translate('marketPrices', language)}
              icon={TrendingUp}
              color="#3B82F6"
              onPress={() => navigateToFeature('market-prices')}
            />
            <FeatureButton
              title={translate('pestAlert', language)}
              icon={Bug}
              color="#EF4444"
              onPress={() => navigateToFeature('pest-alert')}
            />
          </View>
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
  featuresGrid: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
  },
});