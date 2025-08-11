import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import { Sprout, TrendingUp, Sun, Bug } from 'lucide-react-native';
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

  const handleFeaturePress = (feature: string) => {
    Alert.alert('Feature', `${feature} feature will be available soon!`);
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
          <FeatureButton
            title={translate('cropRecommendation', language)}
            icon={Sprout}
            onPress={() => handleFeaturePress('Crop Recommendation')}
            color="#22C55E"
          />
          <FeatureButton
            title={translate('marketPrices', language)}
            icon={TrendingUp}
            onPress={() => handleFeaturePress('Market Prices')}
            color="#3B82F6"
          />
          <FeatureButton
            title={translate('solarPlanner', language)}
            icon={Sun}
            onPress={() => handleFeaturePress('Solar Planner')}
            color="#EAB308"
          />
          <FeatureButton
            title={translate('pestAlert', language)}
            icon={Bug}
            onPress={() => handleFeaturePress('Pest Alert')}
            color="#EF4444"
          />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
});