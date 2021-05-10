import React, { useState } from 'react';
import styles from './Information.module.css';

const Information = () => {
  const [baseImage, setBaseImage] = useState('');

  async function handleSubmit(event) {
    const formData = new FormData();
    formData.append('image', baseImage.split(',')[1]);
    event.preventDefault();
    const response = await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        Authorization: 'Client-ID aa5f9a15c7101dd',
      },
      body: formData,
      redirect: 'follow',
    });
    const { link } = await response.json();
  }

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <img src={baseImage} height="200px" />
      <button>Enviar</button>
    </form>
  );
};

export default Information;
