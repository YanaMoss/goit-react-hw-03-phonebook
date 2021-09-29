import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../AddContact/AddContactForm.styled';

export const FindContact = ({ title, findContact }) => (
  <div>
    <h3>{title}</h3>
    <Input type="text" onChange={event => findContact(event)} />
  </div>
);

FindContact.propTypes = {
  title: PropTypes.string.isRequired,
};
