import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors'; 
import { NavLink } from 'react-router-dom';
import css from './MainNav.module.css';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
// import { Button } from '@mui/base';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import {IconButton} from '@mui/material';

export const MainNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
      >
        <Button type="button"
        color="error"
        variant="contained"
        size="small"
        sx={{ width: 150, backgroundColor: 'white', color: 'brown', gap:"5px"  }}>
        Home
     <HomeIcon sx={{ color: 'brown' }} />
     </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
     <Button type="button"
        color="error"
        variant="contained"
        size="small"
        sx={{ width: 150, backgroundColor: 'white', color: 'brown', gap:"10px" }}>
          Contacts
        <PermContactCalendarIcon sx={{ color: 'brown'}} />
            </Button>
        </NavLink>
      )}
    </>
  );
};