import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfileScreen() {
  const [userEmail, setUserEmail] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    loadUserEmail();
  }, []);

  const loadUserEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      if (email) {
        setUserEmail(email);
      }
    } catch (error) {
      console.log('Error loading user email:', error);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que deseas cerrar la sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Cerrar Sesión',
          style: 'destructive',
          onPress: async () => {
            try {
              // Limpiar los datos de sesión
              await AsyncStorage.removeItem('userEmail');
              
              // Resetear completamente la navegación y ir al login
              router.dismiss();
              router.replace('/' as never);
            } catch (error) {
              console.log('Error during logout:', error);
            }
          },
        },
      ]
    );
  };

  // Datos simulados del usuario (en una app real vendrían del backend)
  const userProfile = {
    nombre: 'Dr. Juan Carlos Pérez',
    especialidad: 'Anatomía Patológica',
    cedula: 'MP-12345',
    telefono: '+34 123 456 789',
    departamento: 'Patología Clínica',
    fechaIngreso: '15 de Marzo, 2020',
  };

  const privilegios = [
    { name: 'Diagnóstico de biopsias', granted: true },
    { name: 'Revisión de citologías', granted: true },
    { name: 'Firmar informes definitivos', granted: true },
    { name: 'Acceso a casos urgentes', granted: true },
    { name: 'Administrar usuarios', granted: false },
    { name: 'Configurar sistema', granted: false },
    { name: 'Exportar reportes', granted: true },
    { name: 'Supervisor de residentes', granted: true },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E8F4FD', dark: '#1A2B3A' }}
      headerImage={
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={60} color="#FFFFFF" />
          </View>
          <ThemedText type="title" style={styles.headerTitle}>
            Mi Perfil
          </ThemedText>
        </View>
      }>
      
      {/* Información del usuario logueado */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Usuario Activo
        </ThemedText>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="mail" size={20} color="#2E7BC6" />
            <View style={styles.infoText}>
              <ThemedText style={styles.infoLabel}>Correo electrónico</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.infoValue}>
                {userEmail || 'No disponible'}
              </ThemedText>
            </View>
          </View>
        </View>
      </ThemedView>

      {/* Datos del perfil */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Información Personal
        </ThemedText>
        
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="person-outline" size={20} color="#2E7BC6" />
            <View style={styles.infoText}>
              <ThemedText style={styles.infoLabel}>Nombre completo</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.infoValue}>
                {userProfile.nombre}
              </ThemedText>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="medical" size={20} color="#2E7BC6" />
            <View style={styles.infoText}>
              <ThemedText style={styles.infoLabel}>Especialidad</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.infoValue}>
                {userProfile.especialidad}
              </ThemedText>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="card" size={20} color="#2E7BC6" />
            <View style={styles.infoText}>
              <ThemedText style={styles.infoLabel}>Cédula Profesional</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.infoValue}>
                {userProfile.cedula}
              </ThemedText>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="call" size={20} color="#2E7BC6" />
            <View style={styles.infoText}>
              <ThemedText style={styles.infoLabel}>Teléfono</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.infoValue}>
                {userProfile.telefono}
              </ThemedText>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="business" size={20} color="#2E7BC6" />
            <View style={styles.infoText}>
              <ThemedText style={styles.infoLabel}>Departamento</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.infoValue}>
                {userProfile.departamento}
              </ThemedText>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={20} color="#2E7BC6" />
            <View style={styles.infoText}>
              <ThemedText style={styles.infoLabel}>Fecha de ingreso</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.infoValue}>
                {userProfile.fechaIngreso}
              </ThemedText>
            </View>
          </View>
        </View>
      </ThemedView>

      {/* Privilegios y permisos */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Privilegios y Permisos
        </ThemedText>
        
        <View style={styles.privilegesContainer}>
          {privilegios.map((privilegio, index) => (
            <View key={index} style={styles.privilegeItem}>
              <View style={styles.privilegeInfo}>
                <Ionicons 
                  name={privilegio.granted ? "checkmark-circle" : "close-circle"} 
                  size={20} 
                  color={privilegio.granted ? "#4CAF50" : "#F44336"} 
                />
                <ThemedText style={[
                  styles.privilegeText,
                  { color: privilegio.granted ? '#333' : '#999' }
                ]}>
                  {privilegio.name}
                </ThemedText>
              </View>
              <View style={[
                styles.statusBadge,
                { backgroundColor: privilegio.granted ? '#E8F5E8' : '#FFF3F3' }
              ]}>
                <ThemedText style={[
                  styles.statusText,
                  { color: privilegio.granted ? '#4CAF50' : '#F44336' }
                ]}>
                  {privilegio.granted ? 'Concedido' : 'Denegado'}
                </ThemedText>
              </View>
            </View>
          ))}
        </View>
      </ThemedView>

      {/* Botón de cerrar sesión */}
      <ThemedView style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#F44336" />
          <ThemedText style={styles.logoutText}>Cerrar Sesión</ThemedText>
        </TouchableOpacity>
      </ThemedView>

    </ParallaxScrollView>
  );
}const styles = StyleSheet.create({
  // Header styles
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2E7BC6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  headerTitle: {
    color: '#2E7BC6',
    fontWeight: 'bold',
  },

  // Section styles
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: '600',
    color: '#2E7BC6',
  },

  // Info card styles
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },

  // Privileges styles
  privilegesContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    overflow: 'hidden',
  },
  privilegeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  privilegeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  privilegeText: {
    marginLeft: 12,
    fontSize: 14,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },

  // Logout button
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF3F3',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FFCDD2',
  },
  logoutText: {
    marginLeft: 8,
    color: '#F44336',
    fontWeight: '600',
  },
});
