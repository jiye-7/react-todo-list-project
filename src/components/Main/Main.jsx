import React, { useState, useEffect } from 'react';
import TodoList from '../Todo/TodoList/TodoList';
import WriteTodo from '../Todo/WriteTodo/WriteTodo';
import styles from './Main.module.css';

// localStorage의 length 읽기 속성을 사용하면, Storage 객체에 저장된 데이터 항목의 수를 반환한다.
// 데이터 항목 개수를 구한 다음 1부터 해당 개수만큼 반복문을 돌면서 새로운 배열 변수에 할당하기
export default function Main() {
  const [todos, setTodos] = useState([]);
  let localStorageData = [];

  // create todo
  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // checkbox handler
  const handleUpdate = (updateTodo) => {
    // id가 같은 todo 가져와서 완료/진행중 여부 상태값 변경하고 state update
    setTodos(todos.map((t) => (t.id === updateTodo.id ? updateTodo : t)));
  };

  // delete todo
  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
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
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <WriteTodo todos={todos} handleAddTodo={handleAddTodo} />
    </div>
  );
}
