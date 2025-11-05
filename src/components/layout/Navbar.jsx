import { Link } from 'react-router-dom';
import { systemInfo } from '../../data/navigation';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img 
            src={`${import.meta.env.BASE_URL}static/img/logo_primario.png`}
            alt="Logo Sistema Veterinaria" 
            className="navbar-logo"
          />
          <div className="navbar-title">
            <span className="navbar-main-title">Manual de Usuario</span>
            <span className="navbar-subtitle">{systemInfo.name}</span>
          </div>
        </Link>

        <div className="navbar-info">
          <span className="navbar-version">
            <i className="fas fa-code-branch"></i>
            Versión {systemInfo.version}
          </span>
          <span className="navbar-date">
            <i className="fas fa-calendar-alt"></i>
            {systemInfo.date}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
