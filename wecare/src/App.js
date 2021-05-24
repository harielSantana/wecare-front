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
import RouteError from './Components/Helper/Error404';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
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
            <ProtectedRoute path="/profile/*" element={<Profile />} />
            <Route path="*" element={<RouteError />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
