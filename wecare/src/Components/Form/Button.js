import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, text, onClick }) => {
  return (
    <button className={styles.LargeButton} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
