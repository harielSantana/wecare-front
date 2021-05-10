import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styles from './Profile.module.css';
import Information from './Information/Information'
import Password from './resetPassword/Password'
import Payment from './Payment/Payment'
import AsideProfile from './Aside/AsideProfile';

const Profile = () => {



  return (
    <div className={styles.ProfileContainer}>
      <AsideProfile/>
      <div className={styles.sidebarContent}>
        <Routes>
          <Route path="/"  element={<Information/>}/>
          <Route path="/resetPassword" element={<Password/>}/>
          <Route path="/payment"  element={<Payment />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
