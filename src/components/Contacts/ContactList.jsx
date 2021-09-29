import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { List } from './Contacts.styled';

export const ContactList = props => {
  const { contacts, contactDelete } = props;
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          name={name}
          number={number}
          contactDelete={contactDelete}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.func,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};
