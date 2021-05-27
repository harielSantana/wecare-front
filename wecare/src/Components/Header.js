import React from 'react';
import styles from './Header.module.css';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <span className={styles.span}>WeCare</span>
        {data ? (
          <p> Bem vindo, {data.nomE_USUARIO}!</p>
        ) : (
          <p className={styles.paragrafo}>
            Plataforma de contratação de serviços especializados.
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
