import { Link } from 'react-router-dom';
import './BreadCrumbs.css';

function BreadCrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <i className="fas fa-chevron-right breadcrumb-separator"></i>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumbs;
