import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './WriteTodo.module.css';

export default function WriteTodo({ todos, onAddTodo }) {
  const [text, setInputText] = useState('');

  const handleChange = (e) => setInputText(e.target.value);

  const valueExist = () => {
    if (text.trim().length) {
      createTodo(text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    valueExist();
  };

  const createTodo = (text) => {
    onAddTodo({
      id: uuidv4(),
      content: text,
      status: 'active',
    });
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
