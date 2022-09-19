import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  return (
    <div className="ui celled list">
      {contacts.map((person, inx) => {
        return <ContactCard person={person} key={inx} />;
      })}
    </div>
  );
};

export default ContactList;
