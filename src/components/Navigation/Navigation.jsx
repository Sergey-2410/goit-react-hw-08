import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={s.navigation}>
        <NavLink to="/" className={(buildLinkClass, s.nLink)}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={(buildLinkClass, s.nLink)}>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
