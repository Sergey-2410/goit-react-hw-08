import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
const AuthNav = () => {
  return (
    <div>
      <nav className={s.authNav}>
        <NavLink to="/register" className={s.nLink}>
          Register
        </NavLink>
        <NavLink to="/login" className={s.nLink}>
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
