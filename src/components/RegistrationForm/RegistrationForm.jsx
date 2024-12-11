import { Field, Form, Formik } from 'formik';
import s from './RegistrationForm.module.css';
const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = () => {};
  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name="name" placeholder="Enter name"></Field>
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

export default RegistrationForm;
