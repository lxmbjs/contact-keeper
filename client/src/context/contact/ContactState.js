import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ryan Lambacher',
        email: 'ryan@gmail.com',
        phone: '330-741-2979',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Jill Lambacher',
        email: 'jill@gmail.com',
        phone: '330-741-2979',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Jeb Lambacher',
        email: 'jeb@gmail.com',
        phone: '330-741-2979',
        type: 'personal'
      },
      {
        id: 4,
        name: 'Leeroy Lambacher',
        email: 'leeroy@gmail.com',
        phone: '330-741-2979',
        type: 'professional'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set Current
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update
  const updateCurrent = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Filter
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateCurrent,
        filterContacts,
        clearFilter
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
