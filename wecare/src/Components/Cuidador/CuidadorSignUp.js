import React from 'react';
import styles from './CuidadorSignUp.module.css';
import { useNavigate } from 'react-router-dom';
import Input from '../Form/Input';
import Textarea from '../Form/TextArea';
import Button from '../Form/Button';

const CuidadorSingUp = () => {
  const navigate = useNavigate();
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [confirmaSenha, setConfirmaSenha] = React.useState('');

  const [cpf, setCpf] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [valorHora, setValorHora] = React.useState('');
  const [resumo, setResumo] = React.useState('');

  const [cep, setCep] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [numero, setNumero] = React.useState('');

  function handleSubmit(event) {
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('senha', senha);

    formData.append('cpf', cpf);
    formData.append('telefone', telefone);
    formData.append('valorHora', valorHora);
    formData.append('resumo', resumo);

    formData.append('cep', cep);
    formData.append('numero', numero);
    formData.append('uf', estado);

    console.log(formData);

    event.preventDefault();
    fetch('https://wecareapi.azurewebsites.net/api/signup/caregiver', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      const json = response.json();
      console.log(json);
      if (response.status === 200) navigate('/');
    });
  }

  return (
    <div className={styles.box}>
      <div className={styles.Wecare}>
        <h1>WeCare</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </div>
      <form className={styles.formCadastro} onSubmit={handleSubmit}>
        <h2 className={styles.title}>
          Cadastro de Cuidador na{' '}
          <span style={{ color: '#0096E6' }}>Wecare</span>
        </h2>
        <div className={styles.Linha}>
          <Input
            type="text"
            label="Usuário"
            placeholder="yourteam23"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />

          <Input
            type="text"
            label="Email"
            placeholder="teste@gmail.com"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <div className={styles.Linha}>
          <Input
            type="password"
            label="Senha"
            placeholder="******"
            value={senha}
            onChange={({ target }) => setSenha(target.value)}
          />

          <Input
            type="password"
            label="Confirmar Senha"
            placeholder="******"
            value={confirmaSenha}
            onChange={({ target }) => setConfirmaSenha(target.value)}
          />
        </div>

        <div className={styles.Linha}>
          <Input
            type="text"
            label="CPF"
            placeholder="11111.3333.21212-13"
            value={cpf}
            onChange={({ target }) => setCpf(target.value)}
          />

          <Input
            type="text"
            label="Telefone"
            placeholder="telefone"
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
          />
        </div>

        <div className={styles.Linha}>
          <Input
            type="text"
            label="Valor Hora"
            placeholder="R$ 32.00"
            value={valorHora}
            onChange={({ target }) => setValorHora(target.value)}
          />
        </div>

        <div className={styles.LinhaText}>
          <Textarea
            name="Resumo Profissional"
            value={resumo}
            className={styles.textarea}
            placeholder="Digite aqui um resumo sobre você e sua carreira"
            onChange={({ target }) => setResumo(target.value)}
          />
        </div>

        <h3 className={styles.Endereco}>Endereço</h3>

        <div className={styles.Linha}>
          <Input
            type="text"
            label="CEP"
            placeholder="CEP"
            value={cep}
            onChange={({ target }) => setCep(target.value)}
          />

          <Input
            type="text"
            label="Estado"
            placeholder="estado"
            value={estado}
            onChange={({ target }) => setEstado(target.value)}
          />
        </div>

        <div className={styles.Linha}>
          <Input
            type="text"
            label="numero"
            placeholder="Numero"
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
          />
        </div>

        <div className={styles.Linha}>
          <Button
            type="submit"
            className={styles.btnConfirmar}
            text="Confirmar"
          />
        </div>
      </form>
    </div>
  );
};

export default CuidadorSingUp;
