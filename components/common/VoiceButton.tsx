import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Mic } from 'lucide-react-native';

interface VoiceButtonProps {
  onPress: () => void;
  size?: number;
}

export function VoiceButton({ onPress, size = 24 }: VoiceButtonProps) {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      // Mock voice functionality for web
      alert('Voice feature activated! (Mock implementation for web)');
    } else {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Mic size={size} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAB308',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});