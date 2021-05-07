import React from 'react';
import styles from './Pesquisa.module.css';
import ResultContainer from './ResultContainer/ResultContainer';
import SearchContainer from './SearchContainer/SearchContainer';

const Pesquisa = () => {
  return (
    <>
      <div className={styles.container}>
        <SearchContainer />
        <ResultContainer />
      </div>
    </>
  );
};

export default Pesquisa;
