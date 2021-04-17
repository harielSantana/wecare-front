import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexPagamento from './IndexPag';

const Pagamento = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IndexPagamento />} />
      </Routes>
    </div>
  );
};

export default Pagamento;
