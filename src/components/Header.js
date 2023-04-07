import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="app-header">
    <h1 className="page-title">
      Math
      {' '}
      <span> Magicians</span>
    </h1>
    <ul className="links-list">
      <li className="link-list__item">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="link-list__item">
        <NavLink className="header-link" to="/calculator">
          Calculator
        </NavLink>
      </li>
      <li className="link-list__item">
        <NavLink className="header-link" to="/quotes">
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
