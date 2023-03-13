import React from 'react';
import styles from './Header.module.css';
import { HiSun } from 'react-icons/hi';

export default function Header({ onChangeFilterValue }) {
  const handleSelectFilter = (e) => {
    onChangeFilterValue(e.target.textContent);
  };

  return (
    <header className={styles.container}>
      <ul className={styles.header} onClick={handleSelectFilter}>
        <li>
          <HiSun />
        </li>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </header>
  );
}
