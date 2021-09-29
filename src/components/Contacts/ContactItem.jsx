import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { ItemListContact, ItemContact } from './Contacts.styled';
export const ContactItem = props => {
  const { id, name, number, contactDelete } = props;
  return (
    <ItemListContact key={id}>
      <ItemContact>{name}:</ItemContact>
      <ItemContact>{number}</ItemContact>
      <Button
        title={'Delete'}
        type="button"
        onClick={() => contactDelete(id)}
      />
    </ItemListContact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
