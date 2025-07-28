import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { ArrowLeft, TrendingUp } from 'lucide-react-native';
import { router } from 'expo-router';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';
import { SpeakerButton } from '@/components/common/SpeakerButton';
import { mockCrops } from '@/data/mockData';
import { Crop } from '@/types';

const soilTypes = ['Black', 'Red', 'Alluvial', 'Sandy'];
const irrigationSources = ['Canal', 'Borewell', 'Rain-fed', 'River'];

export default function CropRecommendationScreen() {
  const { language } = useLanguage();
  const [selectedSoil, setSelectedSoil] = useState<string>('');
  const [farmSize, setFarmSize] = useState<string>('');
  const [irrigation, setIrrigation] = useState<string>('');
  const [recommendations, setRecommendations] = useState<Crop[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleGetRecommendations = () => {
    if (selectedSoil && farmSize && irrigation) {
      setRecommendations(mockCrops);
      setShowResults(true);
    }
  };

  const renderCropCard = (crop: Crop) => (
    <View key={crop.id} style={styles.cropCard}>
      <Image source={{ uri: crop.image }} style={styles.cropImage} />
      <View style={styles.cropInfo}>
        <View style={styles.cropHeader}>
          <Text style={styles.cropName}>
            {language === 'hindi' ? crop.nameHindi : crop.name}
          </Text>
          <SpeakerButton 
            text={`${language === 'hindi' ? crop.nameHindi : crop.name}. ${translate('estimatedYield', language)}: ${crop.estimatedYield} quintals per acre`}
          />
        </View>
        
        <View style={styles.cropStats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>{translate('estimatedYield', language)}</Text>
            <Text style={styles.statValue}>{crop.estimatedYield} q/acre</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>{translate('marketPrice', language)}</Text>
            <Text style={styles.statValue}>₹{crop.marketPrice}/q</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>{translate('totalProfit', language)}</Text>
            <Text style={[styles.statValue, styles.profitText]}>₹{crop.totalProfit}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.title}>{translate('cropRecommendation', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {!showResults ? (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Tell us about your farm</Text>
            
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>{translate('soilType', language)}</Text>
              <View style={styles.optionsGrid}>
                {soilTypes.map((soil) => (
                  <TouchableOpacity
                    key={soil}
                    style={[
                      styles.optionButton,
                      selectedSoil === soil && styles.selectedOption
                    ]}
                    onPress={() => setSelectedSoil(soil)}
                  >
                    <Text style={[
                      styles.optionText,
                      selectedSoil === soil && styles.selectedOptionText
                    ]}>
                      {soil}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>{translate('farmSize', language)} (acres)</Text>
              <View style={styles.optionsGrid}>
                {['1-2', '3-5', '6-10', '10+'].map((size) => (
                  <TouchableOpacity
                    key={size}
                    style={[
                      styles.optionButton,
                      farmSize === size && styles.selectedOption
                    ]}
                    onPress={() => setFarmSize(size)}
                  >
                    <Text style={[
                      styles.optionText,
                      farmSize === size && styles.selectedOptionText
                    ]}>
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>{translate('irrigationSource', language)}</Text>
              <View style={styles.optionsGrid}>
                {irrigationSources.map((source) => (
                  <TouchableOpacity
                    key={source}
                    style={[
                      styles.optionButton,
                      irrigation === source && styles.selectedOption
                    ]}
                    onPress={() => setIrrigation(source)}
                  >
                    <Text style={[
                      styles.optionText,
                      irrigation === source && styles.selectedOptionText
                    ]}>
                      {source}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.recommendButton,
                (!selectedSoil || !farmSize || !irrigation) && styles.disabledButton
              ]}
              onPress={handleGetRecommendations}
              disabled={!selectedSoil || !farmSize || !irrigation}
            >
              <TrendingUp size={20} color="white" />
              <Text style={styles.recommendButtonText}>
                {translate('getRecommendations', language)}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsTitle}>
              Recommended crops for your farm
            </Text>
            <Text style={styles.resultsSubtitle}>
              Based on {selectedSoil} soil, {farmSize} acres, {irrigation} irrigation
            </Text>
            
            {recommendations.map(renderCropCard)}
            
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setShowResults(false)}
            >
              <Text style={styles.backButtonText}>Get New Recommendations</Text>
            </TouchableOpacity>
          </View>
        )}
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    marginLeft: 16,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  formContainer: {
    padding: 16,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 32,
  },
  inputSection: {
    marginBottom: 32,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  optionButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    minWidth: '45%',
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: '#22C55E',
    backgroundColor: '#F0FDF4',
  },
  optionText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#22C55E',
    fontWeight: '600',
  },
  recommendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
  },
  recommendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  resultsContainer: {
    padding: 16,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  resultsSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  cropCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cropImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cropInfo: {
    padding: 16,
  },
  cropHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cropName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
  },
  cropStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  profitText: {
    color: '#22C55E',
  },
  backButton: {
    backgroundColor: '#6B7280',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});