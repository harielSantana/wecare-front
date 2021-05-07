import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.ProfileContainer}>
      <div className={styles.sidebarProfile}>
        <div className={styles.sidebarProfileHeader}>
          <img src="" alt="" />
        </div>
        <div className={styles.routeOptions}>
          <NavLink to="information">Dados Pessoais</NavLink>
          <NavLink to="resetPassword">Alterar Senha</NavLink>
          <NavLink to="payment">Pagamento</NavLink>
        </div>
      </div>
      <div className={styles.sidebarContent}>
        <Routes>
          <Route path="/information" />
          <Route path="/resetPassword" />
          <Route path="/payment" />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
