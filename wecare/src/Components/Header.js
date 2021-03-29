import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <span className={styles.span}>WeCare</span>
        <p className={styles.paragrafo}>
          Plataforma de contratação de serviços especializados
        </p>
      </div>
    </header>
  );
};

export default Header;
