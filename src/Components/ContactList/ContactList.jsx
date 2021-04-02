import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
// import contactsActions from '../../redux/contacts/contacts-action';
import { contactsOperations, contactsSelector } from '../../redux/contacts';
import s from './ContactList.module.css';
import PhoneList from './fade.module.css';

function ContactList({ items, onDeleteNumber }) {
  return (
    <TransitionGroup component="ol" className={s.list}>
      {items.map(item => (
        <CSSTransition key={item.id} timeout={250} classNames={PhoneList}>
          <li key={item.id} className={s.item}>
            <span>
              <b>{item.name}:</b> {item.number}
            </span>
            <button className={s.button} type="button" onClick={() => onDeleteNumber(item.id)}>
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
// };

const mapStateToProps = state => ({
  items: contactsSelector.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteNumber: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);