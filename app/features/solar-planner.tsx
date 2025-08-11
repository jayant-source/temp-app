import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { ArrowLeft, Sun, Calculator } from 'lucide-react-native';
import { router } from 'expo-router';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';

export default function SolarPlannerScreen() {
  const { language } = useLanguage();
  const [farmSize, setFarmSize] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    systemSize: 0,
    installationCost: 0,
    monthlyEarnings: 0,
    yearlyEarnings: 0,
    paybackPeriod: 0,
  });

  const calculateSolar = () => {
    if (!farmSize || !monthlyBill) return;

    const size = parseFloat(farmSize);
    const bill = parseFloat(monthlyBill);
    
    // Mock calculations
    const systemSize = Math.round(size * 2.5); // kW
    const installationCost = systemSize * 45000; // ₹45,000 per kW
    const monthlyEarnings = systemSize * 150; // ₹150 per kW per month
    const yearlyEarnings = monthlyEarnings * 12;
    const paybackPeriod = Math.round(installationCost / yearlyEarnings);

    setResults({
      systemSize,
      installationCost,
      monthlyEarnings,
      yearlyEarnings,
      paybackPeriod,
    });
    setShowResults(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.title}>{translate('solarPlanner', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {!showResults ? (
          <View style={styles.formCard}>
            <View style={styles.formHeader}>
              <Sun size={32} color="#EAB308" />
              <Text style={styles.formTitle}>Solar Income Calculator</Text>
              <Text style={styles.formSubtitle}>
                Calculate potential earnings from solar panels on your farm
              </Text>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Farm Size (Acres)</Text>
              <TextInput
                style={styles.input}
                value={farmSize}
                onChangeText={setFarmSize}
                placeholder="Enter your farm size"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Monthly Electricity Bill (₹)</Text>
              <TextInput
                style={styles.input}
                value={monthlyBill}
                onChangeText={setMonthlyBill}
                placeholder="Enter your monthly bill amount"
                keyboardType="numeric"
              />
            </View>

            <TouchableOpacity
              style={[
                styles.calculateButton,
                (!farmSize || !monthlyBill) && styles.disabledButton
              ]}
              onPress={calculateSolar}
              disabled={!farmSize || !monthlyBill}
            >
              <Calculator size={20} color="white" />
              <Text style={styles.calculateButtonText}>Calculate Solar Potential</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resultsCard}>
            <Text style={styles.resultsTitle}>Your Solar Potential</Text>
            
            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Recommended System Size</Text>
              <Text style={styles.resultValue}>{results.systemSize} kW</Text>
            </View>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Installation Cost</Text>
              <Text style={styles.resultValue}>₹{results.installationCost.toLocaleString()}</Text>
            </View>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Monthly Earnings</Text>
              <Text style={[styles.resultValue, styles.earningsText]}>₹{results.monthlyEarnings.toLocaleString()}</Text>
            </View>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Yearly Earnings</Text>
              <Text style={[styles.resultValue, styles.earningsText]}>₹{results.yearlyEarnings.toLocaleString()}</Text>
            </View>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Payback Period</Text>
              <Text style={styles.resultValue}>{results.paybackPeriod} years</Text>
            </View>

            <TouchableOpacity
              style={styles.newCalculationButton}
              onPress={() => setShowResults(false)}
            >
              <Text style={styles.newCalculationButtonText}>New Calculation</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Benefits of Solar Farming</Text>
          <View style={styles.benefitsList}>
            <Text style={styles.benefitItem}>• Generate passive income from unused land</Text>
            <Text style={styles.benefitItem}>• Reduce electricity costs significantly</Text>
            <Text style={styles.benefitItem}>• Government subsidies available</Text>
            <Text style={styles.benefitItem}>• 25-year warranty on solar panels</Text>
            <Text style={styles.benefitItem}>• Environmentally friendly energy</Text>
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
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
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
  calculateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAB308',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: '#D1D5DB',
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  resultsCard: {
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
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    textAlign: 'center',
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  resultLabel: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  resultValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  earningsText: {
    color: '#22C55E',
  },
  newCalculationButton: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#EAB308',
  },
  newCalculationButtonText: {
    color: '#EAB308',
    fontSize: 16,
    fontWeight: '600',
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
    marginBottom: 12,
  },
  benefitsList: {
    gap: 8,
  },
  benefitItem: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});