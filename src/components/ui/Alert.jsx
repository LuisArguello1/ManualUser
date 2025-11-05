import './Alert.css';

function Alert({ children, type = 'info', icon }) {
  const icons = {
    info: 'fa-info-circle',
    success: 'fa-check-circle',
    warning: 'fa-exclamation-triangle',
    danger: 'fa-times-circle'
  };

  const alertIcon = icon || icons[type];

  return (
    <div className={`alert alert-${type}`}>
      <i className={`fas ${alertIcon} alert-icon`}></i>
      <div className="alert-content">
        {children}
      </div>
    </div>
  );
}

export default Alert;
