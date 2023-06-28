import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { MainNav } from '../MainNav/MainNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from '../MainNav/MainNav.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          >
            <IconButton>
              <ContactPhoneIcon sx={{ color: 'white' }} />
            </IconButton>
          </NavLink>
          <MainNav />
        </Box>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </Toolbar>
    </AppBar>
  );
};