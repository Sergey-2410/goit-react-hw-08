import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';
const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav className={s.authNav}>
        <NavLink to="/register" className={(buildLinkClass, s.nLink)}>
          Register
        </NavLink>
        <NavLink to="/login" className={(buildLinkClass, s.nLink)}>
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
