import React, {useState, useEffect} from 'react';
import { Routes, Switch, Route}  from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
const [contacts, setContact] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

const addContactHandler = (contact)=>{
  setContact([...contacts, {id:uuid(), ...contact}]);
  alert('Contact Added Successfully');
}
const removeContactHandler=(id)=>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id !==id;
  });
  setContact(newContactList);
}

  useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  


  return (
    <div className='ui container'>
              <Header />

      <Routes>
      <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
      <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />

        {/*<AddContact addContactHandler={addContactHandler}/> */}
        {/*<ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Routes>
       </div>
  );
}

export default App;
