import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
const LoginForm = () => {
  const handleSubmit = () => {};
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <div className={s.wrapper}>
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
