import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';
const RegistrationPage = () => {
  return (
    <div>
      <Link className={s.link} to="/">
        Go Home
      </Link>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
