import PropTypes from 'prop-types';
// import css from './ContactItem.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import { Button, Typography, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContacts = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography>{`${name}:`}</Typography>
      <Typography sx={{ ml: '15px' }}>{number}</Typography>
      <Button
      color= "error"
        endIcon={<DeleteIcon />}
        onClick={() => {
          deleteContacts(id);
        }}
        variant="contained"
        size="small"
        sx={{ width: 90, ml: '15px' }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
export { ContactItem };