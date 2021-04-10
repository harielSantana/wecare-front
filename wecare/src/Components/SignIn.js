import React, { useEffect, useState } from 'react';
import Button from './Form/Button';
import { useNavigate } from 'react-router-dom';
import styles from '../Components/Usuario/UsuarioSignIn.module.css';
import styles2 from './SignIn.module.css';
import ReCaptcha from '../Components/Form/Captcha';

const SignIn = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');

  const On;

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
            <div
              id="form"
              style={{ width: '302px', margin: '0 auto', display: 'none' }}
            >
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
            <div>
              <ReCaptcha onVerifyCaptcha={onVerifyCaptcha} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

const [ativo, setAtivo] = React.useState(false);

setAtivo(() => setAtivo(!ativo));
