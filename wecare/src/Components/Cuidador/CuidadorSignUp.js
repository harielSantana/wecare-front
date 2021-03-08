import React from 'react';
import styles from './CuidadorSignUp.module.css';
import { useNavigate } from 'react-router-dom';

const CuidadorSingUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [uf, setUf] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [valorHora, setValorHora] = React.useState('');
  const [resumo, setResumo] = React.useState('');

  function handleSubmit(event) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('senha', senha);
    formData.append('nome', nome);
    formData.append('cpf', cpf);
    formData.append('cep', cep);
    formData.append('numero', numero);
    formData.append('uf', uf);
    formData.append('telefone', telefone);
    formData.append('valorHora', valorHora);
    formData.append('resumo', resumo);

    event.preventDefault();
    fetch('https://wecareapi.azurewebsites.net/api/signup/caregiver', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) navigate('/');
    });
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
