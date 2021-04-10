import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import Button from '../Form/Button';
import React from 'react';

const CaptchaButton = ({ onVerifyCaptcha }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha('contact');

    onVerifyCaptcha(token);
  };

  return (
    <Button onClick={clickHandler}>Please validate you are a human.</Button>
  );
};

export const ReCaptcha = ({ onVerifyCaptcha }) => (
  <GoogleReCaptchaProvider reCaptchaKey="6LdOA54aAAAAAOaPN9eZNpwlsUKvvUVrj2kD0QcE">
    <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
  </GoogleReCaptchaProvider>
);
