import React from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

const App = () => {
  const contacts = [
    {
      id: 1,
      name: "Knight",
      email: "knight22@gmail.com",
    },
    {
      id: 2,
      name: "Sarah",
      email: "sarah2@gmail.com",
    },
    {
      id: 3,
      name: "Jack",
      email: "jackes@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
