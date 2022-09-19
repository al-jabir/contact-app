import React, { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const onContactHanlde = (contact) => {
    setContacts([...contacts, contact]);
    console.log(contact);
  };

  const removeContactHandle = (id) => {
    const newContactList = contacts.filter((li) => li.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact contactHandler={onContactHanlde} />
      <ContactList contacts={contacts} getContactId={removeContactHandle} />
    </div>
  );
};

export default App;
