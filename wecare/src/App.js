import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingIn from './Components/SingIn';
import SingUpCuidador from './Components/Cuidador/CuidadorSingUp';
import SingUpUser from './Components/Usuario/UsuarioSingUp';
import SingInUser from './Components/Usuario/SingIn';
import SingInCuidador from './Components/Cuidador/SingIn';

function App() {
  return (
    <div>
      <h1>API - WeCare</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/logar" element={<SingIn />} />
          <Route path="/user/login" element={<SingInUser />} />
          <Route path="/user/cadastrar" element={<SingUpUser />} />
          <Route path="/cuidador/login" element={<SingInCuidador />} />
          <Route path="/cuidador/cadastrar" element={<SingUpCuidador />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
