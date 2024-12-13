import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <nav className={s.authNav}>
        {isLoggedIn && <> {user.email}</>}

        {!isLoggedIn && (
          <>
            <NavLink to="/register" className={(buildLinkClass, s.nLink)}>
              Register
            </NavLink>
            <NavLink to="/login" className={(buildLinkClass, s.nLink)}>
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </nav>
    </div>
  );
};

export default AuthNav;
