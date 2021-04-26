import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import undraw_people from '../assets/undrawteste1.png';
import undraw_meet from '../assets/undraw_meet.png';
import { ReactComponent as SvgWecare } from '../assets/svg-wecare.svg';

const Home = () => {
  return (
    <>
      <div className={styles.homePrincipal} style={{ marginTop: '-5rem' }}>
        <SvgWecare className={styles.svgwecare} />
        <div className={styles.SideContent}>
          <h1>Wecare</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at
            lectus urna duis convallis convallis tellus id.
          </p>
          <Link className={styles.link} to="acessar">
            Acessar
          </Link>
        </div>
      </div>

      <div className={styles.comoFunciona}>
        <div className={styles.texto}>
          <h2>Como funciona?</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </span>
        </div>
        <img src={undraw_people} alt="desenho" />
      </div>

      <div className={styles.quemPodeUsar}>
        <img src={undraw_meet} alt="desenho" />
        <div className={styles.texto}>
          <h2>Quem pode usar?</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
