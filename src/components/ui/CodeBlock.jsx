import './CodeBlock.css';

function CodeBlock({ children, language = 'text' }) {
  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-language">{language}</span>
        <button 
          className="code-copy-btn"
          onClick={() => {
            navigator.clipboard.writeText(children);
          }}
          title="Copiar código"
        >
          <i className="fas fa-copy"></i>
        </button>
      </div>
      <pre className="code-block">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
