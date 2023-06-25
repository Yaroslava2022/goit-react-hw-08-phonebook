
// import { useState, useEffect } from "react";
// import './App.module.css';
// import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export default function App() {

  
    return (
      <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
      </>
    );
  }