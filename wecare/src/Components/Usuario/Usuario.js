import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsuarioSignIn from './UsuarioSignIn';
import UsuarioSignUp from './UsuarioSignUp';

const Usuario = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UsuarioSignIn />} />
        <Route path="cadastrar" element={<UsuarioSignUp />} />
      </Routes>
    </div>
  );
};

export default Usuario;
