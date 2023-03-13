import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, handleUpdate, handleDelete }) {
  const { id, status, content } = todo;

  const handleChange = () => {
    if (todo.status === 'active') {
      todo.status = 'completed';
    } else {
      todo.status = 'active';
    }
    handleUpdate(todo);
  };

  const deleteTodo = () => {
    handleDelete(id);
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
