import React from 'react';
import { CAREGIVER_POST, USER_POST } from './Api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = USER_POST({
        email: username,
        senha: password,
      });
      const response = await fetch(url, options);
      const { token, verificado } = await response.json();
      console.log(token, verificado);
      window.localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function caregiverLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = CAREGIVER_POST({
        email: username,
        senha: password,
      });
      const response = await fetch(url, options);
      const { token, verificado } = await response.json();
      window.localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        caregiverLogin,
        userLogout,
        data,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
