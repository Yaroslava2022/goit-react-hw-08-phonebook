import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors'; 
import { NavLink } from 'react-router-dom';
import css from './MainNav.module.css';

export const MainNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.activeLink : css.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
        >
          Contacts
        </NavLink>
      )}
    </>
  );
};