import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Error404 from './Components/Error404';
import CuidadorSignIn from './Components/Cuidador/CuidadorSignIn';
import CuidadorSignUp from './Components/Cuidador/CuidadorSignUp';
import UsuarioSignIn from './Components/Usuario/UsuarioSignIn';
import UsuarioSignUp from './Components/Usuario/UsuarioSignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="logar/usuario" element={<UsuarioSignIn />} />
          <Route path="logar/cuidador" element={<CuidadorSignIn />} />
          <Route path="cadastrar/usuario" element={<UsuarioSignUp />} />
          <Route path="cadastrar/cuidador" element={<CuidadorSignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
