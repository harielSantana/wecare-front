import React from 'react'
import  {NavLink}  from 'react-router-dom';
import ProfileImg from '../../../assets/pessoa.jpg'
import styles from './AsideProfile.module.css'

const AsideProfile = () => {
    const activeStyle = {
        background: 'white',
        color: '#0096e6'
    };

    return (
        <div className={styles.sidebarProfile}>
            <div className={styles.sidebarProfileHeader}>
                <img src={ProfileImg} alt="teste" />
                <span>Lucas Souza</span>
            </div>
            <div className={styles.routeOptions}>
                <NavLink className={styles.navLink} activeStyle={activeStyle} to="../profile" end>Dados Pessoais</NavLink>
                <NavLink className={styles.navLink} activeStyle={activeStyle} to="resetPassword">Alterar Senha</NavLink>
                <NavLink className={styles.navLink} activeStyle={activeStyle} to="payment">Pagamento</NavLink>
            </div>
      </div>
    )
}

export default AsideProfile;
