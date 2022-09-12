import React, {useState, useEffect} from 'react';
import { Routes, Switch, Route}  from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import api from './../api/contact';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const retrieveContacts = async ()=>{
    const response = await api.get("/contacts");
    return response.data;
  }

  const getAllContacts = async ()=>{
    const allContacts = await retrieveContacts();
    if(allContacts) setContact(allContacts);
    return allContacts;
  }
  const allContacts = getAllContacts();
  const [contacts, setContact] = useState([allContacts]);


  const addContactHandler = (contact)=>{
    setContact([...contacts, {id:uuid(), ...contact}]);
    alert('Contact Added Successfully');
  }
  const removeContactHandler=(id)=>{
    let confirm=  window.confirm("Are you sure to Delete!");
    if(!confirm){
      return;
    }
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
      <Route path="/contact/:id" element={<ContactDetails />} />

        {/*<AddContact addContactHandler={addContactHandler}/> */}
        {/*<ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Routes>
       </div>
  );
}

export default App;
