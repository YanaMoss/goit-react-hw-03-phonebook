import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import inputForms from '../data/inputForms.json';
import { AddContactForm } from './AddContactForm';
import { App } from '../App/App';

export class AddContact extends Component {
  constructor() {
    super();
    this.app = new App();
  }

  state = {
    id: '',
    name: '',
    number: '',
  };

  handleChange = ({ name }, value) => {
    this.setState({ [name]: value, id: uuidv4() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset(e);
  };

  reset = e => {
    this.setState({ id: '', name: '', number: '' });
    e.currentTarget.name.value = '';
    e.currentTarget.number.value = '';
  };

  render() {
    return (
      <AddContactForm
        inputForms={inputForms}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
