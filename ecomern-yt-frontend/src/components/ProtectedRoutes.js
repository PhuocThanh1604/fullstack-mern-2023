import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';

export default function ProtectedRoutes({ children }) {
  const { state } = useContext(Store);
  const { useInfo } = state;
  return useInfo ? children : <Navigate to="/signin" />;
}
