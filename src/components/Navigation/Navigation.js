import { NavLink } from 'react-router-dom';
import css from './../MainNav/MainNav.module.css';
import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const Navigation = () => {
    return (
      <Box>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          <Button
           type="button"
           color="error"
           variant="contained"
           size="small"
           sx={{ width: 150, backgroundColor: 'white', color: 'brown', gap:"5px"  }}>

          Register
          <HowToRegIcon sx={{ color: 'brown' }} />
          </Button>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          <Button 
          type="button"
          color="error"
          variant="contained"
          size="small"
          sx={{ width: 150, backgroundColor: 'white', color: 'brown', gap:"5px"  }}
      >
          Login
          <LoginIcon sx={{ color: 'brown' }} />
          </Button>
        </NavLink>
      </Box>
    );
  };