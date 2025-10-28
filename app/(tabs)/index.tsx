import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import AnimatedView from '@/components/animated-view';
import CurrentTime from '@/components/current-time';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import TabSafeContent from '@/components/tab-safe-content';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';


// Pantalla principal con scroll parallax, estadísticas y acciones rápidas
export default function HomeScreen() {
  return (
    <TabSafeContent>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#E8F4FD', dark: '#1A2B3A' }}
        headerImage={
          <View style={styles.headerContainer}>
            <Ionicons name="medical" size={80} color="#FFFFFF" />
            <ThemedText type="title" style={styles.headerTitle}>
              Anatomía Patológica
            </ThemedText>
            <ThemedText style={styles.headerSubtitle}>
              Sistema de Gestión Hospitalaria
            </ThemedText>
          </View>
        }>
      
      {/* Usuario logueado */}
      <ThemedView style={styles.statsContainer}>
        <View style={styles.userHeader}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Bienvenido
          </ThemedText>
          <CurrentTime 
            fontSize={12}
            color="#666"
            style={styles.sectionTime}
          />
        </View>
        
        {/* Estadísticas del día */}
        <AnimatedView animation="slideUp" delay={300}>
          <ThemedView style={styles.statsContainer}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>Resumen del día</ThemedText>
            <View style={styles.statsRow}>
              <AnimatedView animation="scale" delay={400}>
                <View style={styles.statCard}>
                  <ThemedText type="defaultSemiBold" style={styles.statNumber}>12</ThemedText>
                  <ThemedText style={styles.statLabel}>Casos pendientes</ThemedText>
                </View>
              </AnimatedView>
              <AnimatedView animation="scale" delay={500}>
                <View style={styles.statCard}>
                  <ThemedText type="defaultSemiBold" style={styles.statNumber}>8</ThemedText>
                  <ThemedText style={styles.statLabel}>Informes completados</ThemedText>
                </View>
              </AnimatedView>
              <AnimatedView animation="scale" delay={600}>
                <View style={styles.statCard}>
                  <ThemedText type="defaultSemiBold" style={styles.statNumber}>3</ThemedText>
                  <ThemedText style={styles.statLabel}>Urgentes</ThemedText>
                </View>
              </AnimatedView>
            </View>
          </ThemedView>
        </AnimatedView>

        {/* Acciones rápidas */}
        <AnimatedView animation="slideUp" delay={700}>
          <ThemedView style={styles.quickActionsContainer}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>Acciones rápidas</ThemedText>
            
            <AnimatedView animation="slideRight" delay={800}>
              <Link href="/modal" style={styles.actionButton}>
                <View style={styles.actionContent}>
                  <Ionicons name="add-circle" size={24} color="#2E7BC6" />
                  <View style={styles.actionText}>
                    <ThemedText type="defaultSemiBold">Nuevo caso</ThemedText>
                    <ThemedText style={styles.actionDescription}>Registrar nueva biopsia o citología</ThemedText>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </View>
              </Link>
            </AnimatedView>

            <AnimatedView animation="slideRight" delay={900}>
              <Link href="/modal" style={styles.actionButton}>
                <View style={styles.actionContent}>
                  <Ionicons name="search" size={24} color="#2E7BC6" />
                  <View style={styles.actionText}>
                    <ThemedText type="defaultSemiBold">Buscar casos</ThemedText>
                    <ThemedText style={styles.actionDescription}>Consultar historial de pacientes</ThemedText>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </View>
              </Link>
            </AnimatedView>

            <AnimatedView animation="slideRight" delay={1000}>
              <Link href="/modal" style={styles.actionButton}>
                <View style={styles.actionContent}>
                  <Ionicons name="document-text" size={24} color="#2E7BC6" />
                  <View style={styles.actionText}>
                    <ThemedText type="defaultSemiBold">Informes pendientes</ThemedText>
                    <ThemedText style={styles.actionDescription}>Revisar y completar diagnósticos</ThemedText>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </View>
              </Link>
            </AnimatedView>
          </ThemedView>
        </AnimatedView>

        {/* Casos urgentes */}
        <ThemedView style={styles.urgentContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Casos urgentes</ThemedText>
          
          <View style={styles.caseCard}>
            <View style={styles.urgentBadge}>
              <ThemedText style={styles.urgentText}>URGENTE</ThemedText>
            </View>
            <ThemedText type="defaultSemiBold">Caso #AP-2024-1456</ThemedText>
            <ThemedText style={styles.caseDetails}>Biopsia de mama - Paciente: M. García</ThemedText>
            <ThemedText style={styles.caseTime}>Recibido hace 2 horas</ThemedText>
          </View>

          <View style={styles.caseCard}>
            <View style={styles.urgentBadge}>
              <ThemedText style={styles.urgentText}>URGENTE</ThemedText>
            </View>
            <ThemedText type="defaultSemiBold">Caso #AP-2024-1457</ThemedText>
            <ThemedText style={styles.caseDetails}>Citología cervical - Paciente: L. Rodríguez</ThemedText>
            <ThemedText style={styles.caseTime}>Recibido hace 4 horas</ThemedText>
          </View>
        </ThemedView>

      </ThemedView>

    </ParallaxScrollView>
    </TabSafeContent>
  );
}

const styles = StyleSheet.create({
  // Header styles
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerIcon: {
    marginBottom: 8,
  },
  headerTitle: {
    color: '#2E7BC6',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#000000ff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },

  // Section styles
  sectionTitle: {
    marginBottom: 16,
    fontWeight: '600',
    color: '#2E7BC6',
  },

  // Stats container
  statsContainer: {
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F8FCFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1F0FA',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7BC6',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },

  // Quick actions
  quickActionsContainer: {
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    overflow: 'hidden',
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  actionText: {
    flex: 1,
    marginLeft: 12,
  },
  actionDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },

  // Urgent cases
  urgentContainer: {
    marginBottom: 24,
  },
  caseCard: {
    backgroundColor: '#FFF9F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFE5D1',
    position: 'relative',
  },
  urgentBadge: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  urgentText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  caseDetails: {
    color: '#666',
    marginTop: 4,
  },
  caseTime: {
    color: '#999',
    fontSize: 12,
    marginTop: 4,
  },

  // Time container
  userHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTime: {
    alignItems: 'flex-end',
  },
});
