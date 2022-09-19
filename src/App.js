import React, { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const onContactHanlde = () => {
    setContacts(contacts);
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact contactHandler={onContactHanlde} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
