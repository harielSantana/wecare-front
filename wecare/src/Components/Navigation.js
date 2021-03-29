import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <section>
      <h2>Login</h2>
      <NavLink to="logar/cuidador">Cuidador</NavLink>
      {' / '}
      <NavLink to="logar/usuario">Usuário</NavLink>
      <h2>Cadastrar</h2>
      <NavLink to="cadastrar/cuidador">Cuidador</NavLink>
      {' / '}
      <NavLink to="cadastrar/usuario">Usuário</NavLink>
    </section>
  );
};

export default SignIn;
