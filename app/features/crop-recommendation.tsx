import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { ArrowLeft, Sprout } from 'lucide-react-native';
import { router } from 'expo-router';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageDropdown } from '@/components/common/LanguageDropdown';
import { VoiceButton } from '@/components/common/VoiceButton';
import { SpeakerButton } from '@/components/common/SpeakerButton';
import { mockCrops } from '@/data/mockData';
import { Crop } from '@/types';

const soilTypes = ['Clay', 'Sandy', 'Loamy', 'Black'];
const farmSizes = ['1-2', '3-5', '6-10', '10+'];
const irrigationSources = ['Rain-fed', 'Tube well', 'Canal', 'Drip'];

export default function CropRecommendationScreen() {
  const { language } = useLanguage();
  const [selectedSoil, setSelectedSoil] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedIrrigation, setSelectedIrrigation] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleGetRecommendations = () => {
    if (selectedSoil && selectedSize && selectedIrrigation) {
      setShowRecommendations(true);
    }
  };

  const renderCrop = (crop: Crop) => (
    <View key={crop.id} style={styles.cropCard}>
      <Image source={{ uri: crop.image }} style={styles.cropImage} />
      <View style={styles.cropInfo}>
        <View style={styles.cropHeader}>
          <Text style={styles.cropName}>
            {language === 'hindi' ? crop.nameHindi : crop.name}
          </Text>
          <SpeakerButton 
            text={`${language === 'hindi' ? crop.nameHindi : crop.name}. ${translate('estimatedYield', language)}: ${crop.estimatedYield} quintals. ${translate('marketPrice', language)}: ${crop.marketPrice} rupees. ${translate('totalProfit', language)}: ${crop.totalProfit} rupees.`}
          />
        </View>
        
        <View style={styles.cropStats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>{translate('estimatedYield', language)}</Text>
            <Text style={styles.statValue}>{crop.estimatedYield} quintals</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>{translate('marketPrice', language)}</Text>
            <Text style={styles.statValue}>₹{crop.marketPrice}</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>{translate('totalProfit', language)}</Text>
            <Text style={styles.statValue}>₹{crop.totalProfit}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.title}>{translate('cropRecommendation', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageDropdown />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {!showRecommendations ? (
          <View style={styles.formCard}>
            <View style={styles.formHeader}>
              <Sprout size={32} color="#22C55E" />
              <Text style={styles.formTitle}>{translate('tellUsAboutYourFarm', language)}</Text>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>{translate('soilType', language)}</Text>
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

            <View style={styles.formGroup}>
              <Text style={styles.label}>{translate('farmSize', language)} (acres)</Text>
              <View style={styles.optionsGrid}>
                {farmSizes.map((size) => (
                  <TouchableOpacity
                    key={size}
                    style={[
                      styles.optionButton,
                      selectedSize === size && styles.selectedOption
                    ]}
                    onPress={() => setSelectedSize(size)}
                  >
                    <Text style={[
                      styles.optionText,
                      selectedSize === size && styles.selectedOptionText
                    ]}>
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>{translate('irrigationSource', language)}</Text>
              <View style={styles.optionsGrid}>
                {irrigationSources.map((irrigation) => (
                  <TouchableOpacity
                    key={irrigation}
                    style={[
                      styles.optionButton,
                      selectedIrrigation === irrigation && styles.selectedOption
                    ]}
                    onPress={() => setSelectedIrrigation(irrigation)}
                  >
                    <Text style={[
                      styles.optionText,
                      selectedIrrigation === irrigation && styles.selectedOptionText
                    ]}>
                      {irrigation}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.recommendButton,
                (!selectedSoil || !selectedSize || !selectedIrrigation) && styles.disabledButton
              ]}
              onPress={handleGetRecommendations}
              disabled={!selectedSoil || !selectedSize || !selectedIrrigation}
            >
              <Text style={styles.recommendButtonText}>
                {translate('getRecommendations', language)}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.recommendationsCard}>
            <Text style={styles.recommendationsTitle}>
              {translate('recommendedCrops', language)}
            </Text>
            <Text style={styles.recommendationsSubtitle}>
              {translate('basedOn', language, {
                soil: selectedSoil,
                size: selectedSize,
                irrigation: selectedIrrigation
              })}
            </Text>
            
            {mockCrops.map(renderCrop)}
            
            <TouchableOpacity
              style={styles.newRecommendationButton}
              onPress={() => setShowRecommendations(false)}
            >
              <Text style={styles.newRecommendationButtonText}>
                {translate('getNewRecommendations', language)}
              </Text>
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
  backButton: {
    marginRight: 16,
  },
  title: {
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
  formCard: {
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 12,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#F9FAFB',
    minWidth: 80,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
  },
  optionText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: 'white',
  },
  recommendButton: {
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: '#D1D5DB',
  },
  recommendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  recommendationsCard: {
    backgroundColor: 'white',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  recommendationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  recommendationsSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  cropCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cropImage: {
    width: '100%',
    height: 150,
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
    fontSize: 18,
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
    color: '#22C55E',
  },
  newRecommendationButton: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  newRecommendationButtonText: {
    color: '#22C55E',
    fontSize: 16,
    fontWeight: '600',
  },
});