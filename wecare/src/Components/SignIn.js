import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleSubmit(event) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('senha', senha);

    event.preventDefault();
    fetch('', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) navigate('/');
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          name="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          value={senha}
          name="senha"
          onChange={({ target }) => setSenha(target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default SignIn;
