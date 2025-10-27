import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  includeTabBar?: boolean;
};

export default function SafeAreaWrapper({ children, includeTabBar = true }: Props) {
  const insets = useSafeAreaInsets();

  // Cálculo más preciso del espacio necesario para el tab bar
  const tabBarSpace = includeTabBar 
    ? Platform.OS === 'ios' 
      ? 70 + insets.bottom + 10  // Altura base + área segura + padding extra
      : 60 + insets.bottom + 8   // Altura base + área segura + padding extra
    : 0;

  return (
    <View 
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: includeTabBar ? tabBarSpace : insets.bottom,
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