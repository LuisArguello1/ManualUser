// Estructura de navegación del manual
export const routes = [
  {
    path: '/',
    name: 'Inicio',
    icon: 'fa-home',
    description: 'Página principal del manual'
  },
  {
    path: '/introduccion',
    name: 'Introducción',
    icon: 'fa-info-circle',
    description: 'Introducción al Sistema de Gestión Veterinaria'
  },
  {
    path: '/autenticacion',
    name: 'Autenticación',
    icon: 'fa-lock',
    description: 'Registro, Login y Biometría Facial',
    children: [
      { hash: '#registro', label: 'Registro de Usuarios' },
      { hash: '#biometria-facial-registro', label: 'Registro de Biometría Facial' },
      { hash: '#login-tradicional', label: 'Login con Contraseña' },
      { hash: '#login-facial', label: 'Login con Reconocimiento Facial' },
      { hash: '#recuperacion', label: 'Recuperación de Contraseña' }
    ]
  },
  {
    path: '/usuarios',
    name: 'Usuarios y Roles',
    icon: 'fa-users',
    description: 'Tipos de usuarios, perfiles y roles',
    children: [
      { hash: '#tipos-roles', label: 'Tipos de Usuarios (Admin, Vet, Owner)' },
      { hash: '#perfil', label: 'Gestión de Perfil' },
      { hash: '#cambiar-password', label: 'Cambiar Contraseña' },
      { hash: '#gestionar-biometria', label: 'Gestionar Biometría Facial' }
    ]
  },
  {
    path: '/mascotas',
    name: 'Gestión de Mascotas',
    icon: 'fa-dog',
    description: 'Registro, edición y administración de mascotas',
    children: [
      { hash: '#registro', label: 'Registrar Nueva Mascota' },
      { hash: '#limite', label: 'Límite de Mascotas' },
      { hash: '#prediccion-ia', label: 'Predicción con IA' },
      { hash: '#biometria-canina', label: 'Biometría Canina' },
      { hash: '#lista', label: 'Lista de Mascotas' },
      { hash: '#detalle', label: 'Detalle de Mascota' },
      { hash: '#editar', label: 'Editar Mascota' }
    ]
  },
  {
    path: '/funcionalidades',
    name: 'Funcionalidades',
    icon: 'fa-cogs',
    description: 'Scanner, QR, Carnets y Mascotas Perdidas',
    children: [
      { hash: '#scanner', label: 'Escáner de Reconocimiento' },
      { hash: '#codigos-qr', label: 'Generación de Códigos QR' },
      { hash: '#carnets', label: 'Generación de Carnets' },
      { hash: '#mascotas-perdidas', label: 'Sistema de Mascotas Perdidas' }
    ]
  },
  {
    path: '/notificaciones',
    name: 'Notificaciones',
    icon: 'fa-bell',
    description: 'Sistema de notificaciones in-app y por email'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'fa-chart-line',
    description: 'Dashboard de usuario y administrador'
  }
];

// Información adicional del sistema
export const systemInfo = {
  name: 'PetFace ID',
  version: '1.0',
  date: 'Noviembre 2025',
  description: 'Sistema de Gestión Veterinaria con Reconocimiento Biométrico Facial e Inteligencia Artificial'
};
