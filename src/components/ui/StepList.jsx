import './StepList.css';

function StepList({ children, steps }) {
  if (steps) {
    return (
      <div className="step-list">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-number">
              <i className={`fas ${step.icon || 'fa-check'}`}></i>
              <span>{index + 1}</span>
            </div>
            <div className="step-content">
              <h4>{step.title}</h4>
              {step.description && <p>{step.description}</p>}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div className="step-list">{children}</div>;
}

export function Step({ number, icon, children }) {
  return (
    <div className="step-item">
      <div className="step-number">
        {icon && <i className={`fas ${icon}`}></i>}
        <span>{number}</span>
      </div>
      <div className="step-content">
        {children}
      </div>
    </div>
  );
}

export default StepList;
