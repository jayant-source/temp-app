import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react-native';
import { router } from 'expo-router';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';

const mockPrices = [
  { crop: 'Wheat', cropHindi: 'गेहूं', price: 2100, change: 5.2, trend: 'up' },
  { crop: 'Rice', cropHindi: 'चावल', price: 1800, change: -2.1, trend: 'down' },
  { crop: 'Sugarcane', cropHindi: 'गन्ना', price: 280, change: 1.8, trend: 'up' },
  { crop: 'Cotton', cropHindi: 'कपास', price: 5200, change: -3.5, trend: 'down' },
  { crop: 'Soybean', cropHindi: 'सोयाबीन', price: 4100, change: 7.2, trend: 'up' },
];

export default function MarketPricesScreen() {
  const { language } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.title}>{translate('marketPrices', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.pricesCard}>
          <Text style={styles.cardTitle}>Today's Market Prices</Text>
          <Text style={styles.cardSubtitle}>Per Quintal (₹)</Text>
          
          {mockPrices.map((item, index) => (
            <View key={index} style={styles.priceItem}>
              <View style={styles.cropInfo}>
                <Text style={styles.cropName}>
                  {language === 'hindi' ? item.cropHindi : item.crop}
                </Text>
              </View>
              
              <View style={styles.priceInfo}>
                <Text style={styles.price}>₹{item.price}</Text>
                <View style={[styles.changeContainer, { backgroundColor: item.trend === 'up' ? '#DCFCE7' : '#FEE2E2' }]}>
                  {item.trend === 'up' ? (
                    <TrendingUp size={16} color="#22C55E" />
                  ) : (
                    <TrendingDown size={16} color="#EF4444" />
                  )}
                  <Text style={[styles.changeText, { color: item.trend === 'up' ? '#22C55E' : '#EF4444' }]}>
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Market Information</Text>
          <Text style={styles.infoText}>
            Prices are updated daily based on major wholesale markets across India. 
            Actual prices may vary by location and quality.
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
  pricesCard: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  priceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  priceInfo: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  changeText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  infoCard: {
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
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});