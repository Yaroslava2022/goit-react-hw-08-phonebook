import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const redirect = isLoggedIn && restricted;
  return redirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;