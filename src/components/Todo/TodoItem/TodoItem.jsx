import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, status, content } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const deleteTodo = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.container}>
      <input
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id}>{content}</label>
      <button onClick={deleteTodo}>
        <HiOutlineTrash />
      </button>
    </li>
  );
}
