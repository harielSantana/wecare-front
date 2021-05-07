import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import UsuarioSignIn from './UsuarioSignIn';
import UsuarioSignUp from './UsuarioSignUp';

const Usuario = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="../" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<UsuarioSignIn />} />
        <Route path="cadastrar" element={<UsuarioSignUp />} />
      </Routes>
    </>
  );
};

export default Usuario;
