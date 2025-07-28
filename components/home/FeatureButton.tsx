import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Video as LucideIcon } from 'lucide-react-native';

interface FeatureButtonProps {
  title: string;
  icon: LucideIcon;
  onPress: () => void;
  color: string;
}

export function FeatureButton({ title, icon: Icon, onPress, color }: FeatureButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon size={32} color="white" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 120,
    margin: 8,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});