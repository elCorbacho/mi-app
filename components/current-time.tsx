import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  style?: any;
  showIcon?: boolean;
  fontSize?: number;
  color?: string;
};

export default function CurrentTime({ 
  style, 
  showIcon = true, 
  fontSize = 14,
  color = '#666'
}: Props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <View style={[styles.container, style]}>
      {showIcon && (
        <Ionicons 
          name="time-outline" 
          size={fontSize + 2} 
          color={color} 
          style={styles.icon} 
        />
      )}
      <View style={styles.timeContainer}>
        <ThemedText style={[styles.time, { fontSize, color }]}>
          {formatTime(currentTime)}
        </ThemedText>
        <ThemedText style={[styles.date, { fontSize: fontSize - 2, color }]}>
          {formatDate(currentTime)}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  timeContainer: {
    alignItems: 'flex-start',
  },
  time: {
    fontWeight: '600',
    marginBottom: 2,
  },
  date: {
    opacity: 0.8,
    textTransform: 'capitalize',
  },
});