import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos, onUpdate, onDelete, filterValue }) {
  console.log(filterValue);

  const handleFiltered = () => {
    if (filterValue === 'All') {
      return todos?.map((todo, idx) => {
        return (
          <TodoItem
            key={idx}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      });
    } else if (filterValue === 'Active') {
      return todos
        ?.filter((todo) => todo.status === 'active')
        .map((todo, idx) => {
          return (
            <TodoItem
              key={idx}
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        });
    } else if (filterValue === 'Completed') {
      return todos
        ?.filter((todo) => todo.status === 'completed')
        .map((todo, idx) => {
          return (
            <TodoItem
              key={idx}
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        });
    }
  };

  return (
    <section className={styles.container}>
      <ul className={styles.todos}>{handleFiltered()}</ul>
    </section>
  );
}
