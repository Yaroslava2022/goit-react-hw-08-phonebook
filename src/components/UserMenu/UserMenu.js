import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Box } from '@mui/material';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const name = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <Box component="section" sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ mr: '10px' }}>Welcome, {name}!</Typography>
      <Button
        type="button"
        onClick={logOutHandler}
        color="error"
        variant="contained"
        size="small"
        sx={{ width: 150, backgroundColor: 'white', color: 'brown', gap:"5px"  }}
      >
        LogOut 
        <LogoutIcon sx={{ color: 'brown' }} />
      </Button>
    </Box>
  );
};