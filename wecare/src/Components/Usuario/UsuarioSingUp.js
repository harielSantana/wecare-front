import React from 'react';
import styles from './UsuarioSingUp.module.css';

const UserSingUp = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [uf, setUf] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    //Coloque a rota da API aqui pra dar o fetch
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Cuidador - Form</h2>
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
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default UserSingUp;
