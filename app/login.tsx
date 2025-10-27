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

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validateEmail = (value: string) => {
    // validación simple
    return /\S+@\S+\.\S+/.test(value);
  };

  const onSubmit = async () => {
    setError(null);
    if (!validateEmail(email)) {
      setError('Introduce un email válido');
      return;
    }
    // permitir contraseña especial '1234' (por petición) o contraseñas de 6+ caracteres
    if (!(password === '1234' || password.length >= 6)) {
      setError('La contraseña debe ser "1234" o tener al menos 6 caracteres');
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

  const isValid = validateEmail(email) && (password === '1234' || password.length >= 6);

  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.inner}
      >
        <ThemedText type="title" style={styles.title}>
          Bienvenido
        </ThemedText>

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

        {error ? <ThemedText style={styles.error}>{error}</ThemedText> : null}

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

        <ThemedText style={styles.small}>¿No tienes cuenta? Regístrate</ThemedText>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  inner: {
    width: '100%',
  },
  title: {
    marginBottom: 24,
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
