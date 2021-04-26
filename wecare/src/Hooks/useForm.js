import React from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  CPF: {
    regex: /^\d{3}\.\d{3}\.\d{3}\d{2}$/,
    message: 'Preencha um CPF válido',
  },
  CEP: {
    regex: /^\d{5}-\d{3}$/,
    message: 'Preencha um CEP válido. Ex: 03064-000',
  },
  celular: {
    regex: /^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}[0-9]{4}$/,
    message: 'Preencha um número válido. Ex: 119090-3101',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validade: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
