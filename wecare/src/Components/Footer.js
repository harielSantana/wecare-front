import { ReactComponent as SvgGlobo } from '../assets/support_agent.svg';
import { ReactComponent as SvgEmail } from '../assets/world.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3 className={styles.h3}>WeCare</h3>
        <ul className={styles.contatos}>
          <li>
            <SvgGlobo className={styles.svg} />
            wecare@support.com
          </li>
          <li>
            <SvgEmail className={styles.svg} />
            wecare@support.com
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
