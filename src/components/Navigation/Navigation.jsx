import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav className={s.navigation}>
        <NavLink to="/" className={(buildLinkClass, s.nLink)}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={(buildLinkClass, s.nLink)}>
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
