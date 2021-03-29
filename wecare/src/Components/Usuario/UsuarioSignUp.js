import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UsuarioSignUp.module.css';

const UserSingUp = () => {
  const navigate = useNavigate();
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [uf, setUf] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[0].value);

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('cep', cep);
    formData.append('numero', numero);
    formData.append('uf', uf);
    formData.append('senha', senha);

    fetch('https://wecareapi.azurewebsites.net/api/signup', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) navigate('/');
    });
  }

  return (
    <div className={styles.divCentral}>
      <div className={styles.headerLogin}>
        <h1>WeCare</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </div>
      <div className={styles.cadastroContainer}>
        <form className={styles.cadastroForm} onSubmit={handleSubmit}>
          <h2>Cadastro de Cuidador Wecare</h2>
          <input
            type="text"
            placeholder="nome"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            type="text"
            placeholder="cep"
            name="cep"
            value={cep}
            onChange={({ target }) => setCep(target.value)}
          />
          <input
            type="text"
            placeholder="numero"
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
          />
          <input
            type="text"
            placeholder="UF"
            value={uf}
            onChange={({ target }) => setUf(target.value)}
          />
          <input
            type="text"
            placeholder="senha"
            value={senha}
            onChange={({ target }) => setSenha(target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default UserSingUp;
