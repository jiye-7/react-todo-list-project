import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo: { id, content, status } }) {
  return (
    <li className={styles.container}>
      <input type='checkbox' id={id} defaultChecked={status === 'completed'} />
      <label htmlFor={id}>{content}</label>
      <button>
        <HiOutlineTrash />
      </button>
    </li>
  );
}
