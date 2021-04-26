import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UsuarioSignUp.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { UserContext } from '../../UserContext';
import { USER_POST } from '../../Api';

const UserSingUp = () => {
  const navigate = useNavigate();
  const nome = useForm();
  const email = useForm();
  const cep = useForm();
  const numero = useForm();
  const uf = useForm();
  const senha = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      nome: nome.value,
      email: email.value,
      cep: cep.value,
      numero: numero.value,
      uf: uf.value,
      senha: senha.value,
    });
    const { response } = await request(url, options);
    if (response.status === 200) userLogin(nome.value, senha.value);
  }

  return (
    <div className={styles.divCentral}>
      <div className={styles.headerLogin}>
        <h1>WeCare</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </div>
      <div className={styles.cadastroContainer}>
        <form className={styles.cadastroForm} onSubmit={handleSubmit}>
          <h2 className={styles.title}>
            Cadastro de Usuário na{' '}
            <span style={{ color: '#0096E6' }}>Wecare</span>
          </h2>
          <div className={styles.Linha}>
            <Input type="text" label="Nome" placeholder="nome" value={nome} />
            <Input
              type="text"
              label="E-mail"
              placeholder="email"
              value={email}
            />
          </div>

          <div className={styles.Linha}>
            <Input
              type="text"
              label="CEP"
              placeholder="cep"
              name="cep"
              value={cep}
            />
            <Input
              type="text"
              label="Numero"
              placeholder="numero"
              value={numero}
            />
          </div>

          <div className={styles.Linha}>
            <Input type="text" label="Estado" placeholder="Estado" value={uf} />
            <Input
              type="text"
              label="Senha"
              placeholder="senha"
              value={senha}
            />
          </div>
          <Button
            type="submit"
            className={styles.btnConfirmar}
            text="Confirmar"
          />
        </form>
      </div>
    </div>
  );
};

export default UserSingUp;
