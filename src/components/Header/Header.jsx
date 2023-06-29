import { useSelector } from 'react-redux';
import { AppBar, Toolbar,  Box } from '@mui/material';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { MainNav } from '../MainNav/MainNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';


export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static" style={{background: "brown"}}>
    
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          
          <MainNav />
        </Box>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </Toolbar>
    </AppBar>
  );
};