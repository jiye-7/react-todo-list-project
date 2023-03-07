import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo }) {
  return (
    <li className={styles.container}>
      <div className={styles.left_item}>
        <input type='checkbox' id={todo.id} />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      <div className={styles.right_item}>
        <HiOutlineTrash />
      </div>
    </li>
  );
}
