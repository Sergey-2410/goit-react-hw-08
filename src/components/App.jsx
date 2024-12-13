import '../index.css';
import 'modern-normalize';
// import ContactList from './ContactList/ContactList';
// import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/contacts/operations';
// import { selectIsError, selectIsLoading } from '../redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // return (
  //   <div>
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     <SearchBox />
  //     {isLoading && <h2>Loading...</h2>}
  //     {isError && <h2>Oops something went wrong</h2>}
  //     <ContactList />
  //   </div>
  // );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
export default App;
