import React from 'react';
import Button from './Form/Button';
import { useNavigate } from 'react-router-dom';
import styles from '../Components/Usuario/UsuarioSignIn.module.css';
import styles2 from './SignIn.module.css';
import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value) {
  if (value === '') {
    console.log('Your not a HUMAN');
  } else {
    document.getElementById('form').style.display = 'flex';
    document.getElementById('recap').style.display = 'none';
  }
}

const SignIn = () => {
  const navigate = useNavigate();

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
              <h3>Acessar</h3>
              <p>
                Selecione uma das opções que atendam mais oque você procura:
              </p>
            </div>
            <div id="form" style={{ display: 'none' }} className={styles2.Form}>
              <Button
                text="Usuario"
                className={styles2.LargeButton}
                onClick={() => navigate('../usuario')}
              />
              <Button
                text="Cuidador"
                className={styles2.LargeButton}
                onClick={() => navigate('../cuidador')}
              />
            </div>
            <div
              id="recap"
              style={{ display: 'flex' }}
              className={styles2.ReCAPTCHA}
            >
              <ReCAPTCHA
                sitekey="6LdOA54aAAAAAOaPN9eZNpwlsUKvvUVrj2kD0QcE"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
