import { NavLink } from 'react-router-dom';
import { routes } from '../../data/navigation';
import { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleSubmenu = (path) => {
    setExpandedItems(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  return (
    <>
      <button 
        className="sidebar-toggle-mobile"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h3>
            <i className="fas fa-book"></i>
            {isOpen && <span>Contenido</span>}
          </h3>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {routes.map(route => (
              <li key={route.path} className="nav-item">
                <NavLink 
                  to={route.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => {
                    if (route.children) {
                      toggleSubmenu(route.path);
                    }
                  }}
                >
                  <i className={`fas ${route.icon}`}></i>
                  {isOpen && (
                    <>
                      <span className="nav-text">{route.name}</span>
                      {route.children && (
                        <i className={`fas fa-chevron-${expandedItems[route.path] ? 'up' : 'down'} nav-chevron`}></i>
                      )}
                    </>
                  )}
                </NavLink>

                {/* Submenu si tiene children */}
                {route.children && isOpen && expandedItems[route.path] && (
                  <ul className="submenu">
                    {route.children.map((child, idx) => (
                      <li key={idx}>
                        <a 
                          href={child.hash}
                          className="submenu-link"
                        >
                          <i className="fas fa-angle-right"></i>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="sidebar-collapse-btn"
          onClick={() => setIsOpen(!isOpen)}
          title={isOpen ? 'Contraer menú' : 'Expandir menú'}
        >
          <i className={`fas fa-chevron-${isOpen ? 'left' : 'right'}`}></i>
        </button>
      </aside>

      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
