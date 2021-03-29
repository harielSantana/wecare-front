import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cuidador from './Components/Cuidador/Cuidador';
import Usuario from './Components/Usuario/Usuario';
import Error404 from './Components/Error404';
import Acessar from './Components/SignIn';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="acessar" element={<Acessar />} />
          <Route path="/cuidador/*" element={<Cuidador />} />
          <Route path="/usuario/*" element={<Usuario />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
