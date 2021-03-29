import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CuidadorSignIn from './CuidadorSignIn';
import CuidadorSignUp from './CuidadorSignUp';

const Cuidador = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CuidadorSignIn />} />
        <Route path="cadastrar" element={<CuidadorSignUp />} />
      </Routes>
    </div>
  );
};

export default Cuidador;
