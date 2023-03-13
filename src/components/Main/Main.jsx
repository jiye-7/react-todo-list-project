import React, { useState, useEffect } from 'react';
import TodoList from '../Todo/TodoList/TodoList';
import WriteTodo from '../Todo/WriteTodo/WriteTodo';
import styles from './Main.module.css';

export default function Main({ filterValue }) {
  const [todos, setTodos] = useState([]);
  let localStorageData = [];

  const handleAdd = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleUpdate = (updateTodo) => {
    setTodos(todos.map((t) => (t.id === updateTodo.id ? updateTodo : t)));
  };

  const handleDelete = (deletedTodo) => {
    setTodos(todos.filter((todo) => todo.id !== deletedTodo.id));
  };

  useEffect(() => {
    localStorageData = JSON.parse(localStorage.getItem('todos'));
    if (localStorageData) {
      setTodos([...localStorageData]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.container}>
      <TodoList
        todos={todos}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        filterValue={filterValue}
      />
      <WriteTodo todos={todos} onAddTodo={handleAdd} />
    </div>
  );
}
