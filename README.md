# 🏥 Sistema de Anatomía Patológica

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![AsyncStorage](https://img.shields.io/badge/AsyncStorage-FF6B6B?style=for-the-badge&logo=react&logoColor=white)

**Sistema móvil profesional para la gestión de casos de anatomía patológica**

[📱 Demo](#demo) • [🚀 Instalación](#instalación) • [⚡ Características](#características) • [🏗️ Arquitectura](#arquitectura)

</div>

---

## 📋 Descripción

**Sistema de Anatomía Patológica** es una aplicación móvil desarrollada con React Native y Expo, diseñada específicamente para profesionales médicos en el área de anatomía patológica. La aplicación permite gestionar casos, revisar informes y mantener un seguimiento profesional de los diagnósticos médicos.

### 🎯 Objetivo

Proporcionar una herramienta móvil intuitiva y profesional que facilite el trabajo diario de patólogos y personal médico especializado, optimizando los flujos de trabajo y mejorando la eficiencia en la gestión de casos.

---

## ⚡ Características Principales

### 🔐 **Autenticación Segura**
- Sistema de login con validación de credenciales
- Contraseña de acceso: `1234`
- Persistencia de sesión con AsyncStorage
- Logout seguro con limpieza de datos

### 🏠 **Dashboard Médico**
- **Resumen diario** con estadísticas en tiempo real
- **Casos pendientes**: Visualización de trabajo por completar
- **Informes completados**: Seguimiento de productividad
- **Casos urgentes**: Priorización de casos críticos

### ⚡ **Acciones Rápidas**
- 🆕 **Nuevo caso**: Registro de biopsias y citologías
- 🔍 **Búsqueda**: Consulta de historial de pacientes  
- 📄 **Informes pendientes**: Gestión de diagnósticos

### 🚨 **Gestión de Urgencias**
- Lista prioritaria de casos urgentes
- Información detallada del paciente
- Tiempo transcurrido desde la recepción
- Códigos de referencia únicos

### 👤 **Perfil Profesional**
- **Información personal**: Datos del médico especialista
- **Credenciales**: Cédula profesional y especialidad
- **Privilegios**: Sistema de permisos granular
- **Configuración**: Gestión de cuenta y sesión

### 🕐 **Hora en Tiempo Real**
- Reloj actualizado cada segundo
- Formato 24 horas (HH:MM:SS)
- Fecha completa en español
- Integrado en todas las pantallas

---

## 🚀 Instalación

### 📋 Prerrequisitos

```bash
Node.js >= 18.0.0
npm >= 8.0.0
Expo CLI
```

### 🔧 Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/usuario/mi-app.git
   cd mi-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npx expo start
   ```

4. **Ejecutar en dispositivo**
   - **📱 Expo Go**: Escanea el código QR
   - **🤖 Android**: Presiona `a`
   - **🍎 iOS**: Presiona `i`
   - **🌐 Web**: Presiona `w`

---

## 📱 Demo

### 🔐 Credenciales de acceso
- **Email**: Cualquier email válido (ejemplo@dominio.com)
- **Contraseña**: `1234`

### 📸 Capturas de pantalla

```
🏠 Home Dashboard    👤 Perfil Médico    🔐 Login Seguro
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ ⏰ 14:30:25     │  │ Dr. Juan Pérez  │  │ Anatomía        │
│                 │  │ MP-12345        │  │ Patológica      │
│ 📊 Resumen      │  │                 │  │                 │
│ • 12 Pendientes │  │ ✅ Diagnósticos │  │ 📧 Email        │
│ • 8 Completados │  │ ✅ Citologías   │  │ 🔒 Contraseña   │
│ • 3 Urgentes    │  │ ❌ Admin        │  │                 │
│                 │  │                 │  │ [Iniciar Sesión]│
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## 🏗️ Arquitectura

### 📁 Estructura del proyecto

```
mi-app/
├── 📱 app/                          # Navegación principal
│   ├── 🔐 login.tsx                 # Pantalla de autenticación
│   ├── 📄 index.tsx                 # Punto de entrada
│   ├── 🎛️ _layout.tsx               # Layout principal
│   └── 📂 (tabs)/                   # Navegación por pestañas
│       ├── 🏠 index.tsx             # Dashboard principal
│       ├── 👤 explore.tsx           # Perfil de usuario
│       └── 📱 _layout.tsx           # Layout de tabs
├── 🧩 components/                   # Componentes reutilizables
│   ├── ⏰ current-time.tsx          # Reloj en tiempo real
│   ├── 🎨 themed-text.tsx           # Texto temático
│   ├── 🎨 themed-view.tsx           # Vista temática
│   └── 📱 ui/                       # Componentes UI
├── 🎨 constants/                    # Constantes de diseño
├── 🔧 hooks/                        # Hooks personalizados
└── 📦 assets/                       # Recursos estáticos
```

### 🛠️ Stack Tecnológico

| Tecnología | Propósito | Versión |
|------------|-----------|---------|
| **React Native** | Framework móvil | Latest |
| **Expo** | Plataforma de desarrollo | SDK 51+ |
| **TypeScript** | Tipado estático | 5.0+ |
| **Expo Router** | Navegación file-based | v3 |
| **AsyncStorage** | Persistencia local | Latest |
| **Ionicons** | Iconografía médica | Latest |

### 🎨 Componentes Principales

#### ⏰ **CurrentTime**
```typescript
interface CurrentTimeProps {
  style?: any;
  showIcon?: boolean;
  fontSize?: number;
  color?: string;
}
```
- ✅ Actualización automática cada segundo
- ✅ Formato localizado en español
- ✅ Personalización visual
- ✅ Optimizado para rendimiento

#### 🔐 **LoginScreen**
```typescript
// Validación estricta de credenciales
const isValid = validateEmail(email) && password === '1234';
```
- ✅ Validación de email en tiempo real
- ✅ Contraseña única requerida
- ✅ Manejo de estados de carga
- ✅ Persistencia de sesión

#### 🏠 **HomeScreen**
```typescript
// Estadísticas del dashboard
const stats = {
  pending: 12,
  completed: 8,
  urgent: 3
};
```
- ✅ Resumen visual de casos
- ✅ Acciones rápidas
- ✅ Lista de urgencias
- ✅ Navegación intuitiva

---

## 🔧 Configuración

### 🎯 Variables de entorno
```bash
# No requiere configuración adicional
# Todas las configuraciones están integradas
```

### 🎨 Personalización de tema
```typescript
// constants/theme.ts
export const Colors = {
  primary: '#2E7BC6',      // Azul médico
  secondary: '#E8F4FD',    // Azul claro
  urgent: '#FF6B35',       // Naranja urgente
  success: '#4CAF50',      // Verde éxito
  error: '#F44336',        // Rojo error
};
```

---

## 📚 Guías de uso

### 🔐 **Inicio de sesión**
1. Introduce cualquier email válido
2. Usa la contraseña: `1234`
3. Presiona "Iniciar sesión"

### 🏠 **Navegación en el dashboard**
1. **Resumen**: Visualiza estadísticas del día
2. **Acciones rápidas**: Acceso directo a funciones principales
3. **Casos urgentes**: Prioriza el trabajo crítico

### 👤 **Gestión de perfil**
1. **Información personal**: Consulta datos del médico
2. **Privilegios**: Revisa permisos asignados
3. **Cerrar sesión**: Logout seguro del sistema

---

## 🤝 Contribución

### 🚀 Cómo contribuir

1. **Fork del repositorio**
2. **Crear rama feature** (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit cambios** (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push a la rama** (`git push origin feature/nueva-funcionalidad`)
5. **Abrir Pull Request**

### 📋 Estándares de código
- ✅ TypeScript estricto
- ✅ Componentes funcionales
- ✅ Hooks para estado
- ✅ Comentarios descriptivos

---

## 📞 Soporte

### 🐛 Reportar problemas
- Abre un [issue en GitHub](https://github.com/usuario/mi-app/issues)
- Incluye pasos para reproducir
- Adjunta capturas de pantalla

### 💬 Contacto
- **Email**: soporte@anatomiapatologica.com
- **Documentation**: [Wiki del proyecto](https://github.com/usuario/mi-app/wiki)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**Desarrollado con ❤️ para profesionales médicos**

[⬆️ Volver arriba](#-sistema-de-anatomía-patológica)

</div>
