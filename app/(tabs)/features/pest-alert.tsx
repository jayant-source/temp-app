import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { router } from 'expo-router';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';

export default function PestAlertScreen() {
  const { language } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.title}>{translate('pestAlert', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>{translate('pestAlert', language)}</Text>
          <Text style={styles.placeholderSubText}>
            {translate('pestAlertPlaceholder', language)}
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
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  placeholderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  placeholderSubText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
  },
});
