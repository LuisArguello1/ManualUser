import { Link } from 'react-router-dom';
import { routes, systemInfo } from '../data/navigation';
import './Home.css';

function Home() {
  const features = [
    {
      icon: 'fa-lock',
      title: 'Autenticación Biométrica',
      description: 'Sistema de login con reconocimiento facial usando IA (ArcFace ResNet100) con 99.77% de precisión.',
      color: 'blue'
    },
    {
      icon: 'fa-dog',
      title: 'Gestión de Mascotas',
      description: 'Registro completo de mascotas caninas con límite de 2 por usuario tipo Owner.',
      color: 'purple'
    },
    {
      icon: 'fa-brain',
      title: 'Inteligencia Artificial',
      description: 'Predicción automática de raza, edad y condición corporal usando modelos ResNet-18 y ResNet-50.',
      color: 'success'
    },
    {
      icon: 'fa-fingerprint',
      title: 'Biometría Canina',
      description: 'Reconocimiento facial de mascotas mediante EfficientNet B0 con hasta 92% de precisión.',
      color: 'info'
    },
    {
      icon: 'fa-qrcode',
      title: 'Códigos QR',
      description: 'Generación de códigos QR únicos para identificación rápida de mascotas.',
      color: 'warning'
    },
    {
      icon: 'fa-search',
      title: 'Scanner de Reconocimiento',
      description: 'Identifica mascotas mediante reconocimiento facial.',
      color: 'danger'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <img 
            src={`${import.meta.env.BASE_URL}static/img/logo_primario.png`}
            alt="Logo Sistema Veterinaria" 
            className="hero-logo"
          />
          <h1 className="hero-title">
            Manual de Usuario
          </h1>
          <h2 className="hero-subtitle">
            {systemInfo.name}
          </h2>
          <p className="hero-description">
            {systemInfo.description}
          </p>
          <div className="hero-meta">
            <span className="hero-badge">
              <i className="fas fa-code-branch"></i>
              Versión {systemInfo.version}
            </span>
            <span className="hero-badge">
              <i className="fas fa-calendar-alt"></i>
              {systemInfo.date}
            </span>
          </div>
          <div className="hero-actions">
            <Link to="/introduccion" className="btn btn-primary">
              <i className="fas fa-book-reader"></i>
              Comenzar a Leer
            </Link>
            <a href="#features" className="btn btn-secondary">
              <i className="fas fa-arrow-down"></i>
              Ver Características
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-intro-text">
          <h2>
            <i className="fas fa-star"></i>
            Características Principales del Sistema
          </h2>
          <p>
            PetFace ID es una plataforma completa que integra tecnologías
            de vanguardia para la administración profesional de mascotas caninas.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card feature-${feature.color}`}>
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="quick-nav-section">
        <h2>
          <i className="fas fa-map"></i>
          Navegación Rápida
        </h2>
        <p className="section-subtitle">
          Accede directamente a las secciones del manual
        </p>

        <div className="quick-nav-grid">
          {routes.slice(1).map((route, index) => (
            <Link 
              key={index} 
              to={route.path} 
              className="quick-nav-card"
            >
              <div className="quick-nav-icon">
                <i className={`fas ${route.icon}`}></i>
              </div>
              <div className="quick-nav-content">
                <h3>{route.name}</h3>
                <p>{route.description}</p>
              </div>
              <i className="fas fa-arrow-right quick-nav-arrow"></i>
            </Link>
          ))}
        </div>
      </section>

      {/* System Overview */}
      <section className="overview-section">
        <h2>
          <i className="fas fa-info-circle"></i>
          Resumen del Sistema
        </h2>

        <div className="overview-grid">
          <div className="overview-card">
            <div className="overview-header">
              <i className="fas fa-users"></i>
              <h3>Tipos de Usuarios</h3>
            </div>
            <ul>
              <li><strong>ADMIN:</strong> Administrador con acceso completo al sistema</li>
              <li><strong>VET:</strong> Veterinario con acceso a todas las mascotas</li>
              <li><strong>OWNER:</strong> Dueño de mascota (máximo 2 mascotas)</li>
            </ul>
          </div>

          <div className="overview-card">
            <div className="overview-header">
              <i className="fas fa-cogs"></i>
              <h3>Funcionalidades Clave</h3>
            </div>
            <ul>
              <li>Registro y gestión de usuarios</li>
              <li>Autenticación biométrica facial</li>
              <li>Registro de mascotas con IA</li>
              <li>Biometría canina (5-20 imágenes)</li>
              <li>Scanner de reconocimiento</li>
              <li>Sistema de mascotas perdidas</li>
            </ul>
          </div>

          <div className="overview-card">
            <div className="overview-header">
              <i className="fas fa-brain"></i>
              <h3>Tecnologías IA</h3>
            </div>
            <ul>
              <li><strong>ArcFace ResNet100:</strong> Reconocimiento facial humano</li>
              <li><strong>ResNet-18/50:</strong> Predicción de raza y edad</li>
              <li><strong>EfficientNet B0:</strong> Reconocimiento facial canino</li>
              <li><strong>YuNet:</strong> Detección de rostros</li>
            </ul>
          </div>

          <div className="overview-card">
            <div className="overview-header">
              <i className="fas fa-shield-alt"></i>
              <h3>Seguridad</h3>
            </div>
            <ul>
              <li>Contraseñas hasheadas con PBKDF2</li>
              <li>Rate limiting en endpoints críticos</li>
              <li>Validación de biometría facial</li>
              <li>Tokens CSRF en formularios</li>
              <li>Notificaciones de actividad</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <img 
          src={`${import.meta.env.BASE_URL}static/img/logo_terciario.png`}
          alt="Logo" 
          className="cta-logo"
        />
        <h2>¿Listo para comenzar?</h2>
        <p>
          Explora el manual completo y descubre todas las funcionalidades del sistema
        </p>
        <Link to="/introduccion" className="btn btn-primary btn-lg">
          <i className="fas fa-book-open"></i>
          Ir a la Introducción
        </Link>
      </section>
    </div>
  );
}

export default Home;
