import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, replaceContacts } from './operations';
// import { v4 as uuidv4 } from "uuid";

const initialState = {  
  items: [],
  isLoading: false,
  error: null,
}


const handlePending = state => {
  state.isLoading = true
  
}

const handleRejected = (state, {payload}) => {
  
    state.isLoading = false
    state.error = payload
  }


const handleFetchContactsSuccess = (state, {payload}) => {
  
    state.isLoading =false
    state.error= null
    state.items = payload 
};

const handleAddContactSuccess = (state, {payload}) => {

    state.isLoading = false
    state.error= null
    state.items= [payload, ...state.items]
  }


const handleDeleteContactSuccess = (state, {payload}) => {
  
    state.isLoading =false
    state.error = null
    state.items = state.items.filter(item => item.id !== payload.id)
  
}
const handleReplaceContactSuccess = (state, action) => {
  return [...state].map(contact => {
    console.log(action.payload);
    if (contact.id === action.payload.id) {
      return action.payload;
    }
    return contact;
  });
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled]: handleFetchContactsSuccess,
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled]: handleAddContactSuccess,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled]: handleDeleteContactSuccess,
    [replaceContacts.pending]: handlePending,
    [replaceContacts.rejected]: handleRejected,
    [replaceContacts.fulfilled]: handleReplaceContactSuccess,
  },
});

export const contactsReducer = contactsSlice.reducer;