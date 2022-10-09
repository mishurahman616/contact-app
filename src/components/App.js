import React, {useState, useEffect} from 'react';
import { Routes, Switch, Route}  from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';
import api from './../api/contact';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContact] = useState([]);
  const [searchTerm, setSearchTerm]=useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrieveContacts = async ()=>{
    const response = await api.get("/contacts");
    return response.data;
  }

  const getAllContacts = async ()=>{
    const allContacts = await retrieveContacts();
    if(allContacts) setContact(allContacts);
  }


  useEffect(()=>{
    getAllContacts();
    
  }, []);

  const addContactHandler = async (contact)=>{
    const request = {
      id: uuid(), 
      ...contact,
    }
    const response = await api.post("/contacts", request);
    setContact([...contacts, response.data]);
    alert('Contact Added Successfully');
  }
  const updateContactHandler = async (contact)=>{

    const response = await api.put(`contacts/${contact.id}`, contact);
    setContact(contacts.map(contact=>{
      return contact.id==response.data.id?{...response.data}:contact;
    }));
    alert('Contact Updated Successfully');
  }
  const removeContactHandler= async (id)=>{
    let confirm=  window.confirm("Are you sure to Delete!");
    if(!confirm){
      return;
    }
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact)=>{
      return contact.id !==id;
    });
    setContact(newContactList);
  }

  const searchHandler = (searchTerm)=>{
    setSearchTerm(searchTerm);
    if(searchTerm !==""){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }else{
      setSearchResults(contacts);
      
    }
  }
  //This is changed via new branch to test conflict and merge


  return (
    <div className='ui container'>
              <Header />

      <Routes>
      <Route path="/" element={<ContactList contacts={searchTerm.length<1?contacts:searchResults} getContactId={removeContactHandler} term={searchTerm} searchKeyword ={searchHandler}/>} />
      <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
      <Route path="/contact/:id" element={<ContactDetails />} />
      <Route path="/edit/:id" element={<EditContact updateContactHandler={updateContactHandler}/>} />

        {/*<AddContact addContactHandler={addContactHandler}/> */}
        {/*<ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Routes>
       </div>
  );
}

export default App;
