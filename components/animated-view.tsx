import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Animated, {
    FadeIn,
    FadeOut,
    SlideInDown,
    SlideInRight,
    SlideOutLeft,
    SlideOutUp,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

type AnimationType = 'fade' | 'slideRight' | 'slideUp' | 'scale' | 'bounce';

interface AnimatedViewProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  style?: ViewStyle;
  entering?: any;
  exiting?: any;
}

export default function AnimatedView({
  children,
  animation = 'fade',
  delay = 0,
  duration = 300,
  style,
  entering,
  exiting,
}: AnimatedViewProps) {
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(30);
  const translateY = useSharedValue(30);
  const scale = useSharedValue(0.9);

  useEffect(() => {
    const timer = setTimeout(() => {
      opacity.value = withTiming(1, { duration });
      translateX.value = withSpring(0, { damping: 15, stiffness: 100 });
      translateY.value = withSpring(0, { damping: 15, stiffness: 100 });
      scale.value = withSpring(1, { damping: 12, stiffness: 150 });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, duration, opacity, scale, translateX, translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    switch (animation) {
      case 'fade':
        return {
          opacity: opacity.value,
        };
      case 'slideRight':
        return {
          opacity: opacity.value,
          transform: [{ translateX: translateX.value }],
        };
      case 'slideUp':
        return {
          opacity: opacity.value,
          transform: [{ translateY: translateY.value }],
        };
      case 'scale':
        return {
          opacity: opacity.value,
          transform: [{ scale: scale.value }],
        };
      case 'bounce':
        return {
          opacity: opacity.value,
          transform: [
            { scale: scale.value },
            { translateY: translateY.value },
          ],
        };
      default:
        return {
          opacity: opacity.value,
        };
    }
  });

  // Si se proporcionan animaciones de entrada/salida personalizadas
  if (entering || exiting) {
    return (
      <Animated.View
        entering={entering}
        exiting={exiting}
        style={[style, animatedStyle]}
      >
        {children}
      </Animated.View>
    );
  }

  return (
    <Animated.View style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
}

// Exportar animaciones predefinidas para fácil uso
export const AnimationPresets = {
  fadeIn: FadeIn.duration(400).delay(100),
  fadeOut: FadeOut.duration(300),
  slideInRight: SlideInRight.duration(350).springify(),
  slideOutLeft: SlideOutLeft.duration(250),
  slideInDown: SlideInDown.duration(400).springify(),
  slideOutUp: SlideOutUp.duration(300),
};