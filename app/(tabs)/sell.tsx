import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Camera, Upload, DollarSign } from 'lucide-react-native';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';

export default function SellScreen() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    cropName: '',
    quantity: '',
    expectedPrice: '',
  });

  const handleSubmit = () => {
    if (!formData.cropName || !formData.quantity || !formData.expectedPrice) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', 'Your listing has been posted!');
    setFormData({ cropName: '', quantity: '', expectedPrice: '' });
  };

  const mockBids = [
    { id: '1', buyer: 'राम व्यापारी', price: 2100, quantity: 50 },
    { id: '2', buyer: 'श्याम कंपनी', price: 2050, quantity: 100 },
    { id: '3', buyer: 'गीता एक्सपोर्ट', price: 2150, quantity: 25 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{translate('sell', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Post Your Harvest</Text>
          
          <View style={styles.formGroup}>
            <Text style={styles.label}>{translate('cropName', language)}</Text>
            <TextInput
              style={styles.input}
              value={formData.cropName}
              onChangeText={(text) => setFormData(prev => ({ ...prev, cropName: text }))}
              placeholder="e.g., Wheat, Rice, Sugarcane"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>{translate('quantity', language)}</Text>
            <TextInput
              style={styles.input}
              value={formData.quantity}
              onChangeText={(text) => setFormData(prev => ({ ...prev, quantity: text }))}
              placeholder="Enter quantity in quintals"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>{translate('expectedPrice', language)}</Text>
            <TextInput
              style={styles.input}
              value={formData.expectedPrice}
              onChangeText={(text) => setFormData(prev => ({ ...prev, expectedPrice: text }))}
              placeholder="Price per quintal (₹)"
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.photoButton}>
            <Camera size={20} color="#22C55E" />
            <Text style={styles.photoButtonText}>{translate('uploadPhoto', language)}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Upload size={20} color="white" />
            <Text style={styles.submitButtonText}>{translate('postListing', language)}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bidsCard}>
          <Text style={styles.bidsTitle}>{translate('activeBids', language)}</Text>
          {mockBids.map((bid) => (
            <View key={bid.id} style={styles.bidItem}>
              <View style={styles.bidInfo}>
                <Text style={styles.buyerName}>{bid.buyer}</Text>
                <Text style={styles.bidDetails}>
                  Quantity: {bid.quantity} quintals
                </Text>
              </View>
              <View style={styles.bidPrice}>
                <Text style={styles.priceText}>₹{bid.price}</Text>
                <Text style={styles.perQuintal}>per quintal</Text>
              </View>
              <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.acceptButtonText}>Accept</Text>
              </TouchableOpacity>
            </View>
          ))}
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
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F9FAFB',
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#22C55E',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  photoButtonText: {
    color: '#22C55E',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 8,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  bidsCard: {
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
  bidsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  bidItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    marginBottom: 12,
  },
  bidInfo: {
    flex: 1,
  },
  buyerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  bidDetails: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  bidPrice: {
    alignItems: 'center',
    marginRight: 12,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22C55E',
  },
  perQuintal: {
    fontSize: 12,
    color: '#6B7280',
  },
  acceptButton: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});