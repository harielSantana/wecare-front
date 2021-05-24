import React, { useState } from 'react';
import { USER_PHOTO_POST, CAREGIVER_PHOTO_POST } from '../../../Api';
import useFetch from '../../../Hooks/useFetch';
import styles from './Information.module.css';

const Information = () => {
  const [baseImage, setBaseImage] = useState('');
  const { data, error, loading, request } = useFetch();

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
    const retorno = await response.json();
    const link = retorno['data']['link'];

    const token = window.localStorage.getItem('token');
    const iscaregiver = window.localStorage.getItem('iscaregiver');

    console.log({
      token: token,
      url_img: link,
      IsCaregiver: iscaregiver,
    });

    if (iscaregiver === 'false') {
      const { url, options } = USER_PHOTO_POST({
        token: token,
        url_img: link,
        IsCaregiver: false,
      });
      request(url, options);
      alert('Foto de Usuario Salva');
    } else if (iscaregiver === 'true') {
      const { url, options } = CAREGIVER_PHOTO_POST({
        token: token,
        url_img: link,
        IsCaregiver: true,
      });
      request(url, options);
      alert('Foto de Cuidador Salva');
    } else {
      alert('Não Conseguimos Cadastrar a Imagem');
    }
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
      <img src={baseImage} height="200px" alt="profile" />
      <button>Enviar</button>
    </form>
  );
};

export default Information;
