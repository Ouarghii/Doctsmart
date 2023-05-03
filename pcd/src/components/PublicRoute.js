import React from 'react';
import { useHistory } from 'react-router-dom';

export default function PublicRoute({ children }) {
  const history = useHistory();

  if (localStorage.getItem('token')) {
    history.push('/doctorapp');
    return null;
  } else {
    return children;
  }
}