import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UsuarioSignUp.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import ReCAPTCHA from 'react-google-recaptcha';

const UserSingUp = () => {
  const navigate = useNavigate();
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [uf, setUf] = React.useState('');
  const [senha, setSenha] = React.useState('');
  var recap = '';

  
  function handleSubmit(event) {
    if(recap !== "")
    {
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('email', email);
      formData.append('cep', cep);
      formData.append('numero', numero);
      formData.append('uf', uf);
      formData.append('senha', senha);

      event.preventDefault();

      fetch('https://wecareapi.azurewebsites.net/api/signup', {
      method: 'POST',
      body: formData,
      }).then((response) => {
      if (response.status === 200) navigate('/usuario');
      });
    }
    else
    {
      document.getElementById("errmsg").style.display="inline"
    }
    
  }


  function onChange(value) {
    if (value !== "") {
      recap = value
    }
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
          <h2 className={styles.title}>
            Cadastro de Usuário na{' '}
            <span style={{ color: '#0096E6' }}>Wecare</span>
          </h2>
          <div className={styles.Linha}>
            <Input
              type="text"
              label="Nome"
              placeholder="nome"
              value={nome}
              onChange={({ target }) => setNome(target.value)}
            />
            <Input
              type="text"
              label="E-mail"
              placeholder="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <div className={styles.Linha}>
            <Input
              type="text"
              label="CEP"
              placeholder="cep"
              name="cep"
              value={cep}
              onChange={({ target }) => setCep(target.value)}
            />
            <Input
              type="text"
              label="Numero"
              placeholder="numero"
              value={numero}
              onChange={({ target }) => setNumero(target.value)}
            />
          </div>

          <div className={styles.Linha}>
            <Input
              type="text"
              label="Estado"
              placeholder="Estado"
              value={uf}
              onChange={({ target }) => setUf(target.value)}
            />
            <Input
              type="text"
              label="Senha"
              placeholder="senha"
              value={senha}
              onChange={({ target }) => setSenha(target.value)}
            />
          </div>
          <Button
            type="submit"
            className={styles.btnConfirmar}
            text="Confirmar"
          />
            <ReCAPTCHA
              sitekey="6LdOA54aAAAAAOaPN9eZNpwlsUKvvUVrj2kD0QcE"
              onChange={onChange}
            />
            <span id="errmsg" style={{display:"none",color:"red"}}>Valide o recaptcha !!!</span>
        </form>
      </div>
    </div>
  );
};

export default UserSingUp;
