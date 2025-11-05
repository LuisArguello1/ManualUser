import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img 
            src={`${import.meta.env.BASE_URL}static/img/logo_primario.png`}
            alt="Logo" 
            className="footer-logo"
          />
          <p className="footer-description">
            PetFace ID - Sistema de Gestión Veterinaria con Inteligencia Artificial y reconocimiento biométrico facial.
          </p>
        </div>

        <div className="footer-section">
          <h4>Manual de Usuario</h4>
          <ul className="footer-links">
            <li><a href="#introduccion"><i className="fas fa-angle-right"></i> Introducción</a></li>
            <li><a href="#autenticacion"><i className="fas fa-angle-right"></i> Autenticación</a></li>
            <li><a href="#mascotas"><i className="fas fa-angle-right"></i> Gestión de Mascotas</a></li>
            <li><a href="#funcionalidades"><i className="fas fa-angle-right"></i> Funcionalidades</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Información</h4>
          <ul className="footer-info">
            <li>
              <i className="fas fa-code-branch"></i>
              <span>Versión 1.0</span>
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i>
              <span>Noviembre 2025</span>
            </li>
            <li>
              <i className="fas fa-book"></i>
              <span>Manual Completo</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Tecnologías</h4>
          <div className="footer-tech">
            <span className="tech-badge"><i className="fas fa-brain"></i> IA & ML</span>
            <span className="tech-badge"><i className="fas fa-fingerprint"></i> Biometría</span>
            <span className="tech-badge"><i className="fas fa-qrcode"></i> QR Codes</span>
            <span className="tech-badge"><i className="fas fa-dog"></i> Veterinaria</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} PetFace ID - Sistema de Gestión Veterinaria. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
