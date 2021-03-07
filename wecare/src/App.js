import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CuidadorSingUp from './Components/Cuidador/CuidadorSingUp';
import UserSingUp from './Components/Usuario/UsuarioSingUp';

function App() {
  return (
    <div>
      <h1>API - WeCare</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserSingUp />} />
          <Route path="/cuidador" element={<CuidadorSingUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
