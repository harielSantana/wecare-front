import React from 'react';
import { USER_GET } from './Api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser() {
    const { url } = USER_GET();
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }
};
