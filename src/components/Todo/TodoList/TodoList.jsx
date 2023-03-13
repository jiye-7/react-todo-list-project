import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos, handleDeleteTodo }) {
  return (
    <section className={styles.container}>
      <ul className={styles.todos}>
        {todos?.map((todo, idx) => (
          <TodoItem key={idx} todo={todo} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </section>
  );
}
