import './App.module.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

const Home = lazy(() =>
  import('../pages/Home.js' ),
);
const Register = lazy(() =>
  import('../pages/Register.js'),
);
const Login = lazy(() =>
  import('../pages/Login.js' ),
);
const Contacts = lazy(() =>
  import('../pages/Contacts.js'),
);

export default function App() {
  const dispatch = useDispatch();
  const refreshing = useSelector(selectIsRefreshing);
  console.log(refreshing);

  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
   <div>
      {refreshing ? (
        <div>Loading...</div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
            }