import React from 'react';
import styles from './WriteTodo.module.css';

export default function WriteTodo() {
  return (
    <section className={styles.container}>
      <input type='text' placeholder='Add Todo' />
      <button>Add</button>
    </section>
  );
}
