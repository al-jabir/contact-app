import React from 'react';
import user from '../image/user.png';

const ContactCard = ({ person, clickRemove }) => {
  const { id, name, email } = person;
  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: 'purple', marginTop: '7px' }}
        onClick={() => clickRemove()}
      ></i>
    </div>
  );
};

export default ContactCard;
