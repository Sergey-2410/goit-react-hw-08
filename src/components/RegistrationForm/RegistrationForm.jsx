import { Field, Form, Formik } from 'formik';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}!`, navigate('/contacts'));
      })
      .catch(() => {
        toast.error('Sorry, such an account already exists');
      });
    options.resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <div className={s.wrapper}>
      <h2>Register</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="name"
            placeholder="Enter name"
          ></Field>
          <Field
            className={s.input}
            name="email"
            placeholder="Enter email"
          ></Field>
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter password"
          ></Field>
          <button className={s.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
