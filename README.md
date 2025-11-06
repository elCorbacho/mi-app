# 🏥 Sistema de Anatomía Patológica (Evaluacion 1 desarrollo movil) VERSION 2.1

Sistema móvil para la gestión de casos de anatomía patológica desarrollado con React Native y Expo.



## 📋 Descripción

Aplicación móvil profesional diseñada para patólogos y personal médico especializado.

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

## 🎬 Demostración

Puedes ver una demostración de la app (video) en Google Drive:

[Ver demostración de la app](https://drive.google.com/file/d/1E1_DHXrUpL4nM3gP4YVO_4MbsBZvERKH/view?usp=sharing)

Abre el enlace en tu navegador o en la app de Google Drive para reproducir el video.

## 🔐 Credenciales de Acceso

```bash
Email: cualquier@email.valido (ej: doctor@hospital.com)
Contraseña: 1234
```

## 📱 Pantallas y Navegación

### 🔑 Login (`app/login.tsx`)

----

### 🏠 Dashboard (`app/(tabs)/index.tsx`)

-----

### 👤 Perfil (`app/(tabs)/perfil.tsx`)

......


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

