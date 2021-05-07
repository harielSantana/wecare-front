import React from 'react';
import styles from './CuidadorSignUp.module.css';
import { useNavigate } from 'react-router-dom';
import Input from '../Form/Input';
import Textarea from '../Form/TextArea';
import Button from '../Form/Button';
import 'react-tabs/style/react-tabs.css';
import CheckoutForm from '../Pagamento/FormStripe/CheckoutForm';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import { CAREGIVER_POST } from '../../Api';

const CuidadorSingUp = () => {
  const navigate = useNavigate();

  const nome = useForm();
  const email = useForm();
  const senha = useForm();
  const confirmaSenha = useForm();

  const cpf = useForm();
  const telefone = useForm();
  const valorHora = useForm();
  const resumo = useForm();

  const cep = useForm();
  const estado = useForm();
  const numero = useForm();

  const { caregiverLogin } = React.useContext(UserContext);
  const { login, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = CAREGIVER_POST({
      nome: nome,
      email: email,
      senha: senha,
      confirmaSenha: confirmaSenha,

      cpf: cpf,
      telefone: telefone,
      valorHora: valorHora,
      resumo: resumo,

      cep: cep,
      estado: estado,
      numero: numero,
    });
    const { response } = await request(url, options);
    if (response.status == 200) caregiverLogin(nome.value, senha.value);
  }

  return (
    <div className={styles.box}>
      <div className={styles.Wecare}>
        <h1>WeCare</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </div>

      <form className={styles.formCadastro} onSubmit={handleSubmit}>
        <h2 className={styles.title}>
          Cadastro de Cuidador na{' '}
          <span style={{ color: '#0096E6' }}>Wecare</span>
        </h2>
        <div className={styles.Linha}>
          <Input type="text" label="Usuário" {...nome} />
          <Input type="text" label="Email" {...email} />
        </div>

        <div className={styles.Linha}>
          <Input type="password" label="Senha" {...senha} />
          <Input type="password" label="Confirmar Senha" {...confirmaSenha} />
        </div>

        <div className={styles.Linha}>
          <Input type="text" label="CPF" {...cpf} />
          <Input type="text" label="Telefone" {...telefone} />
        </div>

        <div className={styles.Linha}>
          <Input type="text" label="Valor Hora" {...valorHora} />
        </div>

        <div className={styles.LinhaText}>
          <Textarea
            name="Resumo Profissional"
            className={styles.textarea}
            {...resumo}
          />
        </div>

        <h3 className={styles.Endereco}>Endereço</h3>

        <div className={styles.Linha}>
          <Input type="text" label="CEP" {...cep} />
          <Input type="text" label="Estado" {...estado} />
        </div>

        <div className={styles.Linha}>
          <Input type="text" label="numero" {...numero} />
        </div>

        <div className={styles.Linha}>
          <Button
            type="submit"
            className={styles.btnConfirmar}
            text="Confirmar"
          />
        </div>
      </form>
    </div>
  );
};

export default CuidadorSingUp;
