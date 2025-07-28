import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Play, Coins, CircleCheck as CheckCircle } from 'lucide-react-native';
import { useLanguage } from '@/hooks/useLanguage';
import { translate } from '@/data/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { VoiceButton } from '@/components/common/VoiceButton';
import { mockVideos } from '@/data/mockData';
import { Video } from '@/types';

export default function AcademyScreen() {
  const { language } = useLanguage();
  const [totalCoins, setTotalCoins] = useState(225);
  const [videos, setVideos] = useState(mockVideos);

  const handleWatchVideo = (videoId: string) => {
    setVideos(prev => 
      prev.map(video => 
        video.id === videoId 
          ? { ...video, watched: true }
          : video
      )
    );
    
    const video = videos.find(v => v.id === videoId);
    if (video && !video.watched) {
      setTotalCoins(prev => prev + video.coinsReward);
    }
  };

  const renderVideo = (video: Video) => (
    <TouchableOpacity
      key={video.id}
      style={styles.videoCard}
      onPress={() => handleWatchVideo(video.id)}
    >
      <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
      <View style={styles.playOverlay}>
        {video.watched ? (
          <CheckCircle size={32} color="#22C55E" />
        ) : (
          <Play size={32} color="white" />
        )}
      </View>
      
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>
          {language === 'hindi' ? video.titleHindi : video.title}
        </Text>
        <View style={styles.videoMeta}>
          <Text style={styles.duration}>{video.duration}</Text>
          <View style={styles.coins}>
            <Coins size={16} color="#EAB308" />
            <Text style={styles.coinsText}>{video.coinsReward}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{translate('academy', language)}</Text>
        <View style={styles.headerActions}>
          <LanguageToggle />
          <VoiceButton onPress={() => console.log('Voice activated')} />
        </View>
      </View>

      <View style={styles.coinsHeader}>
        <View style={styles.coinsContainer}>
          <Coins size={24} color="#EAB308" />
          <Text style={styles.coinsTitle}>{translate('coinsEarned', language)}</Text>
          <Text style={styles.coinsCount}>{totalCoins}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.videosContainer}>
          {videos.map(renderVideo)}
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
  coinsHeader: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  coinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 12,
  },
  coinsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#92400E',
    marginLeft: 8,
    marginRight: 12,
  },
  coinsCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EAB308',
  },
  content: {
    flex: 1,
  },
  videosContainer: {
    padding: 16,
  },
  videoCard: {
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
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  videoInfo: {
    padding: 16,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  videoMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    fontSize: 14,
    color: '#6B7280',
  },
  coins: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EAB308',
    marginLeft: 4,
  },
});