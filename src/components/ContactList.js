import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const deleteItem = (id) => {
    getContactId(id);
  };
  return (
    <div className="ui celled list">
      {contacts.map((person, inx) => {
        return (
          <ContactCard person={person} key={inx} clickRemove={deleteItem} />
        );
      })}
    </div>
  );
};

export default ContactList;
