// SearchBar.js
import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {

  const [searchText, setSearchText] = useState('');

  // const handleText = (teste) => {
  //   setSearchText(teste.target.value);
  //   onSearch(searchText);
  // }

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <>
        <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            className={styles.inputSize}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <ion-icon name="search-outline"></ion-icon>
      </button>
    </>
  );
};

export default SearchBar;
