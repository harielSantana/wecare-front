import React from 'react';
import styles from './ResultContainer.module.css';

const ResultContainer = () => {
  return (
    <div>
      <div className={styles.resultContainer}>
        <div className={styles.person}>
          <ul>
            <li>
              <img src="" alt="" />
            </li>
            <li>Rafael Santos</li>
            <li>Cuidador</li>
            <li>São Paulo</li>
            <li>(11) 99312-3131</li>
          </ul>
        </div>
        <div className={styles.person}>
          <ul>
            <li>
              <img src="" alt="" />
            </li>
            <li>Rafael Santos</li>
            <li>Cuidador</li>
            <li>São Paulo</li>
            <li>(11) 99312-3131</li>
          </ul>
        </div>
        <div className={styles.person}>
          <ul>
            <li>
              <img src="" alt="" />
            </li>
            <li>Rafael Santos</li>
            <li>Cuidador</li>
            <li>São Paulo</li>
            <li>(11) 99312-3131</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultContainer;
