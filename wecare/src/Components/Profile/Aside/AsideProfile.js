import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImg from '../../../assets/pessoa.jpg';
import styles from './AsideProfile.module.css';
import { USER_PHOTO_GET } from '../../../Api';
import useFetch from '../../../Hooks/useFetch';

const AsideProfile = () => {
  const { data, error, loading, request } = useFetch();

  const activeStyle = {
    background: 'white',
    color: '#0096e6',
  };

  return (
    <div className={styles.sidebarProfile}>
      <div className={styles.sidebarProfileHeader}>
        <img src={ProfileImg} alt="teste" />
        <span>Lucas Souza</span>
      </div>
      <div className={styles.routeOptions}>
        <NavLink
          className={styles.navLink}
          activeStyle={activeStyle}
          to="../profile"
          end
        >
          Dados Pessoais
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeStyle={activeStyle}
          to="resetPassword"
        >
          Alterar Senha
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeStyle={activeStyle}
          to="payment"
        >
          Pagamento
        </NavLink>
      </div>
    </div>
  );
};

export default AsideProfile;
