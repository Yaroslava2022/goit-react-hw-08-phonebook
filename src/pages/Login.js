import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Button,
  Container,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import css from '../components/App.module.css';
import { logIn } from 'redux/auth/operations';

import { Header } from 'components/Header/Header';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shownPassword, setShownPassword] = useState(false);
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector(getIsLoggedIn);

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => {
    console.log(shownPassword);
    setShownPassword(!shownPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onLoginSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(logIn({ email, password }));
    ///dispatch    email and password  to  LogIn  operation
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Header />
      <Container
        maxWidth="sm"
        sx={{
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="p" fontWeight="500">
          Login into your account
        </Typography>
        <form onSubmit={onLoginSubmit} className={css.form}>
          <TextField
            // error={email === ''}
            fullWidth
            variant="outlined"
            color= "success"
            required
            type="email"
            value={email}
            placeholder="Enter  your email"
            onChange={onEmailChange}
            size="small"
            margin="normal"
          />

          <TextField
            fullWidth
            variant="outlined"
            color= "success"
            required
            type={shownPassword ? 'text' : 'password'}
            value={password}
            // error={password === ''}
            placeholder="Enter  your password"
            onChange={onPasswordChange}
            size="small"
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {shownPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              pattern: '[0-9] {10}',
              title: 'Пароль  должен состоять из 9 цифр',
            }}
          />
          <Button
          color= "error"
            type="submit"
            variant="contained"
            size="small"
            sx={{ width: 130 }}
          >
            LogIn
          </Button>
        </form>
      
      </Container>
    </>
  );
};

export default Login;