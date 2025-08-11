import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { ArrowLeft, Bug, AlertTriangle, Shield } from 'lucide-react-native';
import { router } from 'expo-router';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';

const mockAlerts = [
  {
    id: '1',
    pest: 'Brown Plant Hopper',
    pestHindi: 'भूरा फुदका',
    crop: 'Rice',
    cropHindi: 'चावल',
    severity: 'High',
    severityHindi: 'उच्च',
    description: 'Severe infestation reported in nearby areas',
    descriptionHindi: 'आसपास के क्षेत्रों में गंभीर संक्रमण की रिपोर्ट',
    prevention: 'Use neem-based pesticides, maintain proper water levels',
    preventionHindi: 'नीम आधारित कीटनाशक का उपयोग करें, उचित जल स्तर बनाए रखें',
    image: 'https://images.pexels.com/photos/4750309/pexels-photo-4750309.jpeg',
  },
  {
    id: '2',
    pest: 'Aphids',
    pestHindi: 'माहू',
    crop: 'Wheat',
    cropHindi: 'गेहूं',
    severity: 'Medium',
    severityHindi: 'मध्यम',
    description: 'Early stage infestation detected',
    descriptionHindi: 'प्रारंभिक चरण का संक्रमण पाया गया',
    prevention: 'Spray soapy water solution, introduce ladybugs',
    preventionHindi: 'साबुन के पानी का छिड़काव करें, लेडीबग्स का परिचय दें',
    image: 'https://images.pexels.com/photos/326022/pexels-photo-326022.jpeg',
  },
];

export default function PestAlertScreen() {
  const { language } = useLanguage();

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return '#EF4444';
      case 'medium': return '#EAB308';
      case 'low': return '#22C55E';
      default: return '#6B7280';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.title}>{translate('pestAlert', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.alertsHeader}>
          <Bug size={24} color="#EF4444" />
          <Text style={styles.alertsTitle}>Active Pest Alerts in Your Area</Text>
        </View>

        {mockAlerts.map((alert) => (
          <View key={alert.id} style={styles.alertCard}>
            <View style={styles.alertHeader}>
              <View style={styles.alertInfo}>
                <Text style={styles.pestName}>
                  {language === 'hindi' ? alert.pestHindi : alert.pest}
                </Text>
                <Text style={styles.cropName}>
                  Affecting: {language === 'hindi' ? alert.cropHindi : alert.crop}
                </Text>
              </View>
              <View style={[styles.severityBadge, { backgroundColor: getSeverityColor(alert.severity) }]}>
                <AlertTriangle size={16} color="white" />
                <Text style={styles.severityText}>
                  {language === 'hindi' ? alert.severityHindi : alert.severity}
                </Text>
              </View>
            </View>

            <Image source={{ uri: alert.image }} style={styles.alertImage} />

            <View style={styles.alertContent}>
              <Text style={styles.alertDescription}>
                {language === 'hindi' ? alert.descriptionHindi : alert.description}
              </Text>

              <View style={styles.preventionSection}>
                <View style={styles.preventionHeader}>
                  <Shield size={20} color="#22C55E" />
                  <Text style={styles.preventionTitle}>Prevention Measures</Text>
                </View>
                <Text style={styles.preventionText}>
                  {language === 'hindi' ? alert.preventionHindi : alert.prevention}
                </Text>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>General Pest Prevention Tips</Text>
          <View style={styles.tipsList}>
            <Text style={styles.tipItem}>• Regular field inspection (weekly)</Text>
            <Text style={styles.tipItem}>• Maintain crop rotation practices</Text>
            <Text style={styles.tipItem}>• Use organic pesticides when possible</Text>
            <Text style={styles.tipItem}>• Keep fields clean of weeds</Text>
            <Text style={styles.tipItem}>• Monitor weather conditions</Text>
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
  alertsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginBottom: 8,
  },
  alertsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 8,
  },
  alertCard: {
    backgroundColor: 'white',
    margin: 16,
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    paddingBottom: 12,
  },
  alertInfo: {
    flex: 1,
  },
  pestName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  cropName: {
    fontSize: 14,
    color: '#6B7280',
  },
  severityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  severityText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  alertImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  alertContent: {
    padding: 16,
  },
  alertDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  preventionSection: {
    backgroundColor: '#F0FDF4',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#22C55E',
  },
  preventionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  preventionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#166534',
    marginLeft: 6,
  },
  preventionText: {
    fontSize: 14,
    color: '#166534',
    lineHeight: 18,
  },
  tipsCard: {
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
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  tipsList: {
    gap: 8,
  },
  tipItem: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});