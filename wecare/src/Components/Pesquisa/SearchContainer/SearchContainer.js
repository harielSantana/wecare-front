import React from 'react';
import styles from './SearchContainer.module.css';

const SearchContainer = () => {
  return (
    <>
      <div className={styles.SearchContainer}>
        <div className={styles.SearchBar}>
          <input type="text" className={styles.SearchInput} />
          <button className={styles.SearchButton}>Pesquisar</button>
        </div>

        <span className={styles.filtroSelect}>Filtro</span>
        <div className={styles.FilterBox}>
          <div className={styles.FilterOption}>
            <select>
              <option value="">Estado</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchContainer;
