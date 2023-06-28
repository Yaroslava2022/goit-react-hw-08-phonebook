import PropTypes from 'prop-types';
import { addContact, replaceContacts } from 'redux/operations';
import { useState } from "react";
import { TextField, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import css from './ContactForm.module.css';

const ContactForm =() => {
  // state = { name: '', number: '' };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
   setName('');
   setNumber('');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const nameInContact = name.toLowerCase().trim();
    const isInContact = contacts.find(
      (cont) => cont.name.toLowerCase().trim() === nameInContact
    );
    const idInContacts = contacts
    .filter(cont => cont.name.toLowerCase().trim() === nameInContact)
    .map(cont => cont.id);
  console.log(idInContacts[0]);
  const id = idInContacts[0];

  if (isInContact) {
    const needToReplace = window.confirm(
      `${name} is already in contact,  do  you want to  replace ?`,
    );
    if (needToReplace) {
      console.log('patch');
      dispatch(replaceContacts({ id, name, number }));
      reset();
    }
    return;
  }
  console.log('add');
  dispatch(addContact({ name, number }));
  reset();
  };
  return (
    <form onSubmit={handleOnSubmit} className={css.form}>
      <Typography> Name</Typography>
      <TextField
        fullWidth
        autoComplete="off"
        variant="outlined"
        required
        type="name"
        value={name}
        onChange={nameHandler}
        size="small"
        margin="normal"
      />

      <Typography> Number</Typography>
      <TextField
        fullWidth
        autoComplete="off"
        variant="outlined"
        type="tel"
        value={number}
        placeholder="only numbers"
        onChange={numberHandler}
        inputProps={{
          pattern: '[0-9]{9,13}',
          title: 'Номер телефона должен состоять цифр из 9-13 цифр ',
        }}
        required
        size="small"
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        size="small"
        sx={{ width: 130 }}
      >
        Add contact
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { ContactForm };