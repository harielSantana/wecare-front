import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CuidadorSignIn.module.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleSubmit(event) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('senha', senha);

    event.preventDefault();
    fetch('https://wecareapi.azurewebsites.net/api/login/caregiver', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) navigate('/');
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLogin}>
          <div className={styles.headerLogin}>
            <h1>WeCare</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>

          <div className={styles.Login}>
            <div className={styles.textoLogin}>
              <h3>Começe agora</h3>
              <p>
                Criar conta agora para conseguir encontrar o serviço que você
                necessita
              </p>
            </div>
            <form className={styles.formLogin} onSubmit={handleSubmit}>
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
              <button
                className={styles.btnCriarConta}
                onClick={() => navigate('cadastrar')}
              >
                Criar conta
              </button>
              <button className={styles.btnAcessar}>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
