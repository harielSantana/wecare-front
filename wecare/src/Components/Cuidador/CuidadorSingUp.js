import React from 'react';
import styles from './CuidadorSingUp.module.css';

/*
  email
  nome_cuidador
  cpf_cuidador
  id_endereco
  telefone_cuidador
  valor_hora
  resumo_profissional
*/

const CuidadorSingUp = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [valorHora, setValorHora] = React.useState('');
  const [resumo, setResumo] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    //Coloque a rota da API aqui pra dar o fetch
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Cuidador - Form</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={({ target }) => setSenha(target.value)}
        />
        <input
          type="text"
          placeholder="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <input
          type="text"
          placeholder="cpf"
          value={cpf}
          onChange={({ target }) => setCpf(target.value)}
        />
        <input
          type="text"
          placeholder="endereço"
          value={endereco}
          onChange={({ target }) => setEndereco(target.value)}
        />
        <input
          type="text"
          placeholder="telefone"
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
        />
        <input
          type="text"
          placeholder="valor da Hora"
          value={valorHora}
          onChange={({ target }) => setValorHora(target.value)}
        />
        <textarea
          placeholder="Coloque aqui um resumo de suas habilidades"
          value={resumo}
          onChange={({ target }) => setResumo(target.value)}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default CuidadorSingUp;
