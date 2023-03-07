import React from 'react';
import styles from './WriteTodo.module.css';

export default function WriteTodo() {
  return (
    <div className={styles.write}>
      <input type='text' placeholder='Add Todo' />
      <button>Add</button>
    </div>
  );
}
