import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo: { id, content, status } }) {
  return (
    <li className={styles.container}>
      <div className={styles.left_item}>
        <input
          type='checkbox'
          id={id}
          defaultChecked={status === 'completed'}
        />
        <label htmlFor={id}>{content}</label>
      </div>
      <div className={styles.right_item}>
        <HiOutlineTrash />
      </div>
    </li>
  );
}
