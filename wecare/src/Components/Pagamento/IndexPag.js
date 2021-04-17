import React from 'react';
import CheckoutForm from './FormStripe/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import styles from './Pagamento.module.css';

const promise = loadStripe(
  'pk_test_51Ih3OVAJaPU98pGJmdLyIj3vqLxgoduCzOusb2q1PpqJuBGnRPocWWTob8LTuwUI25GGJm4Vxjhf8oZv63jPBQGO00ULuNyfgf',
);

const Pagamento = () => {
  return (
    <section className="container">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </section>
  );
};

export default Pagamento;
