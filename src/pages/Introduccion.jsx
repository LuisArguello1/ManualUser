import BreadCrumbs from '../components/ui/BreadCrumbs';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Alert from '../components/ui/Alert';
import Badge from '../components/ui/Badge';
import './PageStyles.css';

function Introduccion() {
  return (
    <div className="page-container">
      <BreadCrumbs items={['Introducción']} />
      
      <div className="page-header">
        <i className="fas fa-info-circle page-icon"></i>
        <h1>Introducción al Sistema</h1>
        <p className="page-description">
          Conoce PetFace ID: una plataforma integral que combina tecnología de vanguardia con la gestión profesional de mascotas caninas.
        </p>
      </div>

      <div className="page-content">
        <Section id="que-es" title="¿Qué es PetFace ID?" icon="fa-question-circle">
          <p className="section-intro">
            <strong>PetFace ID</strong> es una plataforma web integral diseñada para revolucionar la manera en que se administran y cuidan las mascotas caninas, combinando tecnologías de Inteligencia Artificial y reconocimiento biométrico.
          </p>

          <Card variant="info">
            <h4><i className="fas fa-lightbulb"></i> Propósito Principal</h4>
            <p>
              Proporcionar una solución completa para la <strong>identificación</strong>, <strong>registro</strong> y <strong>seguimiento</strong> de mascotas, 
              facilitando la comunicación entre dueños y veterinarios, y ayudando en la recuperación de mascotas perdidas mediante tecnología avanzada.
            </p>
          </Card>

          <h3>Componentes Principales del Sistema</h3>
          <div className="feature-boxes">
            <div className="feature-box">
              <i className="fas fa-users feature-box-icon blue"></i>
              <h4>Gestión de Usuarios</h4>
              <p>Sistema con tres roles diferenciados: Admin, Veterinario y Dueño de mascota</p>
            </div>
            <div className="feature-box">
              <i className="fas fa-fingerprint feature-box-icon purple"></i>
              <h4>Reconocimiento Biométrico</h4>
              <p>Autenticación facial para usuarios y mascotas usando IA de última generación</p>
            </div>
            <div className="feature-box">
              <i className="fas fa-dog feature-box-icon success"></i>
              <h4>Registro de Mascotas</h4>
              <p>Administración completa de mascotas caninas con límite de 2 por usuario Owner</p>
            </div>
            <div className="feature-box">
              <i className="fas fa-brain feature-box-icon warning"></i>
              <h4>Predicción con IA</h4>
              <p>Detección automática de raza, edad y condición corporal mediante Machine Learning</p>
            </div>
            <div className="feature-box">
              <i className="fas fa-qrcode feature-box-icon info"></i>
              <h4>Códigos QR y Carnets</h4>
              <p>Generación de identificación única para cada mascota</p>
            </div>
            <div className="feature-box">
              <i className="fas fa-search feature-box-icon danger"></i>
              <h4>Sistema de Búsqueda</h4>
              <p>Scanner de reconocimiento y alertas de mascotas perdidas</p>
            </div>
          </div>
        </Section>

        <Section id="capacidades" title="Capacidades Principales" icon="fa-star">
          <div className="capabilities-grid">
            <Card>
              <h4><i className="fas fa-lock"></i> Autenticación y Seguridad</h4>
              <ul>
                <li><Badge variant="primary" icon="fa-user-plus" /> Registro de usuarios con validaciones completas</li>
                <li><Badge variant="primary" icon="fa-sign-in-alt" /> Login tradicional con email y contraseña</li>
                <li><Badge variant="primary" icon="fa-camera" /> Login con reconocimiento facial (ArcFace ResNet100)</li>
                <li><Badge variant="primary" icon="fa-fingerprint" /> Biometría facial con 99.77% de precisión</li>
                <li><Badge variant="primary" icon="fa-shield-alt" /> Contraseñas hasheadas con PBKDF2</li>
                <li><Badge variant="primary" icon="fa-lock" /> Rate limiting en endpoints críticos</li>
              </ul>
            </Card>

            <Card>
              <h4><i className="fas fa-dog"></i> Gestión de Mascotas</h4>
              <ul>
                <li><Badge variant="success" icon="fa-plus" /> Registro de hasta 2 mascotas por Owner</li>
                <li><Badge variant="success" icon="fa-edit" /> Edición completa de información</li>
                <li><Badge variant="success" icon="fa-brain" /> Predicción automática de raza, edad y condición</li>
                <li><Badge variant="success" icon="fa-camera" /> Biometría canina (5-20 imágenes)</li>
                <li><Badge variant="success" icon="fa-qrcode" /> Generación de códigos QR únicos</li>
                <li><Badge variant="success" icon="fa-id-card" /> Creación de carnets digitales</li>
              </ul>
            </Card>

            <Card>
              <h4><i className="fas fa-brain"></i> Inteligencia Artificial</h4>
              <ul>
                <li><Badge variant="warning" icon="fa-robot" /> ResNet-18: Predicción multi-tarea (11.7M parámetros)</li>
                <li><Badge variant="warning" icon="fa-robot" /> ResNet-50: Condición corporal (25.6M parámetros)</li>
                <li><Badge variant="warning" icon="fa-robot" /> EfficientNet B0: Reconocimiento canino (5.3M parámetros)</li>
                <li><Badge variant="warning" icon="fa-robot" /> ArcFace ResNet100: Reconocimiento facial humano</li>
                <li><Badge variant="warning" icon="fa-robot" /> YuNet: Detección de rostros</li>
                <li><Badge variant="warning" icon="fa-chart-line" /> Precisión del 85-99% según el modelo</li>
              </ul>
            </Card>

            <Card>
              <h4><i className="fas fa-search-location"></i> Mascotas Perdidas</h4>
              <ul>
                <li><Badge variant="danger" icon="fa-exclamation-triangle" /> Reportar mascota como perdida</li>
                <li><Badge variant="danger" icon="fa-bell" /> Notificaciones a todos los usuarios</li>
                <li><Badge variant="danger" icon="fa-envelope" /> Alertas por email con foto y datos</li>
                <li><Badge variant="danger" icon="fa-map-marker-alt" /> Geolocalización del encuentro</li>
                <li><Badge variant="danger" icon="fa-camera" /> Scanner para identificación rápida</li>
                <li><Badge variant="danger" icon="fa-qrcode" /> Escaneo de QR para información</li>
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="tecnologias" title="Tecnologías Utilizadas" icon="fa-cogs">
          <p className="section-intro">
            El sistema está construido con tecnologías modernas y robustas que garantizan rendimiento, seguridad y escalabilidad.
          </p>

          <h3>Stack Tecnológico</h3>
          <div className="tech-stack">
            <div className="tech-category">
              <h4><i className="fas fa-server"></i> Backend</h4>
              <div className="tech-badges">
                <span className="tech-badge">Django (Python)</span>
                <span className="tech-badge">PostgreSQL</span>
              </div>
            </div>

            <div className="tech-category">
              <h4><i className="fas fa-desktop"></i> Frontend</h4>
              <div className="tech-badges">
                <span className="tech-badge">React</span>
                <span className="tech-badge">TypeScript/JavaScript</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">Responsive Design</span>
              </div>
            </div>

            <div className="tech-category">
              <h4><i className="fas fa-brain"></i> Inteligencia Artificial</h4>
              <div className="tech-badges">
                <span className="tech-badge">PyTorch</span>
                <span className="tech-badge">OpenCV</span>
                <span className="tech-badge">ONNX Runtime</span>
                <span className="tech-badge">NumPy</span>
                <span className="tech-badge">Scikit-learn</span>
              </div>
            </div>

            <div className="tech-category">
              <h4><i className="fas fa-shield-alt"></i> Seguridad</h4>
              <div className="tech-badges">
                <span className="tech-badge">PBKDF2 Hashing</span>
                <span className="tech-badge">CSRF Protection</span>
                <span className="tech-badge">Rate Limiting</span>
                <span className="tech-badge">JWT Tokens</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="usuarios-objetivo" title="Usuarios Objetivo" icon="fa-users">
          <p className="section-intro">
            El sistema está diseñado para tres tipos de usuarios con roles y permisos específicos.
          </p>

          <div className="user-roles-grid">
            <Card variant="info">
              <div className="role-header">
                <i className="fas fa-user-shield role-icon"></i>
                <h3>ADMIN (Administrador)</h3>
              </div>
              <p><strong>Acceso completo al sistema</strong></p>
              <ul>
                <li>Dashboard administrativo con estadísticas globales</li>
                <li>Gestión de todos los usuarios</li>
                <li>Acceso a todas las mascotas</li>
                <li>Configuración del sistema</li>
                <li>Reportes y métricas avanzadas</li>
              </ul>
            </Card>

            <Card variant="success">
              <div className="role-header">
                <i className="fas fa-user-md role-icon"></i>
                <h3>VET (Veterinario)</h3>
              </div>
              <p><strong>Acceso profesional veterinario</strong></p>
              <ul>
                <li>Ver todas las mascotas del sistema</li>
                <li>Acceder a historiales médicos</li>
                <li>Usar scanner de reconocimiento</li>
                <li>Registrar hasta 2 mascotas propias</li>
                <li>Campos especiales: Especialización y Licencia</li>
              </ul>
            </Card>

            <Card variant="warning">
              <div className="role-header">
                <i className="fas fa-user role-icon"></i>
                <h3>OWNER (Dueño)</h3>
              </div>
              <p><strong>Rol predeterminado al registrarse</strong></p>
              <ul>
                <li>Registrar hasta <strong>2 mascotas máximo</strong></li>
                <li>Gestión completa de sus mascotas</li>
                <li>Reportar mascotas como perdidas</li>
                <li>Generar QR y carnets</li>
                <li>Usar scanner para identificar mascotas</li>
              </ul>
            </Card>
          </div>

          <Alert type="warning">
            <strong>Límite importante:</strong> Los usuarios tipo OWNER tienen un límite estricto de 2 mascotas. 
            Este límite asegura un uso responsable del sistema y facilita la gestión eficiente.
          </Alert>
        </Section>

        <Section id="beneficios" title="Beneficios del Sistema" icon="fa-check-circle">
          <div className="benefits-list">
            <div className="benefit-item">
              <i className="fas fa-check-circle benefit-icon"></i>
              <div>
                <h4>Identificación Rápida y Precisa</h4>
                <p>El reconocimiento facial canino permite identificar mascotas en segundos, incluso sin collar o placa.</p>
              </div>
            </div>

            <div className="benefit-item">
              <i className="fas fa-check-circle benefit-icon"></i>
              <div>
                <h4>Recuperación de Mascotas Perdidas</h4>
                <p>Sistema de alertas automáticas notifica a todos los usuarios cuando una mascota se pierde, aumentando las posibilidades de recuperación.</p>
              </div>
            </div>

            <div className="benefit-item">
              <i className="fas fa-check-circle benefit-icon"></i>
              <div>
                <h4>Información Accesible 24/7</h4>
                <p>Los códigos QR permiten acceder a la información de contacto del dueño en cualquier momento y lugar.</p>
              </div>
            </div>

            <div className="benefit-item">
              <i className="fas fa-check-circle benefit-icon"></i>
              <div>
                <h4>Predicción Automática con IA</h4>
                <p>La inteligencia artificial ayuda a identificar características de la mascota automáticamente al registrarla.</p>
              </div>
            </div>

            <div className="benefit-item">
              <i className="fas fa-check-circle benefit-icon"></i>
              <div>
                <h4>Seguridad y Privacidad</h4>
                <p>Sistema robusto de autenticación con múltiples capas de seguridad protege la información sensible.</p>
              </div>
            </div>

            <div className="benefit-item">
              <i className="fas fa-check-circle benefit-icon"></i>
              <div>
                <h4>Fácil de Usar</h4>
                <p>Interfaz intuitiva diseñada para ser utilizada por personas de cualquier edad y nivel técnico.</p>
              </div>
            </div>
          </div>
        </Section>

        <Alert type="info">
          <strong>¿Listo para comenzar?</strong> Continúa con la sección de <a href="/manualUser/autenticacion">Autenticación</a> para 
          aprender cómo registrarte e iniciar sesión en el sistema.
        </Alert>
      </div>
    </div>
  );
}

export default Introduccion;
