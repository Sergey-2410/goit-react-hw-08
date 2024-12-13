import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success('Login successful! Glad to see you again!');
      })
      .catch(() => {
        toast.error('Incorrect login or password!');
      });
    options.resetForm();
  };
  const initialValues = {
    email: '',
    password: '',
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={s.wrapper}>
      <h2>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name="email" placeholder="Enter email"></Field>
          <Field
            name="password"
            type="password"
            placeholder="Enter password"
          ></Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
