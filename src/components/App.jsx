import { Component } from 'react';
import { Box } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export class App extends Component {
  static propTypes = {};
  state = {
    contacts: [
      { id: 'id-1', name: 'Larry Tucker', number: '+380 123 123 123' },
      { id: 'id-2', name: 'Maia Moss', number: '+380 123 123 123' },
      { id: 'id-3', name: 'Rowan Berg', number: '+380 123 123 123' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your Phonebook!`);
      return
    }
    this.setState(({ contacts }) => ({
      contacts: [ 
        {
          id: nanoid(),
          name,
          number,
        }, ...contacts,
      ],
    }))
  }
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  searchContact = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),);
  }

  render() {
  const fesultFilter = this.searchContact()

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          
        />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.filter} />

        <ContactList
          items={fesultFilter}
          onDelete={this.deleteContact}
        />
      </Box>
    );
  }

}

App.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}.isRequired