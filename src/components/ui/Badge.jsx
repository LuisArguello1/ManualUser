import './Badge.css';

function Badge({ children, variant = 'default', icon }) {
  return (
    <span className={`badge badge-${variant}`}>
      {icon && <i className={`fas ${icon}`}></i>}
      {children}
    </span>
  );
}

export default Badge;
