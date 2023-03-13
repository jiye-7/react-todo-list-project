import React from 'react';
import styles from './Header.module.css';
import { HiSun } from 'react-icons/hi';

export default function Header({ filters, filter, onChangeFilterValue }) {
  return (
    <header className={styles.container}>
      <ul className={styles.header}>
        <li>
          <HiSun />
        </li>
        {filters.map((filterValue, idx) => (
          <li key={idx}>
            <button onClick={() => onChangeFilterValue(filterValue)}>
              {filterValue}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
