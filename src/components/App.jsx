import '../index.css';
import 'modern-normalize';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsError, selectIsLoading } from '../redux/contacts/selectors';
// import { Route, Routes } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Oops something went wrong</h2>}
      <ContactList />
    </div>
  );
  // <Routes>
  //   <Route></Route>
  // </Routes>;
};
export default App;
