import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CuidadorSignIn from './CuidadorSignIn';
import CuidadorSignUp from './CuidadorSignUp';
import CheckoutForm from '../Pagamento/FormStripe/CheckoutForm';

const Cuidador = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CuidadorSignIn />} />
        <Route path="cadastrar" element={<CuidadorSignUp />} />
        <Route path="pagamento" element={<CheckoutForm />} />
      </Routes>
    </div>
  );
};

export default Cuidador;
