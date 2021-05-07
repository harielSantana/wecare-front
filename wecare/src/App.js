import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Acessar from './Components/SignIn';
import Usuario from './Components/Usuario/Usuario';
import Cuidador from './Components/Cuidador/Cuidador';
import Pagamento from './Components/Pagamento/Pagamento';
import Pesquisa from './Components/Pesquisa/Pesquisa';
import Error404 from './Components/Error404';
import Profile from './Components/Profile/Profile';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="acessar" element={<Acessar />} />
            <Route path="/cuidador/*" element={<Cuidador />} />
            <Route path="/usuario/*" element={<Usuario />} />
            <Route path="/pagamento/*" element={<Pagamento />} />
            <Route path="/pesquisa/*" element={<Pesquisa />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
