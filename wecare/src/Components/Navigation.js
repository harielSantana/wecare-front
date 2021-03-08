import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <section>
      <NavLink to="logar/cuidador">Cuidador</NavLink>
      <NavLink to="logar/usuario">Usuário</NavLink>
    </section>
  );
};

export default SignIn;
