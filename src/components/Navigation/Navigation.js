import { NavLink } from 'react-router-dom';
import css from './../MainNav/MainNav.module.css';
import { Box } from '@mui/material';

export const Navigation = () => {
    return (
      <Box>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          Login
        </NavLink>
      </Box>
    );
  };