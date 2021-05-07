import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UsuarioSignIn.module.css';
import { UserContext } from '../../UserContext';
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Form/Button';

const SignIn = () => {
  const navigate = useNavigate();

  const email = useForm();
  const senha = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && senha.validate()) {
      userLogin(email.value, senha.value);
    } else if (error) return console.log(error.message);
  }

  return (
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
            <Input label="E-mail" type="text" name="email" {...email} />
            <Input label="Senha" type="password" name="senha" {...senha} />
            {loading ? (
              <Button>Carregando ...</Button>
            ) : (
              <button className={styles.btnAcessar}>Entrar</button>
            )}
            <button
              className={styles.btnCriarConta}
              onClick={() => navigate('cadastrar')}
            >
              Criar conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
