import React from 'react';
import styles from './Header.module.css';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  console.log(data);
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <span className={styles.span}>WeCare</span>
        {data ? (
          <p className={styles.paragrafo}>
            Plataforma de contratação de serviços especializados.
          </p>
        ) : (
          <button>Sair</button>
        )}
      </div>
    </header>
  );
};

export default Header;
