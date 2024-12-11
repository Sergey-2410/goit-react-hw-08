import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <div>
      <nav className={s.navigation}>
        <NavLink to="/" className={s.nLink}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={s.nLink}>
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
