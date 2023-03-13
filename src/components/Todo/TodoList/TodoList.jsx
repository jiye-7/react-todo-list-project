import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos, onUpdate, onDelete, filter }) {
  const getFilteredItems = (todos, filter) => {
    if (filter === 'all') {
      return todos;
    } else {
      return todos.filter((todo) => todo.status === filter);
    }
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.todos}>
        {filtered.map((todo, idx) => (
          <TodoItem
            key={idx}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
