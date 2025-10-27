import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export default function TabSafeContent({ children }: Props) {
  const insets = useSafeAreaInsets();

  // Espaciado adicional más generoso para asegurar que no hay solapamiento
  const extraBottomSpace = Platform.OS === 'ios' ? 120 : 100;

  return (
    <View 
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom + extraBottomSpace, 100),
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