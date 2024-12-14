import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.css';
const LoginPage = () => {
  return (
    <div>
      <Link className={s.link} to="/">
        Go Home
      </Link>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
