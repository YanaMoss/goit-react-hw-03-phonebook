import { Component } from 'react';
import { Section } from '../Section/Section';
import { AddContact } from '../AddContact/AddContact';
import { FindContact } from '../Contacts/FindContact';
import { ContactList } from '../Contacts/ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  contactSubmit = newContact => {
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  contactDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getListContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const contactsList = this.getListContact();
    return (
      <Container>
        <h1>Phonebook</h1>
        <Section title={''}>
          <AddContact onSubmit={this.contactSubmit} />
        </Section>
        <Section title={'Contacts'}>
          <FindContact
            title={'Find contacts by name'}
            findContact={this.findContact}
          />
          <ContactList
            contacts={contactsList}
            contactDelete={this.contactDelete}
          />
        </Section>
      </Container>
    );
  }
}
