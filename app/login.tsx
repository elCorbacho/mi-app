import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AnimatedView from '@/components/animated-view';
import CurrentTime from '@/components/current-time';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LoginScreen() {
  // ================= useState HOOKS =================
  // Estado para manejar el email del usuario
  const [email, setEmail] = useState('');
  // Estado para manejar la contraseña del usuario  
  const [password, setPassword] = useState('');
  // Estado para mostrar/ocultar el indicador de carga
  const [loading, setLoading] = useState(false);
  // Estado para mostrar/ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false);
  // Estado para manejar mensajes de error
  const [error, setError] = useState<string | null>(null);
  // ================= FIN useState HOOKS =================
  
  const router = useRouter();

  const validateEmail = (value: string) => {
    // validación simple
    return /\S+@\S+\.\S+/.test(value);
  };

  // Manejar el envío del formulario de login
  const onSubmit = async () => {
    setError(null);
    if (!validateEmail(email)) {
      setError('Introduce un email válido');
      return;
    }
    // SOLO permitir la contraseña exacta '1234'
    if (password !== '1234') {
      setError('Contraseña incorrecta');
      return;
    }

    setLoading(true);
    try {
      // Aquí iría la llamada real al backend / auth
      await new Promise((r) => setTimeout(r, 900));
      // Guardar el email para que otras pantallas puedan leerlo
      try {
        await AsyncStorage.setItem('userEmail', email);
      } catch {
        // no bloquear la navegación si falla el guardado
      }

      router.push('/(tabs)'); // navegar a las tabs después del login
    } catch {
      setError('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  const isValid = validateEmail(email); // Solo validar email para habilitar botón

  // Renderizado del componente
  return (
    <ThemedView style={styles.container}>
      {/* Hora actual en la parte superior con animación */}
      <AnimatedView animation="fade" delay={200}>
        <View style={styles.timeHeader}>
          <CurrentTime 
            style={styles.currentTime}
            fontSize={16}
            color="#2E7BC6"
          />
        </View>
      </AnimatedView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.formContainer}
      >
        {/* Título principal con animación */}
        <AnimatedView animation="slideUp" delay={300}>
          <ThemedText type="title" style={styles.title}>
            Anatomía Patológica
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Sistema de Gestión Hospitalaria
          </ThemedText>
        </AnimatedView>

        {/* Formulario con animaciones escalonadas */}
        <AnimatedView animation="slideRight" delay={500}>
          <ThemedText style={styles.label}>Correo electrónico</ThemedText>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="tucorreo@ejemplo.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholderTextColor="#9AA0A6"
          />
        </AnimatedView>

        <AnimatedView animation="slideRight" delay={600}>
          <ThemedText style={[styles.label, { marginTop: 12 }]}>Contraseña</ThemedText>
          <View style={styles.passwordRow}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="********"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              style={[styles.input, { flex: 1, marginRight: 8 }]}
              placeholderTextColor="#9AA0A6"
            />
            <TouchableOpacity
              onPress={() => setShowPassword((s) => !s)}
              style={styles.showButton}
              activeOpacity={0.7}
            >
              <ThemedText type="link">{showPassword ? 'Ocultar' : 'Mostrar'}</ThemedText>
            </TouchableOpacity>
          </View>
        </AnimatedView>

        {/* Error message con animación */}
        {error ? (
          <AnimatedView animation="bounce" delay={100}>
            <ThemedText style={styles.error}>{error}</ThemedText>
          </AnimatedView>
        ) : null}

        {/* Botón de login con animación */}
        <AnimatedView animation="scale" delay={800}>
          <TouchableOpacity
            style={[styles.button, !isValid || loading ? styles.buttonDisabled : undefined]}
            onPress={onSubmit}
            disabled={!isValid || loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <ThemedText style={styles.buttonText}>Iniciar sesión</ThemedText>
            )}
          </TouchableOpacity>
        </AnimatedView>

        {/* Texto de registro con animación */}
        <AnimatedView animation="fade" delay={1000}>
          <ThemedText style={styles.small}>¿No tienes cuenta? Regístrate</ThemedText>
        </AnimatedView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timeHeader: {
    alignSelf: 'stretch',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'flex-end',
  },
  currentTime: {
    alignItems: 'flex-end',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 24,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    color: '#111',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showButton: {
    paddingHorizontal: 6,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0a84ff',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 3,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  error: {
    marginTop: 10,
    color: '#cc3b3b',
  },
  small: {
    marginTop: 18,
    textAlign: 'center',
    opacity: 0.85,
  },
});
