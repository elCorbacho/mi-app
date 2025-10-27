# 🏥 Sistema de Anatomía Patológica

Sistema móvil para la gestión de casos de anatomía patológica desarrollado con React Native y Expo.

## 📋 Descripción

Aplicación móvil profesional diseñada para patólogos y personal médico especializado que permite gestionar casos, revisar informes y mantener un seguimiento de diagnósticos médicos con animaciones modernas e interfaz intuitiva.

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 8.0.0
- Expo CLI

### Instalación
```bash
# Clonar repositorio
git clone [url-del-repositorio]
cd mi-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npx expo start
```

### Ejecutar
- **📱 Expo Go**: Escanear código QR
- **🤖 Android**: Presionar `a`
- **🍎 iOS**: Presionar `i`
- **🌐 Web**: Presionar `w`

## 🔐 Credenciales de Acceso

```bash
Email: cualquier@email.valido (ej: doctor@hospital.com)
Contraseña: 1234
```

## ⚡ Funcionalidades Principales

- **🔐 Autenticación segura** con validación en tiempo real
- **📊 Dashboard médico** con estadísticas del día
- **👤 Perfil profesional** con sistema de privilegios
- **🚨 Gestión de casos urgentes** con códigos únicos
- **⏰ Reloj en tiempo real** actualizado automáticamente
- **🎨 Animaciones suaves** y transiciones modernas

## 📱 Pantallas y Navegación

### 🔑 Login (`app/login.tsx`)
- Validación de email y contraseña
- Persistencia de sesión con AsyncStorage
- Animaciones de entrada escalonadas

### 🏠 Dashboard (`app/(tabs)/index.tsx`)
- **Resumen del día**: 12 casos pendientes, 8 completados, 3 urgentes
- **Acciones rápidas**:
  - 🆕 Nuevo caso
  - 🔍 Buscar casos
  - 📄 Informes pendientes
- **Casos urgentes**: AP-2024-1456, AP-2024-1457

### 👤 Perfil (`app/(tabs)/perfil.tsx`)
- **Información personal**: Dr. Juan Carlos Pérez
- **Credenciales**: MP-12345, Anatomía Patológica
- **Privilegios granulares**:
  - ✅ Diagnóstico de biopsias
  - ✅ Revisión de citologías
  - ✅ Firmar informes definitivos
  - ✅ Acceso a casos urgentes
  - ❌ Administrar usuarios
  - ❌ Configurar sistema
- **Logout seguro** con confirmación

## 🛠️ Stack Tecnológico

- **React Native** 0.74+
- **Expo** SDK 51+
- **TypeScript** 5.3+
- **Expo Router** (navegación basada en archivos)
- **AsyncStorage** (persistencia local)
- **React Native Reanimated** (animaciones)
- **Safe Area Context** (áreas seguras)

## 📁 Estructura del Proyecto

```
mi-app/
├── app/
│   ├── login.tsx              # Pantalla de login
│   ├── index.tsx              # Punto de entrada
│   ├── _layout.tsx            # Layout principal
│   └── (tabs)/
│       ├── index.tsx          # Dashboard
│       ├── perfil.tsx         # Perfil
│       └── _layout.tsx        # Layout de tabs
├── components/
│   ├── current-time.tsx       # Reloj en tiempo real
│   ├── animated-view.tsx      # Sistema de animaciones
│   └── ...
└── constants/
    └── theme.ts               # Colores y tema
```

## 🎨 Componentes Destacados

### [`CurrentTime`](components/current-time.tsx)
- Actualización automática cada segundo
- Formato localizado en español
- Icono médico integrado

### [`AnimatedView`](components/animated-view.tsx)
- 5 tipos de animación: fade, slideRight, slideUp, scale, bounce
- Delays configurables
- Integración con Reanimated 3

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para más detalles.

---

**🏥 Desarrollado para profesionales de la salud**
