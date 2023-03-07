import React from 'react';
import TodoList from '../Todo/TodoList/TodoList';
import WriteTodo from '../Todo/WriteTodo/WriteTodo';
import styles from './Main.module.css';

export default function Main() {
  return (
    <div className={styles.container}>
      <TodoList />
      <WriteTodo />
    </div>
  );
}
