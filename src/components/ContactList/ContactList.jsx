import PropTypes from 'prop-types';
import { List, Contact } from './ContactList.styled';
import { ContactItems } from '../ContactItems/ContactItems';
import { Component } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
export class ContactList extends Component {
    state = {
      contacts:[],
  };

  render() {
    const { items, onDelete } = this.props;
    return (
      <List>
        {items.map(item => (
          
          <Contact key={item.id}><BsFillTelephoneFill/>
            <ContactItems item={item} onDelete={onDelete} />
          </Contact>
        ))}
      </List>
    );
  }
}


ContactList.propTypes = {
  items: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired}.isRequired
