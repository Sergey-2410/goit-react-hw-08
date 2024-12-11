import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import s from './AppBar.module.css';
const AppBar = () => {
  return (
    <div className={s.navBar}>
      <Navigation />
      <AuthNav />
    </div>
  );
};

export default AppBar;
