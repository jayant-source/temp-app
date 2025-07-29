import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import { Phone, FileText, CircleHelp as HelpCircle } from 'lucide-react-native';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';
import { SpeakerButton } from '@/components/common/SpeakerButton';
import { mockSchemes } from '@/data/mockData';
import { Scheme } from '@/types';

export default function HelpScreen() {
  const { language } = useLanguage();

  const callHelpline = () => {
    Linking.openURL('tel:1800-180-1551'); // Kisan Call Centre
  };

  const renderScheme = (scheme: Scheme) => (
    <View key={scheme.id} style={styles.schemeCard}>
      <View style={styles.schemeHeader}>
        <Text style={styles.schemeName}>
          {language === 'hindi' ? scheme.nameHindi : scheme.name}
        </Text>
        <SpeakerButton 
          text={`${language === 'hindi' ? scheme.nameHindi : scheme.name}. ${language === 'hindi' ? scheme.descriptionHindi : scheme.description}`}
        />
      </View>
      
      <Text style={styles.schemeDescription}>
        {language === 'hindi' ? scheme.descriptionHindi : scheme.description}
      </Text>
      
      <View style={styles.eligibilitySection}>
        <Text style={styles.eligibilityTitle}>
          {translate('eligibility', language)}:
        </Text>
        <Text style={styles.eligibilityText}>
          {language === 'hindi' ? scheme.eligibilityHindi : scheme.eligibility}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{translate('help', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.helplineButton} onPress={callHelpline}>
          <Phone size={24} color="white" />
          <View style={styles.helplineInfo}>
            <Text style={styles.helplineTitle}>{translate('callHelpline', language)}</Text>
            <Text style={styles.helplineNumber}>1800-180-1551</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.schemesSection}>
          <Text style={styles.sectionTitle}>{translate('govSchemes', language)}</Text>
          {mockSchemes.map(renderScheme)}
        </View>

        <View style={styles.faqSection}>
          <Text style={styles.sectionTitle}>{translate('faq', language)}</Text>
          
          <View style={styles.faqItem}>
            <View style={styles.faqQuestion}>
              <HelpCircle size={20} color="#22C55E" />
              <Text style={styles.faqQuestionText}>
                {translate('voiceAssistantQuestion', language)}
              </Text>
            </View>
            <Text style={styles.faqAnswer}>
              {translate('voiceAssistantAnswer', language)}
            </Text>
          </View>

          <View style={styles.faqItem}>
            <View style={styles.faqQuestion}>
              <HelpCircle size={20} color="#22C55E" />
              <Text style={styles.faqQuestionText}>
                {translate('recommendationAccuracyQuestion', language)}
              </Text>
            </View>
            <Text style={styles.faqAnswer}>
             {translate('recommendationAccuracyAnswer', language)}
            </Text>
          </View>

          <View style={styles.faqItem}>
            <View style={styles.faqQuestion}>
              <HelpCircle size={20} color="#22C55E" />
              <Text style={styles.faqQuestionText}>
                {translate('solarCalculatorAccuracyQuestion', language)}
              </Text>
            </View>
            <Text style={styles.faqAnswer}>
              {translate('solarCalculatorAccuracyAnswer', language)}
            </Text>
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
  helplineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF4444',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  helplineInfo: {
    marginLeft: 16,
  },
  helplineTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  helplineNumber: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
  },
  schemesSection: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  schemeCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  schemeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  schemeName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    marginRight: 12,
  },
  schemeDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  eligibilitySection: {
    marginTop: 8,
  },
  eligibilityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  eligibilityText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 18,
  },
  faqSection: {
    margin: 16,
  },
  faqItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  faqQuestionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 8,
    flex: 1,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginLeft: 28,
  },
});
