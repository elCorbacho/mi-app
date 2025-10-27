import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export default function TabSafeContent({ children }: Props) {
  const insets = useSafeAreaInsets();

  // Como el tab bar ya no está en posición absoluta, solo necesitamos padding básico
  return (
    <View 
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: Platform.OS === 'ios' ? 10 : 5, // Solo un pequeño padding adicional
        }
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});