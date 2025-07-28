import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { Volume2 } from 'lucide-react-native';

interface SpeakerButtonProps {
  text: string;
  size?: number;
}

export function SpeakerButton({ text, size = 20 }: SpeakerButtonProps) {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      // Mock text-to-speech for web
      console.log('Speaking:', text);
      alert(`Speaking: ${text}`);
    } else {
      // Implement actual text-to-speech for mobile
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Volume2 size={size} color="#A3533A" />
    </TouchableOpacity>
  );
}