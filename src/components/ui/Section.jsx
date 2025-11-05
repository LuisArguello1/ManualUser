import './Section.css';

function Section({ children, id, icon, title, className = '' }) {
  return (
    <section id={id} className={`content-section ${className}`}>
      {title && (
        <div className="section-header">
          {icon && <i className={`fas ${icon} section-icon`}></i>}
          <h2>{title}</h2>
        </div>
      )}
      <div className="section-body">
        {children}
      </div>
    </section>
  );
}

export default Section;
