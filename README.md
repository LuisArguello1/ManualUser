# Manual de Usuario - PetFace ID

Manual de usuario completo desarrollado con React + Vite para el sistema **PetFace ID**, una plataforma de gestión veterinaria con Inteligencia Artificial y reconocimiento biométrico facial.

## 🐶 Acerca del Proyecto

Este es el manual de usuario interactivo para **PetFace ID**, un sistema de gestión veterinaria que integra:

- ✅ Autenticación biométrica facial con IA (ArcFace ResNet100)
- 🐕 Gestión completa de mascotas caninas
- 🧠 Predicción con IA (raza, edad, condición corporal)
- 📷 Biometría canina (reconocimiento facial de perros)
- 📱 Códigos QR y carnets digitales
- 🚨 Sistema de mascotas perdidas
- 📊 Dashboard con estadísticas en tiempo real
- 🔔 Sistema de notificaciones

## 🚀 Tecnologías Utilizadas

- **React 19.1.1** - Framework principal
- **Vite 7.1.7** - Build tool y dev server
- **React Router DOM 7.1.1** - Enrutamiento del manual
- **Font Awesome 6.4.2** - Iconos
- **CSS Variables** - Modo oscuro
- **GitHub Pages** - Deployment

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/          # Componentes reutilizables (Card, Alert, Badge, etc.)
│   └── layout/      # Layout principal (Navbar, Sidebar, Footer)
├── pages/           # Páginas del manual
│   ├── Home.jsx
│   ├── Introduccion.jsx
│   ├── Autenticacion.jsx
│   ├── Usuarios.jsx
│   ├── Mascotas.jsx
│   ├── Funcionalidades.jsx
│   ├── Notificaciones.jsx
│   └── Dashboard.jsx
├── data/            # Datos de navegación y configuración
├── App.jsx          # Componente principal con rutas
└── main.jsx         # Punto de entrada
```

## 🌐 Deployment en GitHub Pages

El proyecto está configurado para deployarse automáticamente en GitHub Pages:

```bash
npm run build
npm run deploy
```

## 📖 Contenido del Manual

1. **Introducción** - Qué es PetFace ID y sus características
2. **Autenticación** - Registro, login facial y recuperación de contraseña
3. **Usuarios y Roles** - ADMIN, VET, OWNER y gestión de perfiles
4. **Gestión de Mascotas** - Registro, IA, biometría canina
5. **Funcionalidades** - Escáner, QR, carnets, mascotas perdidas
6. **Notificaciones** - Sistema de alertas in-app y por email
7. **Dashboard** - Paneles de usuario y administrativo

## 🎨 Diseño

- **Modo oscuro exclusivo** con CSS Variables
- **Diseño responsive** para todos los dispositivos
- **Componentes modulares** y reutilizables
- **Navegación intuitiva** con sidebar y breadcrumbs
- **Iconos Font Awesome** para mejor UX

## 👥 Roles del Sistema

- **ADMIN** - Administrador con acceso total
- **VET** - Veterinario con acceso de consulta
- **OWNER** - Propietario de mascotas

## 📄 Licencia

© 2025 PetFace ID. Todos los derechos reservados.

---

