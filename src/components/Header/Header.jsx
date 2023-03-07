import React from 'react';
import styles from './Header.module.css';
import { HiSun } from 'react-icons/hi';

export default function Header() {
  return (
    <div className={styles.container}>
      <ul className={styles.header}>
        <li>
          <HiSun />
        </li>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </div>
  );
}
