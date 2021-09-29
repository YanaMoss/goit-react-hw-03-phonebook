import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { Form, Input, Label } from './AddContactForm.styled';

export const AddContactForm = ({ inputForms, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      {inputForms.map(({ id, type, name, pattern, title, required }) => (
        <Label htmlFor={id} key={name}>
          <h3>{name}</h3>
          <Input
            id={id}
            type={type}
            name={name}
            pattern={pattern}
            title={title}
            required={required}
            placeholder={name}
            onChange={event => handleChange({ name }, event.target.value)}
          />
        </Label>
      ))}
      <Button title="Add contact" type="submit" />
    </Form>
  );
};

AddContactForm.propTypes = {
  inputForms: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pattern: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      required: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ),
};
