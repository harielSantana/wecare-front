import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Button from './Form/Button';
import { useNavigate } from 'react-router-dom';
import styles from '../Components/Usuario/UsuarioSignIn.module.css';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
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
              <h3>Acessar</h3>
              <p>
                Selecione uma das opções que atendam mais oque você procura:
              </p>
            </div>
            <div style={{ width: '302px', margin: '0 auto' }}>
              <Button
                text="Usuario"
                className={styles.LargeButton}
                onClick={() => navigate('../usuario')}
              />
              <Button
                text="Cuidador"
                className={styles.LargeButton}
                onClick={() => navigate('../cuidador')}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
